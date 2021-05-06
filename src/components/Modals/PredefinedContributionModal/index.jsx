import React, {useState, useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalInput from '../ModalComponents/ModalInput'
import ContributeAssetsSelect from './ContributeAssetsSelect'
import ContributorEntitySelect from './ContributorEntitySelect'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ContributionIssuanceSelect from './ContributionIssuanceSelect'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import PredefinedParticipantDropdown from '../../Dropdowns/PredefinedParticipantDropdown'
import PredefinedRecipientDropdown from '../../Dropdowns/PredefinedRecipientDropdown'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {createEntityHistoryForChart} from '../../../store/entityHistory/actions'
import {checkIfEntityIsParent, createAffectedEntity, findAllDescendantsOfTargetEntity, getEntityFromId, sortEntitiesByName} from '../../../helpers'
import {ParticipationOtherAssetsInputPlaceholder, PredefinedModalInternalContainer} from '../styles'
import {FadeInContainer} from '../../../style/animations'


const PredefinedContributionModal = ({entities, error, saveNewLinkHandler, saveEditEntityHandler,
                                         setShowPredefinedContribution, showPredefinedContribution}) => {

    let searchContributorTerm = useRef('')
    let searchRecipientTerm = useRef('')
    let searchParticipantTerm = useRef('')
    const dispatch = useDispatch()
    const [showContributorDropdown, setShowContributorDropdown] = useState(false)
    const [showRecipientDropdown, setShowRecipientDropdown] = useState(false)
    const [showAssetsDropdown, setShowAssetsDropdown] = useState(false)
    const [showParticipantDropdown, setShowParticipantDropdown] = useState(false)
    const [filteredContributors, setFilteredContributors] = useState([])
    // Used to render the recipients to add, array is filtered by the search input
    const [filteredRecipients, setFilteredRecipients] = useState([])
    // Used to contain a list of available recipients during adding that can be rolled back to when resetting the filter
    const [availableRecipients, setAvailableRecipients] = useState([])
    // Used to render the participants to add, array is filtered by the search input
    const [filteredParticipants, setFilteredParticipants] = useState([])
    // Used to contain a list of available participants during adding that can be rolled back to when resetting the filter
    const [availableParticipants, setAvailableParticipants] = useState([])
    const [targetContributor, setTargetContributor] = useState('')
    const [targetParticipant, setTargetParticipant] = useState('')
    const [targetRecipient, setTargetRecipient] = useState('')
    const [contributedAssets, setContributedAssets] = useState('')
    const [issuanceNewShares, setIssuanceNewShares] = useState(false)
    const [otherAssetsLabel, setOtherAssetsLabel] = useState('')

    useEffect(() => {
        const result = sortEntitiesByName(entities)
        setFilteredContributors([...result])
    }, [entities])

    //Used to filter a list of entities for all entities that are descendants of a specified entityId
    const findPossibleRecipients = (arrayOfEntities, contributorId) => {
        const recipients = findAllDescendantsOfTargetEntity(arrayOfEntities, contributorId)
        setAvailableRecipients([...recipients])
        setFilteredRecipients([...recipients])
    }

    //Used to filter a list of entities for all entities that are direct children of a specified entityId
    const findPossibleParticipants = (arrayOfEntities, contributorId, recipientId) => {
        const participants = []

        //Finds all the direct children of the contributor, and adds them to participants
        arrayOfEntities.forEach(entity => {
            if (checkIfEntityIsParent(entity.pid, contributorId)) {
                participants.push(entity)
            }
        })

        //Starts from the recipient and works up the family tree checking if the entity is contained in participants
        //Removes any entities that are in the direct line between recipient and contributor from participants
        const checkParticipants = recipientId => {
            if (recipientId) {
                const index = participants.findIndex(entity => parseInt(entity.id) === parseInt(recipientId))
                if (index >= 0) {
                    participants.splice(index, 1)
                }
                const recipient = getEntityFromId(recipientId, entities)
                checkParticipants(recipient.pid)
            }
        }
        checkParticipants(recipientId)
        setAvailableParticipants([...participants])
        setFilteredParticipants([...participants])
    }

    const handleSelectContributorChange = contributorId => {
        setTargetRecipient('')
        findPossibleRecipients(entities, contributorId)
        setTargetContributor(contributorId)
        setShowContributorDropdown(false)
    }

    const handleSelectRecipientChange = recipientId => {
        setTargetParticipant('')
        findPossibleParticipants(entities, targetContributor, recipientId)
        setTargetRecipient(recipientId)
        setShowRecipientDropdown(false)
    }

    const handleSelectAssetsContributedChange = assetType => {
        setContributedAssets(assetType)
        setShowAssetsDropdown(false)
        setOtherAssetsLabel('')
        setTargetParticipant('')
    }

    const handleSelectParticipantChange = participantId => {
        setTargetParticipant(participantId)
        setShowParticipantDropdown(false)
    }

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedContribution(false)
    }

    const contributionModalErrorHandler = () => {
        if (!targetContributor) {
            dispatch(setError({contributor: 'You must choose an entity to contribute from.'}))
            return true
        } else if (!targetRecipient) {
            dispatch(setError({recipient: 'You must choose an entity to be the recipient.'}))
            return true
        } else if (!contributedAssets){
            dispatch(setError({contributedAssets: 'You must choose the type of assets contributed.'}))
            return true
        } else if (contributedAssets === 'other assets' && !otherAssetsLabel) {
            dispatch(setError({contributedOtherAssets: 'You must specify what other assets are being contributed.'}))
            return true
        } else if (contributedAssets === 'participation' && !targetParticipant) {
            dispatch(setError({participant: 'You must choose an entity to be the participant.'}))
            return true
        } else {
            return false
        }
    }

    const handleSaveButton = async () => {
        dispatch(resetErrors())
        //Handles input validation for contribution modal
        const error = contributionModalErrorHandler()
        if (!error) {
            if (contributedAssets === 'other assets') {
                // Create data for the clink
                const assetLink = {
                    from: targetContributor,
                    to: targetRecipient,
                    type: 'clink',
                    label: `Contribution of: ${otherAssetsLabel}`,
                    color: 'orange'
                }
                // Update the chart with the new clink
                const chartResponse = await saveNewLinkHandler(assetLink, entities)
                // Create information needed for entity histories
                const affectedEntities = [createAffectedEntity(parseInt(targetRecipient), 'recipient')]
                const entityHistoryData = {
                    action: 'contribution',
                    affected: JSON.stringify(affectedEntities)
                }
                // Save entity histories
                dispatch(createEntityHistoryForChart(parseInt(targetContributor), chartResponse.data.id, entityHistoryData))

            } else if (contributedAssets === 'participation') {
                const participant = getEntityFromId(targetParticipant, entities)
                // Create information for the participant
                const editParticipantInfo = {
                    entitySelected: true,
                    entityName: participant.name,
                    parentId: targetRecipient,
                    taxRate: participant.tax_rate,
                    entityToEditId: participant.id
                }
                // Create data for clink
                const participationLink = {
                    from: targetContributor,
                    to: targetRecipient,
                    type: 'clink',
                    label: "Contribution of Shares",
                    color: 'orange'
                }
                // Create information needed for entity histories
                const entitiesAffected = []
                entitiesAffected.push(createAffectedEntity(parseInt(targetRecipient), 'recipient'))
                entitiesAffected.push(createAffectedEntity(parseInt(targetContributor), 'contributor'))
                // Save changes to the chart
                const chartResponse = await saveEditEntityHandler(editParticipantInfo, participant.location, participant.legal_form, 'contribution_participant', entitiesAffected)
                    if (chartResponse.status === 201 || chartResponse.status === 200) {
                        saveNewLinkHandler(participationLink, entities, true)
                    }
            }
            setShowPredefinedContribution(false)
        }
    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedContribution}
            showModalView={showPredefinedContribution}
        >
            <Draggable>
                <PredefinedModalInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedContribution} />
                    <ModalTitle title='Contribution' />
                    <ContributorEntitySelect
                        entities={entities}
                        error={error}
                        filteredContributors={filteredContributors}
                        handleSelectContributorChange={handleSelectContributorChange}
                        searchContributorTerm={searchContributorTerm}
                        setFilteredContributors={setFilteredContributors}
                        setShowContributorDropdown={setShowContributorDropdown}
                        showContributorDropdown={showContributorDropdown}
                        targetContributor={targetContributor}
                    />
                    <PredefinedRecipientDropdown
                        availableRecipients={availableRecipients}
                        disabled={!targetContributor}
                        entities={entities}
                        error={error}
                        filteredRecipients={filteredRecipients}
                        handleSelectRecipientChange={handleSelectRecipientChange}
                        searchRecipientTerm={searchRecipientTerm}
                        setFilteredRecipients={setFilteredRecipients}
                        setShowRecipientDropdown={setShowRecipientDropdown}
                        showRecipientDropdown={showRecipientDropdown}
                        targetRecipient={targetRecipient}
                    />
                    <ContributeAssetsSelect
                        contributedAssets={contributedAssets}
                        error={error}
                        handleSelectAssetsContributedChange={handleSelectAssetsContributedChange}
                        setShowAssetsDropdown={setShowAssetsDropdown}
                        showAssetsDropdown={showAssetsDropdown}
                        targetContributor={targetContributor}
                    />
                    {!contributedAssets ? (
                        <ParticipationOtherAssetsInputPlaceholder />) :
                        contributedAssets === 'other assets' ? (
                            <FadeInContainer>
                                <ModalInput
                                    changeHandler={(e) => setOtherAssetsLabel(e.target.value)}
                                    disabled={!targetContributor}
                                    error={error}
                                    errorLocation={error.contributedOtherAssets}
                                    label='Distributed assets'
                                    name='other_assets'
                                    placeholder='Specify assets to distribute'
                                    type='text'
                                    value={otherAssetsLabel}
                                />
                            </FadeInContainer>
                            ) : (
                                <PredefinedParticipantDropdown
                                    availableParticipants={availableParticipants}
                                    disabled={!targetRecipient}
                                    entities={entities}
                                    error={error}
                                    filteredParticipants={filteredParticipants}
                                    handleSelectParticipantChange={handleSelectParticipantChange}
                                    searchParticipantTerm={searchParticipantTerm}
                                    setFilteredParticipants={setFilteredParticipants}
                                    setShowParticipantDropdown={setShowParticipantDropdown}
                                    showParticipantDropdown={showParticipantDropdown}
                                    targetParticipant={targetParticipant}
                                />)}
                    <ContributionIssuanceSelect
                        issuanceNewShares={issuanceNewShares}
                        setIssuanceNewShares={setIssuanceNewShares}
                    />
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                        saveHandler={handleSaveButton}
                    />
                </PredefinedModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedContributionModal

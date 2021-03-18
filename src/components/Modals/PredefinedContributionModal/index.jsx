import React, {useState, useEffect, useRef} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import OtherAssetsInput from './OtherAssetsInput'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import RecipientEntitySelect from './RecipientEntitySelect'
import ContributeAssetsSelect from './ContributeAssetsSelect'
import ParticipantEntitySelect from './ParticipantEntitySelect'
import ContributorEntitySelect from './ContributorEntitySelect'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ContributionIssuanceSelect from './ContributionIssuanceSelect'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {getEntityFromId, sortEntitiesByName} from '../../../helpers'
import {PredefinedModalInternalContainer} from '../styles'
import {ParticipationOtherAssetsInputPlaceholder} from './styles'


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

    //Used to check if a entity matches a target entity's parentId
    const checkIfEntityIsParent = (entityParentId, targetParentId) => {
        return parseInt(entityParentId) === parseInt(targetParentId)
    }

    //Used to filter a list of entities for all entities that are descendants of a specified entityId
    const findPossibleRecipients = (arrayOfEntities, contributorId) => {
        const recipients = []
        let parentId = ''

        arrayOfEntities.forEach(entity => {
            if (checkIfEntityIsParent(entity.pid, contributorId)) {
                recipients.push(entity)
            } else {
                if (entity.pid) {
                    parentId = entity.pid
                    while (parentId) {
                        const parentEntity = getEntityFromId(parentId, entities)
                        if (checkIfEntityIsParent(parentEntity.pid, contributorId)) {
                            recipients.push(entity)
                            break
                        } else {
                            if (parentEntity.pid) {
                                parentId = parentEntity.pid
                            } else {
                                parentId = ''
                            }
                        }
                    }
                }
            }
        })
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
    }

    const handleSelectParticipantChange = participantId => {
        setTargetParticipant(participantId)
        setShowParticipantDropdown(false)
    }

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedContribution(false)
    }

    const handleSaveButton = async () => {
        if (contributedAssets === 'other assets') {
            const assetLink = {
                from: targetContributor,
                to: targetRecipient,
                type: 'clink',
                label: `Contribution of: ${otherAssetsLabel}`,
                color: 'orange'
            }
            saveNewLinkHandler(assetLink)
        } else if (contributedAssets === 'participation') {
            const participant = getEntityFromId(targetParticipant, entities)
            const editParticipantInfo = {
                entitySelected: true,
                entityName: participant.name,
                parentId: targetRecipient,
                taxRate: participant.tax_rate,
                entityToEditId: participant.id
            }
            const participationLink = {
                from: targetContributor,
                to: targetRecipient,
                type: 'clink',
                label: "Contribution of Shares",
                color: 'orange'
            }
            const response = await saveEditEntityHandler(editParticipantInfo, participant.location, participant.legal_form)
                if (response) {
                    saveNewLinkHandler(participationLink, true)
                }
        }
        setShowPredefinedContribution(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedContribution}
            showModalView={showPredefinedContribution}
        >
            <Draggable>
                <PredefinedModalInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedContribution} />
                    <ModalTitle title='Contribution Step' />
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
                    <RecipientEntitySelect
                        availableRecipients={availableRecipients}
                        entities={entities}
                        error={error}
                        filteredRecipients={filteredRecipients}
                        handleSelectRecipientChange={handleSelectRecipientChange}
                        searchRecipientTerm={searchRecipientTerm}
                        setFilteredRecipients={setFilteredRecipients}
                        setShowRecipientDropdown={setShowRecipientDropdown}
                        showRecipientDropdown={showRecipientDropdown}
                        targetContributor={targetContributor}
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
                            <OtherAssetsInput
                                error={error}
                                otherAssetsLabel={otherAssetsLabel}
                                setOtherAssetsLabel={setOtherAssetsLabel}
                            />) : (
                                <ParticipantEntitySelect
                                    availableParticipants={availableParticipants}
                                    entities={entities}
                                    error={error}
                                    filteredParticipants={filteredParticipants}
                                    handleSelectParticipantChange={handleSelectParticipantChange}
                                    searchParticipantTerm={searchParticipantTerm}
                                    setFilteredParticipants={setFilteredParticipants}
                                    setShowParticipantDropdown={setShowParticipantDropdown}
                                    showParticipantDropdown={showParticipantDropdown}
                                    targetParticipant={targetParticipant}
                                    targetRecipient={targetRecipient}
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

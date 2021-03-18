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
import {getParentFromId, sortEntitiesByName} from '../../../helpers'
import {PredefinedModalInternalContainer} from '../styles'
import {ParticipationOtherAssetsInputPlaceholder} from './styles'


const PredefinedContributionModal = ({entities, error, setShowPredefinedContribution, showPredefinedContribution}) => {

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
                        const parentEntity = getParentFromId(parentId, entities)
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
    const findPossibleParticipants = (arrayOfEntities, recipientId) => {
        const participants = []

        arrayOfEntities.forEach(entity => {
            if (checkIfEntityIsParent(entity.pid, recipientId)) {
                participants.push(entity)
            }
        })
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
        findPossibleParticipants(entities, recipientId)
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
                    />
                </PredefinedModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedContributionModal

import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalInput from '../ModalComponents/ModalInput'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import ModalDropdownSearchField from '../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {getEntityInfo, renderEntitiesForModalDropdowns, sortEntitiesByName} from '../../../helpers'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {EntityErrorContainer, PredefinedModalInternalContainer} from '../styles'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../Dropdowns/styles'
import {ParticipationOtherAssetsInputPlaceholder} from '../PredefinedContributionModal/styles'
import {FadeInContainer} from '../../../style/animations'
import PredefinedParticipantDropdown from '../../Dropdowns/PredefinedParticipantDropdown'

const PredefinedDistributionModal = ({entities, error, setShowPredefinedDistribution, showPredefinedDistribution}) => {

    let searchDistributorTerm = useRef('')
    let searchRecipientTerm = useRef('')
    let searchParticipantTerm = useRef('')
    const dispatch = useDispatch()
    const [showDistributorDropdown, setShowDistributorDropdown] = useState(false)
    const [showRecipientDropdown, setShowRecipientDropdown] = useState(false)
    const [showAssetsDropdown, setShowAssetsDropdown] = useState(false)
    const [showParticipantDropdown, setShowParticipantDropdown] = useState(false)
    // Used to render the distributors to add, array is filtered by the search input
    const [filteredDistributors, setFilteredDistributors] = useState([])
    // Used to render the recipients to add, array is filtered by the search input
    const [filteredRecipients, setFilteredRecipients] = useState([])
    // Used to render the participants to add, array is filtered by the search input
    const [filteredParticipants, setFilteredParticipants] = useState([])
    // Used to contain a list of available recipients during adding that can be rolled back to when resetting the filter
    const [availableRecipients, setAvailableRecipients] = useState([])
    // Used to contain a list of available distributors during adding that can be rolled back to when resetting the filter
    const [availableDistributors, setAvailableDistributors] = useState([])
    // Used to contain a list of available participants during adding that can be rolled back to when resetting the filter
    const [availableParticipants, setAvailableParticipants] = useState([])
    const [targetDistributor, setTargetDistributor] = useState('')
    const [targetRecipient, setTargetRecipient] = useState('')
    const [targetParticipant, setTargetParticipant] = useState('')
    const [distributedAssets, setDistributedAssets] = useState('')
    const [otherAssetsLabel, setOtherAssetsLabel] = useState('')
    const [businessAssetsLabel, setBusinessAssetsLabel] = useState('')

    useEffect(() => {
        const result = sortEntitiesByName(entities.filter(entity => entity.pid && entity.pid !== 'Ultimate'))
        setAvailableDistributors([...result])
        setFilteredDistributors([...result])
    }, [entities])

    //Used to filter a list of entities for the distributor that are the direct parent of the distributor
    const findPossibleRecipient = (arrayOfEntities, distributorId) => {
        const targetDistributor = entities.find(entity => parseInt(entity.id) === parseInt(distributorId))
        const result = entities.filter(entity => parseInt(entity.id) === parseInt(targetDistributor.pid))
        setAvailableRecipients([...result])
        setFilteredRecipients([...result])
    }

    //Used to filter a list of entities for the distributor that are direct children of the distributor
    const findPossibleParticipants = (arrayOfEntities, distributorId) => {
        const result = sortEntitiesByName(arrayOfEntities.filter(entity => parseInt(entity.pid) === parseInt(distributorId)))
        setAvailableParticipants([...result])
        setFilteredParticipants([...result])
    }

    const handleSelectDistributorChange = distributorId => {
        setTargetRecipient('')
        findPossibleRecipient(entities, distributorId)
        setTargetDistributor(distributorId)
        setShowDistributorDropdown(false)
    }

    const handleSelectRecipientChange = recipientId => {
        setTargetParticipant('')
        findPossibleParticipants(entities, targetDistributor)
        setTargetRecipient(recipientId)
        setShowRecipientDropdown(false)
    }

    const handleSelectAssetsDistributedChange = assetType => {
        setDistributedAssets(assetType)
        setShowAssetsDropdown(false)
        setOtherAssetsLabel('')
        setBusinessAssetsLabel('')
        setTargetParticipant('')
    }

    const handleSelectParticipantChange = participantId => {
        setTargetParticipant(participantId)
        setShowParticipantDropdown(false)
    }

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedDistribution(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedDistribution}
            showModalView={showPredefinedDistribution}
        >
            <Draggable>
                <PredefinedModalInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedDistribution} />
                    <ModalTitle title='Distribution Step' />
                    <div>
                        <ActiveInputLabel>Distributor</ActiveInputLabel>
                        <DropdownInternalContainer
                            setDropdownView={setShowDistributorDropdown}
                            showDropdownView={showDistributorDropdown}
                        >
                            <ModalDropdownButton
                                onClick={() => setShowDistributorDropdown(!showDistributorDropdown)}
                            >
                                {!targetDistributor ? 'Select a distributor' : getEntityInfo(entities, targetDistributor)}
                            </ModalDropdownButton>
                            <ModalDropdownContentContainer show={showDistributorDropdown ? 1 : 0}>
                                <ModalDropdownSearchField
                                    filterStateSet={setFilteredDistributors}
                                    inputName='distributor_entity_search'
                                    inputPlaceholder='Search for distributor'
                                    inputRef={searchDistributorTerm}
                                    originalArray={availableDistributors}
                                    term={searchDistributorTerm}
                                />
                                {renderEntitiesForModalDropdowns(filteredDistributors, handleSelectDistributorChange)}
                            </ModalDropdownContentContainer>
                        </DropdownInternalContainer>
                        <EntityErrorContainer>
                            {error && <ErrorMessage>{error.distributor}</ErrorMessage>}
                        </EntityErrorContainer>
                    </div>
                    <div>
                        <ActiveInputLabel
                            disabled={!targetDistributor}
                        >
                            Recipient
                        </ActiveInputLabel>
                        <DropdownInternalContainer
                            setDropdownView={setShowRecipientDropdown}
                            showDropdownView={showRecipientDropdown}
                        >
                            <ModalDropdownButton
                                disabled={!targetDistributor}
                                onClick={() => setShowRecipientDropdown(!showRecipientDropdown)}
                            >
                                {!targetRecipient ? 'Select a recipient' : getEntityInfo(entities, targetRecipient)}
                            </ModalDropdownButton>
                            <ModalDropdownContentContainer show={showRecipientDropdown ? 1 : 0}>
                                <ModalDropdownSearchField
                                    filterStateSet={setFilteredRecipients}
                                    inputName='recipient_entity_search'
                                    inputPlaceholder='Search for recipient'
                                    inputRef={searchRecipientTerm}
                                    originalArray={availableRecipients}
                                    term={searchRecipientTerm}
                                />
                                {renderEntitiesForModalDropdowns(filteredRecipients, handleSelectRecipientChange)}
                            </ModalDropdownContentContainer>
                        </DropdownInternalContainer>
                        <EntityErrorContainer>
                            {error && <ErrorMessage>{error.recipient}</ErrorMessage>}
                        </EntityErrorContainer>
                    </div>
                    <div>
                        <ActiveInputLabel
                            disabled={!targetDistributor}
                        >
                            Assets to be distributed
                        </ActiveInputLabel>
                        <DropdownInternalContainer
                            setDropdownView={setShowAssetsDropdown}
                            showDropdownView={showAssetsDropdown}
                        >
                            <ModalDropdownButton
                                disabled={!targetDistributor}
                                onClick={() => setShowAssetsDropdown(!showAssetsDropdown)}
                            >
                                {!distributedAssets ? 'Select assets to distribute' : distributedAssets === 'participation' ? 'Participation' : distributedAssets === 'business' ? 'Business or business related assets' : 'Other Assets' }
                            </ModalDropdownButton>
                            <ModalDropdownContentContainer show={showAssetsDropdown ? 1 : 0}>
                                <ModalDropdownContent
                                    onClick={() => handleSelectAssetsDistributedChange('participation')}
                                >
                                    <span>Participation</span>
                                </ModalDropdownContent>
                                <ModalDropdownContent
                                    onClick={() => handleSelectAssetsDistributedChange('business')}
                                >
                                    <span>Business or business related assets</span>
                                </ModalDropdownContent>
                                <ModalDropdownContent
                                    onClick={() => handleSelectAssetsDistributedChange('other assets')}
                                >
                                    <span>Other Assets</span>
                                </ModalDropdownContent>
                            </ModalDropdownContentContainer>
                        </DropdownInternalContainer>
                        <EntityErrorContainer>
                            {error && <ErrorMessage>{error.distributedAssets}</ErrorMessage>}
                        </EntityErrorContainer>
                    </div>
                    {!distributedAssets ? (
                        <ParticipationOtherAssetsInputPlaceholder />) :
                            distributedAssets === 'other assets' ? (
                                <FadeInContainer>
                                    <ModalInput
                                        changeHandler={(e) => setOtherAssetsLabel(e.target.value)}
                                        disabled={!targetDistributor}
                                        error={error}
                                        errorLocation={error.distributedOtherAssets}
                                        label='Distributed assets'
                                        name='other_assets'
                                        placeholder='Specify assets to distribute'
                                        type='text'
                                        value={otherAssetsLabel}
                                    />
                                </FadeInContainer>) : distributedAssets === 'business' ? (
                                    <FadeInContainer>
                                        <ModalInput
                                            changeHandler={(e) => setBusinessAssetsLabel(e.target.value)}
                                            disabled={!targetDistributor}
                                            error={error}
                                            errorLocation={error.distributedBusinessAssets}
                                            label='Business or business related assets'
                                            name='business_assets_input'
                                            placeholder='Specify assets to distribute'
                                            type='text'
                                            value={businessAssetsLabel}
                                        />
                                    </FadeInContainer>) : (
                                        <PredefinedParticipantDropdown
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
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                    />
                </PredefinedModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedDistributionModal

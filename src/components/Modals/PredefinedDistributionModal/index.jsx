import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalInput from '../ModalComponents/ModalInput'
import DistributeAssetsSelect from './DistributeAssetsSelect'
import DistributorEntitySelect from './DistributorEntitySelect'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import PredefinedRecipientDropdown from '../../Dropdowns/PredefinedRecipientDropdown'
import PredefinedParticipantDropdown from '../../Dropdowns/PredefinedParticipantDropdown'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {sortEntitiesByName} from '../../../helpers'
import {ParticipationOtherAssetsInputPlaceholder, PredefinedModalInternalContainer} from '../styles'
import {FadeInContainer} from '../../../style/animations'

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

    const handleSaveButton = () => {

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
                    <DistributorEntitySelect
                        availableDistributors={availableDistributors}
                        entities={entities}
                        error={error}
                        filteredDistributors={filteredDistributors}
                        handleSelectDistributorChange={handleSelectDistributorChange}
                        searchDistributorTerm={searchDistributorTerm}
                        setFilteredDistributors={setFilteredDistributors}
                        setShowDistributorDropdown={setShowDistributorDropdown}
                        showDistributorDropdown={showDistributorDropdown}
                        targetDistributor={targetDistributor}
                    />
                    <PredefinedRecipientDropdown
                        availableRecipients={availableRecipients}
                        disabled={!targetDistributor}
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
                    <DistributeAssetsSelect
                        distributedAssets={distributedAssets}
                        error={error}
                        handleSelectAssetsDistributedChange={handleSelectAssetsDistributedChange}
                        setShowAssetsDropdown={setShowAssetsDropdown}
                        showAssetsDropdown={showAssetsDropdown}
                        targetDistributor={targetDistributor}
                    />
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
                        saveHandler={handleSaveButton}
                    />
                </PredefinedModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedDistributionModal

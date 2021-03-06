import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalInput from '../ModalComponents/ModalInput'
import DistributorEntitySelect from './DistributorEntitySelect'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import PredefinedAssetsDropdown from '../../Dropdowns/PredefinedAssetsDropdown'
import PredefinedRecipientDropdown from '../../Dropdowns/PredefinedRecipientDropdown'
import PredefinedParticipantDropdown from '../../Dropdowns/PredefinedParticipantDropdown'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {distributionTaxConsequencesTaskGeneration} from './automatedTaxConsequencesTaskGeneration'
import {createAffectedEntity, getEntityFromId, sortedDirectChildrenOfEntity, sortedNonUltimateEntities} from '../../../helpers'
import {AddDeleteModalInternalContainer, ParticipationOtherAssetsInputPlaceholder} from '../styles'
import {FadeInContainer} from '../../../style/animations'
import styled from 'styled-components/macro'
// import plusSign from '../../../assets/icons/tax_cheetah_plus_icon_gray_18px.svg'
import {createEntityHistoryForChart} from '../../../store/entityHistory/actions'


const PredefinedDistributionInternalContainer = styled(AddDeleteModalInternalContainer)`
    // height: ${props => `${(42 * props.addedRecipients) + 534}px`};
    height: 500px;
    transition: all .5s;
`


// const AddRecipientContainer = styled.div`
//     width: 302px;
//     height: 24px;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     padding-left: 10px;
//     margin-bottom: 10px;
//
//     :hover {
//         text-decoration: underline;
//     }
//
//     img {
//         height: 24px;
//         width: 24px;
//         border-radius: 50%;
//         border: 1px solid ${props => props.theme.grayTwo};
//
//         :hover {
//             cursor: pointer;
//             background: ${props => props.theme.iconHoverBackground};
//         }
//     }
//
//     span {
//         font-family: ${props => props.theme.nunitoFontFamily};
//         font-size: 14px;
//         font-weight: 600;
//         line-height: 24px;
//         margin-left: 10px;
//     }
// `
//
// const Placeholder = styled.div`
//     height: 52px;
//     width: 302px;
//     background: #00709F;
//     border: 1px solid black;
// `





const PredefinedDistributionModal = ({entities, error, profile, project, setShowPredefinedDistribution, saveNewLinkHandler,
                                         saveEditEntityHandler, showPredefinedDistribution, step}) => {

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
    // const [additionalRecipientNum, setAdditionalRecipientNum] = useState(0)
    // const [targetAddedRecipient, setTargetAddedRecipient] = useState({})

    useEffect(() => {
        const result = sortedNonUltimateEntities(entities)
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
        const result = sortedDirectChildrenOfEntity(arrayOfEntities, distributorId)
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

    // const handleSelectAdditionalRecipientChange = () => {
    //
    // }

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

    const distributionModalErrorHandler = () => {
        if (!targetDistributor) {
            dispatch(setError({distributor: 'You must choose an entity to distribute from.'}))
            return true
        } else if (!targetRecipient) {
            dispatch(setError({recipient: 'You must choose an entity to be the recipient.'}))
            return true
        } else if (!distributedAssets) {
            dispatch(setError({distributedAssets: 'You must choose the type of assets distributed.'}))
            return true
        } else if (distributedAssets === 'other assets' && !otherAssetsLabel) {
            dispatch(setError({distributedOtherAssets: 'You must specify what other assets are being distributed.'}))
            return true
        } else if (distributedAssets === 'business' && !businessAssetsLabel) {
            dispatch(setError({distributedBusinessAssets: 'You must specify what business assets are being distributed.'}))
            return true
        } else if (distributedAssets === 'participation'  && !targetParticipant) {
            dispatch(setError({participant: 'You must choose an entity to be the participant.'}))
            return true
        } else {
            return false
        }
    }

    // Used in handleSaveButton for both 'other assets" and 'business' distributions
    const handleEntityHistoryCreation = chartResponse => {
        // Create information needed for entity histories
        const affectedEntities = [createAffectedEntity(parseInt(targetRecipient), 'recipient')]
        const entityHistoryData = {
            action: 'distribution',
            affected: JSON.stringify(affectedEntities)
        }
        // Save entity histories
        dispatch(createEntityHistoryForChart(parseInt(targetDistributor), chartResponse.data.id, entityHistoryData))
    }

    const handleSaveButton = async () => {
        dispatch(resetErrors())
        //Handles input validation for distribution modal
        const error = distributionModalErrorHandler()
        if (!error) {
            const distributor = getEntityFromId(targetDistributor, entities)
            const recipient = getEntityFromId(targetRecipient, entities)
            await distributionTaxConsequencesTaskGeneration(distributor, recipient, step, dispatch, profile, project)
            if (distributedAssets === 'other assets') {
                // Create data for the clink
                const assetLink = {
                    from: targetDistributor,
                    to: targetRecipient,
                    type: 'clink',
                    label: `Distribution of ${otherAssetsLabel}`,
                    color: 'orange'
                }
                // Update the chart with the new clink
                const chartResponse = await saveNewLinkHandler(assetLink, entities)
                // Save entity histories
                handleEntityHistoryCreation(chartResponse)
            } else if (distributedAssets === 'business') {
                // Create data for the clink
                const businessLink = {
                    from: targetDistributor,
                    to: targetRecipient,
                    type: 'clink',
                    label: `Distribution of ${businessAssetsLabel}`,
                    color: 'orange'
                }
                // Update the chart with the new clink
                const chartResponse = await saveNewLinkHandler(businessLink, entities)
                // Save entity histories
                handleEntityHistoryCreation(chartResponse)
            } else {
                const participant = getEntityFromId(targetParticipant, entities)
                const editParticipantInfo = {
                    entitySelected: true,
                    entityName: participant.name,
                    parentId: targetRecipient,
                    taxRate: participant.tax_rate,
                    entityToEditId: participant.id
                }
                const participationLink = {
                    from: targetDistributor,
                    to: targetRecipient,
                    type: 'clink',
                    label: 'Distribution of Shares',
                    color: 'orange'
                }
                // Create information needed for entity histories
                const entitiesAffected = []
                entitiesAffected.push(createAffectedEntity(parseInt(targetRecipient), 'recipient'))
                entitiesAffected.push(createAffectedEntity(parseInt(targetDistributor), 'distributor'))
                // Save changes to the chart
                const chartResponse = await saveEditEntityHandler(editParticipantInfo, participant.location, participant.legal_form, 'distribution_participant', entitiesAffected)
                if (chartResponse.status === 201 || chartResponse.status === 200) {
                    saveNewLinkHandler(participationLink, entities, true)
                }
            }
            setShowPredefinedDistribution(false)
        }
    }

    // const renderAddedRecipients = () => {
    //     const addedRecipients = []
    //     for (let i = 0; i < additionalRecipientNum; i++) {
    //         // let searchRecipientTerm = useRef('')
    //         // const [showAddedRecipientDropdown, setShowAddedRecipientDropdown] = useState(false)
    //         // setTargetAddedRecipient({...targetAddedRecipient, [i]: ``})
    //
    //         addedRecipients.push(
    //             <FadeInContainer>
    //                 <Placeholder />
    //                 {/*<PredefinedRecipientDropdown*/}
    //                 {/*    availableRecipients={availableRecipients}*/}
    //                 {/*    disabled={!targetDistributor}*/}
    //                 {/*    entities={entities}*/}
    //                 {/*    error={error}*/}
    //                 {/*    filteredRecipients={filteredRecipients}*/}
    //                 {/*    handleSelectRecipientChange={handleSelectAdditionalRecipientChange}*/}
    //                 {/*    searchRecipientTerm={searchRecipientTerm}*/}
    //                 {/*    setFilteredRecipients={setFilteredRecipients}*/}
    //                 {/*    setShowRecipientDropdown={setShowAddedRecipientDropdown}*/}
    //                 {/*    showRecipientDropdown={showAddedRecipientDropdown}*/}
    //                 {/*    targetRecipient={targetAddedRecipient[i]}*/}
    //                 {/*/>*/}
    //             </FadeInContainer>
    //         )
    //                 //-- should be existing state
    //                 // availableRecipients={availableRecipients}
    //                 // disabled={!targetDistributor}
    //                 // entities={entities}
    //                 // error={error}
    //                 // filteredRecipients={filteredRecipients}
    //                 // setFilteredRecipients={setFilteredRecipients}
    //             //-- needs to be dynamically created
    //             // searchRecipientTerm={searchRecipientTerm}
    //             // setShowRecipientDropdown={setShowRecipientDropdown}
    //             // showRecipientDropdown={showRecipientDropdown}
    //             // targetRecipient={targetRecipient}
    //         //-- needs to be built
    //         // handleSelectRecipientChange={handleSelectRecipientChange}
    //
    //     }
    //     return addedRecipients
    // }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedDistribution}
            showModalView={showPredefinedDistribution}
        >
            <Draggable>
                <PredefinedDistributionInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedDistribution} />
                    <ModalTitle title='Distribution' />
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
                    {/*{renderAddedRecipients()}*/}
                    {/*<AddRecipientContainer*/}
                    {/*    onClick={() => setAdditionalRecipientNum(additionalRecipientNum + 1)}*/}
                    {/*>*/}
                    {/*    <img alt='add recipient' src={plusSign} />*/}
                    {/*    <span>Add another recipient</span>*/}
                    {/*</AddRecipientContainer>*/}
                    <PredefinedAssetsDropdown
                        assetsChoice={distributedAssets}
                        disabled={!targetDistributor}
                        error={error}
                        handleSelectAssetsChange={handleSelectAssetsDistributedChange}
                        setShowAssetsDropdown={setShowAssetsDropdown}
                        showAssetsDropdown={showAssetsDropdown}
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
                                        name='other_assets_input'
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
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                        saveHandler={handleSaveButton}
                    />
                </PredefinedDistributionInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedDistributionModal

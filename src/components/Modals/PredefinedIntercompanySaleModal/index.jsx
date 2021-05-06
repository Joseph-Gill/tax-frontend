import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalInput from '../ModalComponents/ModalInput'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import PredefinedAssetsDropdown from '../../Dropdowns/PredefinedAssetsDropdown'
import IntercompanySaleBuyerSelect from './IntercompanySaleBuyerSelect'
import IntercompanySaleSellerSelect from './IntercompanySaleSellerSelect'
import IntercompanySaleMarketValueSelect from './IntercompanySaleMarketValueSelect'
import PredefinedParticipantDropdown from '../../Dropdowns/PredefinedParticipantDropdown'
import {resetErrors, setError} from '../../../store/errors/actions/errorAction'
import {createAffectedEntity, getEntityFromId, sortedDirectChildrenOfEntity, sortEntitiesByName} from '../../../helpers'
import {ParticipationOtherAssetsInputPlaceholder, PredefinedModalInternalContainer} from '../styles'
import {FadeInContainer} from '../../../style/animations'
import {createEntityHistoryForChart} from '../../../store/entityHistory/actions'


const PredefinedIntercompanySaleModal = ({entities, error, saveEditEntityHandler, saveNewLinkHandler,
                                             setShowPredefinedIntercompanySale, showPredefinedIntercompanySale}) => {

    let searchSellerTerm = useRef('')
    let searchBuyerTerm = useRef('')
    let searchParticipantTerm = useRef('')
    const dispatch = useDispatch()
    const [showSellerDropdown, setShowSellerDropdown] = useState(false)
    const [showBuyerDropdown, setShowBuyerDropdown] = useState(false)
    const [showAssetsDropdown, setShowAssetsDropdown] = useState(false)
    const [showParticipantDropdown, setShowParticipantDropdown] = useState(false)
    // Used to render the sellers to add, array is filtered by the search input
    const [filteredSellers, setFilteredSellers] = useState([])
    // Used to render the buyers to add, array is filtered by the search input
    const [filteredBuyers, setFilteredBuyers] = useState([])
    // Used to render the participants to add, array is filtered by the search input
    const [filteredParticipants, setFilteredParticipants] = useState([])
    // Used to contain a list of available buyers during adding that can be rolled back to when resetting the filter
    const [availableBuyers, setAvailableBuyers] = useState([])
    // Used to contain a list of available participants during adding that can be rolled back to when resetting the filter
    const [availableParticipants, setAvailableParticipants] = useState([])
    const [targetSeller, setTargetSeller] = useState('')
    const [targetBuyer, setTargetBuyer] = useState('')
    const [targetParticipant, setTargetParticipant] = useState('')
    const [soldAssets, setSoldAssets] = useState('')
    const [otherAssetsLabel, setOtherAssetsLabel] = useState('')
    const [businessAssetsLabel, setBusinessAssetsLabel] = useState('')
    const [soldAtFairMarketValue, setSoldAtFairMarketValue] = useState(true)

    useEffect(() => {
        const result = sortEntitiesByName(entities)
        setFilteredSellers([...result])
    }, [entities])

    //Used to filter a list of entities for the seller that are not the seller
    const findPossibleBuyer = (arrayOfEntities, sellerId) => {
        const result = arrayOfEntities.filter(entity => parseInt(entity.id) !== (parseInt(sellerId)))
        setAvailableBuyers([...result])
        setFilteredBuyers([...result])
    }

    //Used to filter a list of entities for any direct children of the seller
    const findPossibleParticipants = (arrayOfEntities, sellerId, buyerId) => {
        //Filter removes the buyer from the possible participants preventing an entity from buying itself
        const result = sortedDirectChildrenOfEntity(arrayOfEntities, sellerId).filter(entity => parseInt(entity.id) !== parseInt(buyerId))
        setAvailableParticipants([...result])
        setFilteredParticipants([...result])
    }

    const handleSelectSellerChange = sellerId => {
        setTargetBuyer('')
        findPossibleBuyer(entities, sellerId)
        setTargetSeller(sellerId)
        setShowSellerDropdown(false)
    }

    const handleSelectBuyerChange = buyerId => {
        setTargetParticipant('')
        findPossibleParticipants(entities, targetSeller, buyerId)
        setTargetBuyer(buyerId)
        setShowBuyerDropdown(false)
    }

    const handleSelectAssetsSoldChange = assetType => {
        setSoldAssets(assetType)
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
        setShowPredefinedIntercompanySale(false)
    }

    const intercompanySaleErrorHandler = () => {
        if (!targetSeller) {
            dispatch(setError({seller: 'You must choose an entity to be the seller.'}))
            return true
        } else if (!targetBuyer) {
            dispatch(setError({buyer: 'You must choose an entity to be the buyer.'}))
            return true
        } else if (!soldAssets) {
            dispatch(setError({distributedAssets: 'You must choose the type of assets distributed.'}))
            return true
        } else if (soldAssets === 'other assets' && !otherAssetsLabel) {
            dispatch(setError({soldOtherAssets: 'You must specify what other assets are being sold.'}))
            return true
        } else if (soldAssets === 'business' && !businessAssetsLabel) {
            dispatch(setError({soldBusinessAssets: 'You must specify what business assets are being sold.'}))
            return true
        } else if (soldAssets === 'participation' && !targetParticipant) {
            dispatch(setError({participant: 'You must choose an entity to be the participant.'}))
            return true
        } else {
            return false
        }
    }

    const handleEntityHistoryCreation = chartResponse => {
        // Create information needed for entity histories
        const affectedEntities = [createAffectedEntity(parseInt(targetBuyer), 'buyer')]
        const entityHistoryData = {
            action: 'intercompany_sale',
            affected: JSON.stringify(affectedEntities)
        }
        // Save entity histories
        dispatch(createEntityHistoryForChart(parseInt(targetSeller), chartResponse.data.id, entityHistoryData))
    }

    const handleSaveButton = async () => {
        dispatch(resetErrors())
        //Handles input validation for intercompany sale modal
        const error = intercompanySaleErrorHandler()
        if (!error) {
            if (soldAssets === 'other assets') {
                const assetLink = {
                    from: targetSeller,
                    to: targetBuyer,
                    type: 'clink',
                    label: `Sale of ${otherAssetsLabel}`,
                    color: 'orange'
                }
                // Update the chart with the new clink
                const chartResponse = await saveNewLinkHandler(assetLink, entities)
                // Save entity histories
                handleEntityHistoryCreation(chartResponse)
            } else if (soldAssets === 'business') {
                const businessLink = {
                    from: targetSeller,
                    to: targetBuyer,
                    type: 'clink',
                    label: `Sale of ${businessAssetsLabel}`,
                    color: 'orange'
                }
                // Update the chart with the new clink
                const chartResponse = await saveNewLinkHandler(businessLink, entities)
                // Save entity histories
                handleEntityHistoryCreation(chartResponse)
            } else {
                //Edit participant pid to be buyerId
                const participant = getEntityFromId(targetParticipant, entities)
                const editParticipantInfo = {
                    entitySelected: true,
                    entityName: participant.name,
                    parentId: targetBuyer,
                    taxRate: participant.tax_rate,
                    entityToEditId: participant.id
                }
                const participantLink = {
                    from: targetSeller,
                    to: targetBuyer,
                    type: 'clink',
                    label: 'Sale of shares',
                    color: 'orange'
                }
                // Create information needed for entity histories
                const entitiesAffected = []
                entitiesAffected.push(createAffectedEntity(parseInt(targetSeller), 'seller'))
                entitiesAffected.push(createAffectedEntity(parseInt(targetBuyer), 'buyer'))
                const chartResponse = await saveEditEntityHandler(editParticipantInfo, participant.location, participant.legal_form, 'intercompany_sale_participant', entitiesAffected)
                if (chartResponse.status === 201 || chartResponse.status === 200) {
                    saveNewLinkHandler(participantLink, entities, true)
                }
            }
            setShowPredefinedIntercompanySale(false)
        }
    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedIntercompanySale}
            showModalView={showPredefinedIntercompanySale}
        >
            <Draggable>
                <PredefinedModalInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedIntercompanySale} />
                    <ModalTitle title='Intercompany Sale' />
                    <IntercompanySaleSellerSelect
                        entities={entities}
                        error={error}
                        filteredSellers={filteredSellers}
                        handleSelectSellerChange={handleSelectSellerChange}
                        searchSellerTerm={searchSellerTerm}
                        setFilteredSellers={setFilteredSellers}
                        setShowSellerDropdown={setShowSellerDropdown}
                        showSellerDropdown={showSellerDropdown}
                        targetSeller={targetSeller}
                    />
                    <IntercompanySaleBuyerSelect
                        availableBuyers={availableBuyers}
                        entities={entities}
                        error={error}
                        filteredBuyers={filteredBuyers}
                        handleSelectBuyerChange={handleSelectBuyerChange}
                        searchBuyerTerm={searchBuyerTerm}
                        setFilteredBuyers={setFilteredBuyers}
                        setShowBuyerDropdown={setShowBuyerDropdown}
                        showBuyerDropdown={showBuyerDropdown}
                        targetBuyer={targetBuyer}
                        targetSeller={targetSeller}
                    />
                    <PredefinedAssetsDropdown
                        assetsChoice={soldAssets}
                        disabled={!targetSeller}
                        error={error}
                        handleSelectAssetsChange={handleSelectAssetsSoldChange}
                        setShowAssetsDropdown={setShowAssetsDropdown}
                        showAssetsDropdown={showAssetsDropdown}
                    />
                    {!soldAssets ? (
                        <ParticipationOtherAssetsInputPlaceholder />) :
                            soldAssets === 'other assets' ? (
                                <FadeInContainer>
                                    <ModalInput
                                        changeHandler={(e) => setOtherAssetsLabel(e.target.value)}
                                        disabled={!targetSeller}
                                        error={error}
                                        errorLocation={error.soldOtherAssets}
                                        label='Sold Assets'
                                        name='sold_assets_input'
                                        placeholder='Specify assets to sell'
                                        type='text'
                                        value={otherAssetsLabel}
                                    />
                                </FadeInContainer>) : soldAssets === 'business' ? (
                                    <FadeInContainer>
                                        <ModalInput
                                            changeHandler={(e) => setBusinessAssetsLabel(e.target.value)}
                                            disabled={!targetSeller}
                                            error={error}
                                            errorLocation={error.soldBusinessAssets}
                                            label='Business or business related assets'
                                            name='sold_business_assets_input'
                                            placeholder='Specify assets to sell'
                                            type='text'
                                            value={businessAssetsLabel}
                                        />
                                    </FadeInContainer>) : (
                                        <PredefinedParticipantDropdown
                                            availableParticipants={availableParticipants}
                                            disabled={!targetSeller}
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
                    <IntercompanySaleMarketValueSelect
                        setSoldAtFairMarketValue={setSoldAtFairMarketValue}
                        soldAtFairMarketValue={soldAtFairMarketValue}
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

export default PredefinedIntercompanySaleModal

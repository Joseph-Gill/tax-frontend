import React, {useState, useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import DropdownInternalContainer from '../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ModalDropdownSearchField from '../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {resetErrors} from '../../../store/errors/actions/errorAction'
import {getEntityInfo, renderEntitiesForModalDropdowns, sortedDirectChildrenOfEntity, sortEntitiesByName} from '../../../helpers'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../Dropdowns/styles'
import {
    EntityErrorContainer,
    ParticipationOtherAssetsInputPlaceholder,
    PredefinedCheckboxCheckmarkContainer,
    PredefinedCheckboxCheckmarkLabel,
    PredefinedCheckboxContainer,
    PredefinedCheckboxTextContainer,
    PredefinedModalInternalContainer
} from '../styles'
import PredefinedAssetsDropdown from '../../Dropdowns/PredefinedAssetsDropdown'
import {FadeInContainer} from '../../../style/animations'
import ModalInput from '../ModalComponents/ModalInput'
import PredefinedParticipantDropdown from '../../Dropdowns/PredefinedParticipantDropdown'
import {CustomCheckbox} from '../../../style/checkbox'


const PredefinedIntercompanySaleModal = ({entities, error, setShowPredefinedIntercompanySale, showPredefinedIntercompanySale}) => {

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
    const [soldAtFairMarketValue, setSoldAtFairMarketValue] = useState(false)

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
    const findPossibleParticipants = (arrayOfEntities, sellerId) => {
        const result = sortedDirectChildrenOfEntity(arrayOfEntities, sellerId)
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
        findPossibleParticipants(entities, targetSeller)
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

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedIntercompanySale}
            showModalView={showPredefinedIntercompanySale}
        >
            <Draggable>
                <PredefinedModalInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedIntercompanySale} />
                    <ModalTitle title='Intercompany Sale' />
                    <div>
                        <ActiveInputLabel>Seller</ActiveInputLabel>
                        <DropdownInternalContainer
                            setDropdownView={setShowSellerDropdown}
                            showDropdownView={showSellerDropdown}
                        >
                            <ModalDropdownButton
                                onClick={() => setShowSellerDropdown(!showSellerDropdown)}
                            >
                                {!targetSeller ? 'Select a seller' : getEntityInfo(entities, targetSeller)}
                            </ModalDropdownButton>
                            <ModalDropdownContentContainer show={showSellerDropdown ? 1 : 0}>
                                <ModalDropdownSearchField
                                    filterStateSet={setFilteredSellers}
                                    inputName='seller_entity_search'
                                    inputPlaceholder='Search for seller'
                                    inputRef={searchSellerTerm}
                                    originalArray={entities}
                                    term={searchSellerTerm}
                                />
                                {renderEntitiesForModalDropdowns(filteredSellers, handleSelectSellerChange)}
                            </ModalDropdownContentContainer>
                        </DropdownInternalContainer>
                        <EntityErrorContainer>
                            {error && <ErrorMessage>{error.seller}</ErrorMessage>}
                        </EntityErrorContainer>
                    </div>
                    <div>
                        <ActiveInputLabel
                            disabled={!targetSeller}
                        >
                            Buyer
                        </ActiveInputLabel>
                        <DropdownInternalContainer
                            setDropdownView={setShowBuyerDropdown}
                            showDropdownView={showBuyerDropdown}
                        >
                            <ModalDropdownButton
                                disabled={!targetSeller}
                                onClick={() => setShowBuyerDropdown(!showBuyerDropdown)}
                            >
                                {!targetBuyer ? 'Select a buyer' : getEntityInfo(entities, targetBuyer)}
                            </ModalDropdownButton>
                            <ModalDropdownContentContainer show={showBuyerDropdown ? 1 : 0}>
                                <ModalDropdownSearchField
                                    filterStateSet={setFilteredBuyers}
                                    inputName='buyer_entity_search'
                                    inputPlaceholder='Search for buyer'
                                    inputRef={searchBuyerTerm}
                                    originalArray={availableBuyers}
                                    term={searchBuyerTerm}
                                />
                                {renderEntitiesForModalDropdowns(filteredBuyers, handleSelectBuyerChange)}
                            </ModalDropdownContentContainer>
                        </DropdownInternalContainer>
                        <EntityErrorContainer>
                            {error && <ErrorMessage>{error.buyer}</ErrorMessage>}
                        </EntityErrorContainer>
                    </div>
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
                        <PredefinedCheckboxContainer>
                            <PredefinedCheckboxTextContainer>
                                <span>Sell at Fair Market</span>
                                <span>Value?</span>
                            </PredefinedCheckboxTextContainer>
                            <PredefinedCheckboxCheckmarkContainer>
                                <CustomCheckbox>
                                    <input
                                        checked={soldAtFairMarketValue}
                                        id='yes'
                                        onChange={() => setSoldAtFairMarketValue(!soldAtFairMarketValue)}
                                        type='checkbox'
                                        value='yes'
                                    />
                                    <span className='checkmark' />
                                    <PredefinedCheckboxCheckmarkLabel htmlFor='yes'>Yes</PredefinedCheckboxCheckmarkLabel>
                                </CustomCheckbox>
                                <CustomCheckbox>
                                    <input
                                        checked={!soldAtFairMarketValue}
                                        id='no'
                                        onChange={() => setSoldAtFairMarketValue(!soldAtFairMarketValue)}
                                        type='checkbox'
                                        value='no'
                                    />
                                    <span className='checkmark' />
                                    <PredefinedCheckboxCheckmarkLabel htmlFor='no'>No</PredefinedCheckboxCheckmarkLabel>
                                </CustomCheckbox>
                            </PredefinedCheckboxCheckmarkContainer>
                        </PredefinedCheckboxContainer>
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                    />
                </PredefinedModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedIntercompanySaleModal

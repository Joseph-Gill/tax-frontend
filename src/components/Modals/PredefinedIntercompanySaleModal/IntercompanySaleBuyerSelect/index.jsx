import React from 'react'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {ActiveInputLabel} from '../../../../style/labels'
import {ErrorMessage} from '../../../../style/messages'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {EntityErrorContainer} from '../../styles'


const IntercompanySaleBuyerSelect = ({availableBuyers, entities, error, filteredBuyers, handleSelectBuyerChange,
                                         searchBuyerTerm, setFilteredBuyers, setShowBuyerDropdown, showBuyerDropdown,
                                         targetBuyer, targetSeller}) => {

    return (
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
    )
}

export default IntercompanySaleBuyerSelect

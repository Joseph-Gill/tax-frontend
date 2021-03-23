import React from 'react'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {EntityErrorContainer} from '../../styles'


const IntercompanySaleSellerSelect = ({entities, error, filteredSellers, handleSelectSellerChange,
                                          searchSellerTerm, setFilteredSellers, setShowSellerDropdown,
                                          showSellerDropdown, targetSeller}) => {

    return (
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
    )
}

export default IntercompanySaleSellerSelect

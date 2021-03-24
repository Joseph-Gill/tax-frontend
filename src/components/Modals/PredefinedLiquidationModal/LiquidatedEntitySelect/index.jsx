import React from 'react'
import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {EntityErrorContainer} from '../../styles'


const LiquidatedEntitySelect = ({availableLiquidated, entities, error, filteredLiquidated, handleSelectLiquidatedChange,
                                    searchLiquidatedTerm, setFilteredLiquidated, setShowLiquidatedDropdown,
                                    showLiquidatedDropdown, targetLiquidated}) => {

    return (
        <div>
            <ActiveInputLabel>Liquidated Entity</ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowLiquidatedDropdown}
                showDropdownView={showLiquidatedDropdown}
            >
                <ModalDropdownButton
                    onClick={() => setShowLiquidatedDropdown(!showLiquidatedDropdown)}
                >
                    {!targetLiquidated ? 'Select a liquidated entity' : getEntityInfo(entities, targetLiquidated)}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showLiquidatedDropdown ? 1 : 0}>
                    <ModalDropdownSearchField
                        filterStateSet={setFilteredLiquidated}
                        inputName='liquidated_entity_search'
                        inputPlaceholder='Search for liquidated entity'
                        inputRef={searchLiquidatedTerm}
                        originalArray={availableLiquidated}
                        term={searchLiquidatedTerm}
                    />
                    {renderEntitiesForModalDropdowns(filteredLiquidated, handleSelectLiquidatedChange)}
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.liquidated}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default LiquidatedEntitySelect

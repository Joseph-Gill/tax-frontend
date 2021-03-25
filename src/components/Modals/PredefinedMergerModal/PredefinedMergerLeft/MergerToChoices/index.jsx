import React from 'react'
import ModalDropdownSearchField from '../../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {renderEntitiesForModalDropdowns} from '../../../../../helpers'
import {ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const MergerToChoices = ({availableMergerToEntities, filteredMergerToEntities, handleSelectMergerToChange,
                             searchMergerToEntityTerm, setFilteredMergerToEntities, showMergerToDropdown}) => {
    return (
        <ModalDropdownContentContainer show={showMergerToDropdown ? 1 : 0}>
            <ModalDropdownSearchField
                filterStateSet={setFilteredMergerToEntities}
                inputName='merger_to_entity_search'
                inputPlaceholder='Search for merger to entity'
                inputRef={searchMergerToEntityTerm}
                originalArray={availableMergerToEntities}
                term={searchMergerToEntityTerm}
            />
            {renderEntitiesForModalDropdowns(filteredMergerToEntities, handleSelectMergerToChange)}
        </ModalDropdownContentContainer>
    )
}

export default MergerToChoices

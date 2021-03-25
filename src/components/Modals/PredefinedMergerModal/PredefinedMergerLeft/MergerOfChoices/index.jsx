import React from 'react'
import ModalDropdownSearchField from '../../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
import {renderEntitiesForModalDropdowns} from '../../../../../helpers'
import {ModalDropdownContentContainer} from '../../../../Dropdowns/styles'


const MergerOfChoices = ({entities, filteredMergerOfEntities, handleSelectMergerOfChange, searchMergerOfEntityTerm,
                             setFilteredMergerOfEntities, showMergerOfDropdown}) => {
    return (
        <ModalDropdownContentContainer show={showMergerOfDropdown ? 1 : 0}>
            <ModalDropdownSearchField
                filterStateSet={setFilteredMergerOfEntities}
                inputName='merger_of_entity_search'
                inputPlaceholder='Search for merger of entity'
                inputRef={searchMergerOfEntityTerm}
                originalArray={entities}
                term={searchMergerOfEntityTerm}
            />
            {renderEntitiesForModalDropdowns(filteredMergerOfEntities, handleSelectMergerOfChange)}
        </ModalDropdownContentContainer>
    )
}

export default MergerOfChoices

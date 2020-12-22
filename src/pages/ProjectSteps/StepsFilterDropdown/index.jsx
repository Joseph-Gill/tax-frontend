import React from 'react'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer} from '../../../style/containers'
import {FilterInput} from '../../../style/inputs'


const StepFilterDropdown = ({filterString, setFilterString}) => {
    return (
        <Dropdown>
            <FilterDropdownButton>Filter</FilterDropdownButton>
            <DropdownOptions>
                <DropdownChoiceContainer>
                    <FilterInput
                        onChange={(e) => setFilterString(e.target.value)}
                        placeholder='Search and select'
                        type='text'
                        value={filterString}
                    />
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default StepFilterDropdown

import React from 'react'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {FilterInput} from '../../../style/inputs'
import {DropdownChoiceContainer} from '../../../style/containers'



const HomeFilterDropdown = ({filterChangeHandler, filterString}) => {
    return (
        <Dropdown>
            <FilterDropdownButton>{!filterString.current.value ? 'Search for...' : filterString.current.value}</FilterDropdownButton>
            <DropdownOptions>
                <DropdownChoiceContainer>
                    <FilterInput
                        onKeyPress={(e) => filterChangeHandler(e)}
                        placeholder='Search and select'
                        ref={filterString}
                        type='text'

                    />
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default HomeFilterDropdown

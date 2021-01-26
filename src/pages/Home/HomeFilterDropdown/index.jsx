import React from 'react'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer} from '../../../style/containers'
import {FilterInput} from '../../../style/inputs'


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

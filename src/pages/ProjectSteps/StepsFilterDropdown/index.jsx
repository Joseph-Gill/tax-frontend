import React from 'react'
import {allowOnlyOneCheckedBox} from '../../../helpers'
import {DefaultDropdownText} from '../../../style/text'
import {FilterCheckBox, FilterInput} from '../../../style/inputs'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'


const StepFilterDropdown = ({filterOption, filterString, setFilterOption, setFilterString}) => {
    return (
        <Dropdown>
            <FilterDropdownButton>Filter</FilterDropdownButton>
            <DropdownOptions>
                <DropDownChoiceWithBorder>
                    <FilterInput
                        onChange={(e) => setFilterString(e.target.value)}
                        placeholder='Search and select'
                        type='text'
                        value={filterString}
                    />
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <FilterCheckBox
                        checked={filterOption[0].isChecked}
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={0}
                    />
                    <DefaultDropdownText>Status</DefaultDropdownText>
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <FilterCheckBox
                        checked={filterOption[1].isChecked}
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={1}
                    />
                    <DefaultDropdownText>Tax Consequence Location</DefaultDropdownText>
                </DropDownChoiceWithBorder>
                <DropdownChoiceContainer>
                    <FilterCheckBox
                        checked={filterOption[2].isChecked}
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={2}
                    />
                    <DefaultDropdownText>Description</DefaultDropdownText>
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default StepFilterDropdown

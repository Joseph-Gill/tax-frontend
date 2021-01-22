import React from 'react'
import {allowOnlyOneCheckedBox} from '../../../helpers'
import {DefaultDropdownText} from '../../../style/text'
import {FilterCheckBox, FilterInput} from '../../../style/inputs'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'


const TaskFilterDropdown = ({filterOption, filterString, setFilterOption, setFilterString}) => {
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
                        id='dueDate'
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={0}
                    />
                    <DefaultDropdownText htmlFor='dueDate'>Due Date</DefaultDropdownText>
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <FilterCheckBox
                        checked={filterOption[1].isChecked}
                        id='country'
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={1}
                    />
                    <DefaultDropdownText htmlFor='country'>Responsible Country</DefaultDropdownText>
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <FilterCheckBox
                        checked={filterOption[2].isChecked}
                        id='responsibleName'
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={2}
                    />
                    <DefaultDropdownText htmlFor='responsibleName'>Responsible Name</DefaultDropdownText>
                </DropDownChoiceWithBorder>
                <DropdownChoiceContainer>
                    <FilterCheckBox
                        checked={filterOption[3].isChecked}
                        id='description'
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={3}
                    />
                    <DefaultDropdownText htmlFor='description'>Description</DefaultDropdownText>
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default TaskFilterDropdown

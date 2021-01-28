import React from 'react'
import CustomFilterCheckBox from '../../../components/CustomFilterCheckBox'
import {FilterInput} from '../../../style/inputs'
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
                    <CustomFilterCheckBox
                        filterOption={filterOption}
                        id='dueDate'
                        label='Due Date'
                        setFilterOption={setFilterOption}
                        value={0}
                    />
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <CustomFilterCheckBox
                        filterOption={filterOption}
                        id='country'
                        label='Responsible Country'
                        setFilterOption={setFilterOption}
                        value={1}
                    />
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <CustomFilterCheckBox
                        filterOption={filterOption}
                        id='responsibleName'
                        label='Responsible Name'
                        setFilterOption={setFilterOption}
                        value={2}
                    />
                </DropDownChoiceWithBorder>
                <DropdownChoiceContainer>
                    <CustomFilterCheckBox
                        filterOption={filterOption}
                        id='description'
                        label='Description'
                        setFilterOption={setFilterOption}
                        value={3}
                    />
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default TaskFilterDropdown

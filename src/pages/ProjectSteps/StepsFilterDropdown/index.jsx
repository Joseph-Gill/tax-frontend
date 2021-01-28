import React from 'react'
import CustomFilterCheckBox from '../../../components/CustomFilterCheckBox'
import {FilterInput} from '../../../style/inputs'
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
                    <CustomFilterCheckBox
                        filterOption={filterOption}
                        id='status'
                        label='Status'
                        setFilterOption={setFilterOption}
                        value={0}
                    />
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <CustomFilterCheckBox
                        filterOption={filterOption}
                        id='consequenceLocation'
                        label='Tax Consequence Location'
                        setFilterOption={setFilterOption}
                        value={1}
                    />
                </DropDownChoiceWithBorder>
                <DropdownChoiceContainer>
                    <CustomFilterCheckBox
                        filterOption={filterOption}
                        id='description'
                        label='Description'
                        setFilterOption={setFilterOption}
                        value={2}
                    />
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default StepFilterDropdown

import React from 'react'
import CustomFilterCheckBox from '../../../components/CustomFilterCheckBox'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'
import {FilterInput} from '../../../style/inputs'


const FilterDropdown = ({filterOption, filterMemberStraus, filterString, setFilterOption, setFilterString}) => {
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
                        id='email'
                        label='Email'
                        setFilterOption={setFilterOption}
                        value={0}
                    />
                </DropDownChoiceWithBorder>
                {!filterMemberStraus && (
                    <>
                        <DropDownChoiceWithBorder>
                            <CustomFilterCheckBox
                                filterOption={filterOption}
                                id='name'
                                label='Name'
                                setFilterOption={setFilterOption}
                                value={1}
                            />
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <CustomFilterCheckBox
                                filterOption={filterOption}
                                id='organization'
                                label='Organization'
                                setFilterOption={setFilterOption}
                                value={2}
                            />
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <CustomFilterCheckBox
                                filterOption={filterOption}
                                id='projectAccess'
                                label='Project Access'
                                setFilterOption={setFilterOption}
                                value={3}
                            />
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <CustomFilterCheckBox
                                filterOption={filterOption}
                                id='country'
                                label='Country'
                                setFilterOption={setFilterOption}
                                value={4}
                            />
                        </DropDownChoiceWithBorder>
                        <DropdownChoiceContainer>
                            <CustomFilterCheckBox
                                filterOption={filterOption}
                                id='role'
                                label='Role'
                                setFilterOption={setFilterOption}
                                value={5}
                            />
                        </DropdownChoiceContainer>
                    </>)}
            </DropdownOptions>
        </Dropdown>
    )
}

export default FilterDropdown

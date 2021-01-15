import React from 'react'
import {allowOnlyOneCheckedBox} from '../../../helpers'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'
import {DefaultDropdownText} from '../../../style/text'
import {FilterCheckBox, FilterInput} from '../../../style/inputs'


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
                    <FilterCheckBox
                        checked={filterOption[0].isChecked}
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={0}
                    />
                    <DefaultDropdownText>Email</DefaultDropdownText>
                </DropDownChoiceWithBorder>
                {!filterMemberStraus && (
                    <>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[1].isChecked}
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={1}
                            />
                            <DefaultDropdownText>Name</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[2].isChecked}
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={2}
                            />
                            <DefaultDropdownText>Organization</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[3].isChecked}
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={3}
                            />
                            <DefaultDropdownText>Project Access</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[4].isChecked}
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={4}
                            />
                            <DefaultDropdownText>Country</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropdownChoiceContainer>
                            <FilterCheckBox
                                checked={filterOption[5].isChecked}
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={5}
                            />
                            <DefaultDropdownText>Role</DefaultDropdownText>
                        </DropdownChoiceContainer>
                    </>)}
            </DropdownOptions>
        </Dropdown>
    )
}

export default FilterDropdown

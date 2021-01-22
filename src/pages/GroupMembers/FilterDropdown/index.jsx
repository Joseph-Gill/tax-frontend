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
                        id='email'
                        onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                        type='checkbox'
                        value={0}
                    />
                    <DefaultDropdownText for='email'>Email</DefaultDropdownText>
                </DropDownChoiceWithBorder>
                {!filterMemberStraus && (
                    <>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[1].isChecked}
                                id='name'
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={1}
                            />
                            <DefaultDropdownText for='name'>Name</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[2].isChecked}
                                id='organization'
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={2}
                            />
                            <DefaultDropdownText for='organization'>Organization</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[3].isChecked}
                                id='projectAccess'
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={3}
                            />
                            <DefaultDropdownText for='projectAccess'>Project Access</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[4].isChecked}
                                id='country'
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={4}
                            />
                            <DefaultDropdownText for='country'>Country</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropdownChoiceContainer>
                            <FilterCheckBox
                                checked={filterOption[5].isChecked}
                                id='role'
                                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                                type='checkbox'
                                value={5}
                            />
                            <DefaultDropdownText for='role'>Role</DefaultDropdownText>
                        </DropdownChoiceContainer>
                    </>)}
            </DropdownOptions>
        </Dropdown>
    )
}

export default FilterDropdown

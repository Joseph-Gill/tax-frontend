import React, {useState} from 'react'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'
import {DefaultDropdownText} from '../../../style/text'
import {FilterInput} from '../../../style/inputs'
import styled from 'styled-components/macro'


const FilterCheckBox = styled.input`
    height: 14px;
    width: 14px;
    margin-left: 3px;
`

const FilterDropdown = ({filterMemberStraus, filterString}) => {
    const [filterOption, setFilterOption] = useState([
        {isChecked: true, type: 'email'},
        {isChecked: false, type: 'name'},
        {isChecked: false, type: 'organization'},
        {isChecked: false, type: 'project_access'},
        {isChecked: false, type: 'country'},
        {isChecked: false, type: 'project_role'}
    ])

    const filterOptionCheckBoxChangeHandler = (e) => {
        const dataCopy = [...filterOption]
        for (let i = 0; i < dataCopy.length; i++) {
            if (i === parseInt(e.target.value)) {
                dataCopy[i].isChecked = !dataCopy[i].isChecked
            } else {
                dataCopy[i].isChecked = false
            }
        }
        setFilterOption([...dataCopy])
    }

    return (
        <Dropdown>
            <FilterDropdownButton>Filter</FilterDropdownButton>
            <DropdownOptions>
                <DropDownChoiceWithBorder>
                    <FilterInput
                        placeholder='Search and select'
                        ref={filterString}
                        type='text'
                    />
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <FilterCheckBox
                        checked={filterOption[0].isChecked}
                        onChange={(e) => filterOptionCheckBoxChangeHandler(e)}
                        type='checkbox'
                        value={0}
                    />
                    <DefaultDropdownText>Email</DefaultDropdownText>
                </DropDownChoiceWithBorder>
                {filterMemberStraus && (
                    <>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[1].isChecked}
                                onChange={(e) => filterOptionCheckBoxChangeHandler(e)}
                                type='checkbox'
                                value={1}
                            />
                            <DefaultDropdownText>Name</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[2].isChecked}
                                onChange={(e) => filterOptionCheckBoxChangeHandler(e)}
                                type='checkbox'
                                value={2}
                            />
                            <DefaultDropdownText>Organization</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[3].isChecked}
                                onChange={(e) => filterOptionCheckBoxChangeHandler(e)}
                                type='checkbox'
                                value={3}
                            />
                            <DefaultDropdownText>Project Access</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropDownChoiceWithBorder>
                            <FilterCheckBox
                                checked={filterOption[4].isChecked}
                                onChange={(e) => filterOptionCheckBoxChangeHandler(e)}
                                type='checkbox'
                                value={4}
                            />
                            <DefaultDropdownText>Country</DefaultDropdownText>
                        </DropDownChoiceWithBorder>
                        <DropdownChoiceContainer>
                            <FilterCheckBox
                                checked={filterOption[5].isChecked}
                                onChange={(e) => filterOptionCheckBoxChangeHandler(e)}
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

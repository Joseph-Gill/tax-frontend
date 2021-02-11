import React from 'react'
import {DropdownContent, FilterDropdownContentContainer} from '../../../../style/dropdowns'
import {FilterCustomCheckbox} from '../../../../style/labels'
import {DefaultDropdownText} from '../../../../style/text'


const TaskFilterSearchChoices = ({filterOption, filterOptionChangeHandler, showFilterDropdown}) => {
    return (
        <FilterDropdownContentContainer show={showFilterDropdown ? 1 : 0}>
            <DropdownContent onClick={() => filterOptionChangeHandler(0)}>
                <FilterCustomCheckbox>
                    <input
                        checked={filterOption[0].isChecked}
                        id='dueDate'
                        onChange={() => filterOptionChangeHandler(0)}
                        type='checkbox'
                        value={0}
                    />
                    <span className='checkmark' />
                    <DefaultDropdownText htmlFor='dueDate'>Due Date</DefaultDropdownText>
                </FilterCustomCheckbox>
            </DropdownContent>
            <DropdownContent onClick={() => filterOptionChangeHandler(1)}>
                <FilterCustomCheckbox>
                    <input
                        checked={filterOption[1].isChecked}
                        id='country'
                        onChange={() => filterOptionChangeHandler(1)}
                        type='checkbox'
                        value={1}
                    />
                    <span className='checkmark' />
                    <DefaultDropdownText htmlFor='country'>Responsible Country</DefaultDropdownText>
                </FilterCustomCheckbox>
            </DropdownContent>
            <DropdownContent onClick={() => filterOptionChangeHandler(2)}>
                <FilterCustomCheckbox>
                    <input
                        checked={filterOption[2].isChecked}
                        id='responsibleName'
                        onChange={() => filterOptionChangeHandler(2)}
                        type='checkbox'
                        value={2}
                    />
                    <span className='checkmark' />
                    <DefaultDropdownText htmlFor='responsibleName'>Responsible Name</DefaultDropdownText>
                </FilterCustomCheckbox>
            </DropdownContent>
            <DropdownContent onClick={() => filterOptionChangeHandler(3)}>
                <FilterCustomCheckbox>
                    <input
                        checked={filterOption[3].isChecked}
                        id='description'
                        onChange={() => filterOptionChangeHandler(3)}
                        type='checkbox'
                        value={3}
                    />
                    <span className='checkmark' />
                    <DefaultDropdownText htmlFor='description'>Description</DefaultDropdownText>
                </FilterCustomCheckbox>
            </DropdownContent>
        </FilterDropdownContentContainer>
    )
}

export default TaskFilterSearchChoices

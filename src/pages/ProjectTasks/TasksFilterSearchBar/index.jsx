import React from 'react'
import reset from '../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../assets/icons/stark_search_bar_icon.svg'
import {allowOnlyOneCheckedBoxContainer} from '../../../helpers'
import {FilterSpacer} from '../../../style/spans'
import {TaskFilterSearchInput, TasksFilterSearchContainer} from './styles'
import {DefaultDropdownText} from '../../../style/text'
import {FilterCustomCheckbox} from '../../../style/labels'
import {FilterImgContainer, FilterResetImgContainer} from '../../../style/containers'
import {DropdownContent, FilterDropdownContainer, FilterDropdownContentContainer, FilterLabelText,
    FilterSearchButton, FilterSearchText, FilterSelectionContainer} from '../../../style/dropdowns'


const TasksFilterSearchBar = ({filterByClickChangeHandler, filterByKeypressChangeHandler, filterOption,
                                  searchText, resetFilterChangeHandler, setFilterOption,
                                  setShowFilterDropdown, showFilterDropdown, toggleFilterSearchCloseGoTo}) => {

    //Used to change the filter choice and close the dropdown in same click
    const filterOptionChangeHandler = value => {
        allowOnlyOneCheckedBoxContainer(value, filterOption, setFilterOption)
        setShowFilterDropdown(false)
    }

    //Used to set the filter tag of the search bar
    const setFilterLabel = () => {
        const result = filterOption.filter(option => option.isChecked)[0]
        if (result.type === 'due_date') {
            return 'Due Date'
        } else if (result.type === 'responsible_country') {
            return 'Resp. Country'
        } else if (result.type === 'responsible_user') {
            return 'Resp. User'
        } else {
            return 'Description'
        }
    }

    return (
        <TasksFilterSearchContainer>
            <FilterDropdownContainer>
                <FilterSearchButton onClick={toggleFilterSearchCloseGoTo}>
                    <FilterSearchText>Filter</FilterSearchText>
                </FilterSearchButton>
                <FilterDropdownContentContainer show={showFilterDropdown ? 1 : 0}>
                    <DropdownContent>
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
                    <DropdownContent>
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
                    <DropdownContent>
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
                    <DropdownContent>
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
            </FilterDropdownContainer>
            <FilterSelectionContainer>
                <FilterLabelText>{setFilterLabel()}</FilterLabelText>
            </FilterSelectionContainer>
            <TaskFilterSearchInput
                onKeyPress={(e) => filterByKeypressChangeHandler(e)}
                placeholder='Search steps...'
                ref={searchText}
                type='text'
            />
            <FilterResetImgContainer onClick={resetFilterChangeHandler}>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer onClick={filterByClickChangeHandler}>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </TasksFilterSearchContainer>
    )
}

export default TasksFilterSearchBar

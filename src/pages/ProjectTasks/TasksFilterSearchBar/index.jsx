import React from 'react'
import TaskFilterSearchChoices from './TaskFilterSearchChoices'
import {allowOnlyOneCheckedBoxContainer} from '../../../helpers'
import reset from '../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../assets/icons/stark_search_bar_icon.svg'
import {FilterSpacer} from '../../../style/spans'
import {TaskFilterSearchInput, TasksFilterSearchContainer} from './styles'
import {FilterImgContainer, FilterResetImgContainer} from '../../../style/containers'
import {FilterDropdownContainer, FilterLabelText, FilterSearchButton, FilterSearchText,
    FilterSelectionContainer} from '../../../style/dropdowns'


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
                <TaskFilterSearchChoices
                    filterOption={filterOption}
                    filterOptionChangeHandler={filterOptionChangeHandler}
                    showFilterDropdown={showFilterDropdown}
                />
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

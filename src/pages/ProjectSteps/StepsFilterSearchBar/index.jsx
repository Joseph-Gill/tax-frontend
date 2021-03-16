import React from 'react'
import reset from '../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../assets/icons/stark_search_bar_icon.svg'
import StepsFilterSearchChoices from './StepsFilterSearchChoices'
import DropdownInternalContainer from '../../../components/Dropdowns/DropdownComponents/DropdownInternalContainer'
import {allowOnlyOneCheckedBoxContainer} from '../../../helpers'
import {FilterSpacer} from '../../../style/spans'
import {FilterLabelText, FilterSearchButton, FilterSearchInput, FilterSearchText, FilterSelectionContainer} from '../../../style/dropdowns'
import {FilterImgContainer, FilterResetImgContainer} from '../../../style/containers'
import {StepsFilterSearchContainer} from './styles'


const StepsFilterSearchBar = ({filterByKeypressChangeHandler, filterByClickChangeHandler, filterOption,
                                  filterString, setFilterOption, resetFilterChangeHandler, setShowFilterDropdown,
                                  showFilterDropdown, toggleFilterSearchCloseGoTo}) => {

    //Used to change the filter choice and close the dropdown in same click
    const filterOptionChangeHandler = value => {
        allowOnlyOneCheckedBoxContainer(value, filterOption, setFilterOption)
        setShowFilterDropdown(false)
    }

    //Used to set the filter tag of the search bar
    const setFilterLabel = () => {
        const result = filterOption.filter(option => option.isChecked)[0]
        if (result.type === 'status') {
            return 'Status'
        } else if (result.type === 'location') {
            return 'Country inv.'
        } else {
            return 'Description'
        }
    }

    return (
        <StepsFilterSearchContainer>
            <DropdownInternalContainer
                setDropdownView={setShowFilterDropdown}
                showDropdownView={showFilterDropdown}
            >
                <FilterSearchButton onClick={toggleFilterSearchCloseGoTo}>
                    <FilterSearchText>Filter</FilterSearchText>
                </FilterSearchButton>
                <StepsFilterSearchChoices
                    filterOption={filterOption}
                    filterOptionChangeHandler={filterOptionChangeHandler}
                    showFilterDropdown={showFilterDropdown}
                />
            </DropdownInternalContainer>
            <FilterSelectionContainer>
                <FilterLabelText>{setFilterLabel()}</FilterLabelText>
            </FilterSelectionContainer>
            <FilterSearchInput
                onKeyPress={(e) => filterByKeypressChangeHandler(e)}
                placeholder='Search steps...'
                ref={filterString}
                type='text'
            />
            <FilterResetImgContainer onClick={resetFilterChangeHandler}>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer onClick={filterByClickChangeHandler}>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </StepsFilterSearchContainer>
    )
}

export default StepsFilterSearchBar

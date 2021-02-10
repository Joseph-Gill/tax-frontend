import React from 'react'
import MemberFilterSearchChoices from './MemberFilterSearchChoices'
import {allowOnlyOneCheckedBoxContainer} from '../../../helpers'
import reset from '../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../assets/icons/stark_search_bar_icon.svg'
import {FilterSpacer} from '../../../style/spans'
import {FilterImgContainer, FilterResetImgContainer} from '../../../style/containers'
import {DropdownContainer, FilterLabelText, FilterSearchButton,
    FilterSearchInput, FilterSearchText, FilterSelectionContainer} from '../../../style/dropdowns'
import {MembersFilterSearchContainer} from './styles'


const MemberFilterSearchBar = ({filterOption, filterMemberStatus, filterString, setFilterOption,
                            setFilterString, setShowFilterDropdown, showFilterDropdown}) => {

    //Used to change the filter choice and close the dropdown in same click
    const filterOptionChangeHandler = value => {
        allowOnlyOneCheckedBoxContainer(value, filterOption, setFilterOption)
        setShowFilterDropdown(false)
    }

    //Used to set the filter tag of the search bar
    const setFilterLabel = () => {
        const result = filterOption.filter(option => option.isChecked)[0]
        switch (result.type) {
            case 'email': {
                return 'Email'
            }
            case 'name': {
                return 'Name'
            }
            case 'organization': {
                return 'Organization'
            }
            case 'project_access': {
                return 'Project Access'
            }
            case 'country': {
                return 'Country'
            }
            default:
                return 'Project Role'
        }
    }

    return (
        <MembersFilterSearchContainer>
            <DropdownContainer>
                <FilterSearchButton onClick={() => setShowFilterDropdown(!showFilterDropdown)}>
                    <FilterSearchText>Filter</FilterSearchText>
                </FilterSearchButton>
                <MemberFilterSearchChoices
                    filterMemberStatus={filterMemberStatus}
                    filterOption={filterOption}
                    filterOptionChangeHandler={filterOptionChangeHandler}
                    showFilterDropdown={showFilterDropdown}
                />
            </DropdownContainer>
            <FilterSelectionContainer>
                <FilterLabelText>{setFilterLabel()}</FilterLabelText>
            </FilterSelectionContainer>
            <FilterSearchInput
                onChange={(e) => setFilterString(e.target.value)}
                placeholder='Search members...'
                type='text'
                value={filterString}
            />
            <FilterResetImgContainer>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </MembersFilterSearchContainer>
    )
}

export default MemberFilterSearchBar

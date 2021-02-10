import React, {useState} from 'react'
import reset from '../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../assets/icons/stark_search_bar_icon.svg'
import {allowOnlyOneCheckedBoxContainer} from '../../../helpers'
import {FilterSpacer} from '../../../style/spans'
import {DefaultDropdownText} from '../../../style/text'
import {FilterCustomCheckbox} from '../../../style/labels'
import {FilterImgContainer, FilterResetImgContainer} from '../../../style/containers'
import {DropdownContent} from '../../../components/Dropdowns/styles'
import {FilterDropdownContainer, FilterDropdownContentContainer, FilterSelectionContainer,
    StepFilterLabelText, StepFilterSearchButton, StepFilterSearchInput, StepFilterSearchText,
    StepsFilterSearchContainer} from './styles'


const StepsFilterSearchBar = ({filterOption, filterString, setFilterOption, setFilterString}) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const filterOptionChangeHandler = value => {
        allowOnlyOneCheckedBoxContainer(value, filterOption, setFilterOption)
        setShowDropdown(false)
    }

    const setFilterLabel = () => {
        const result = filterOption.filter(option => option.isChecked)[0]
        if (result.type === 'status') {
            return 'Status'
        } else if (result.type === 'location') {
            return 'Tax Cons. Loc.'
        } else {
            return 'Description'
        }
    }

    return (
        <StepsFilterSearchContainer>
            <FilterDropdownContainer>
                <StepFilterSearchButton onClick={() => setShowDropdown(!showDropdown)}>
                    <StepFilterSearchText>Filter</StepFilterSearchText>
                </StepFilterSearchButton>
                <FilterDropdownContentContainer show={showDropdown ? 1 : 0}>
                    <DropdownContent onClick={() => filterOptionChangeHandler(0)}>
                        <FilterCustomCheckbox>
                            <input
                                checked={filterOption[0].isChecked}
                                id='status'
                                onChange={() => filterOptionChangeHandler(0)}
                                type='checkbox'
                                value={0}
                            />
                            <span className='checkmark' />
                            <DefaultDropdownText htmlFor='status'>Status</DefaultDropdownText>
                        </FilterCustomCheckbox>
                    </DropdownContent>
                    <DropdownContent onClick={() => filterOptionChangeHandler(1)}>
                        <FilterCustomCheckbox>
                            <input
                                checked={filterOption[1].isChecked}
                                id='consequenceLocation'
                                onChange={() => filterOptionChangeHandler(1)}
                                type='checkbox'
                                value={1}
                            />
                            <span className='checkmark' />
                            <DefaultDropdownText htmlFor='consequenceLocation'>Tax Consequence Location</DefaultDropdownText>
                        </FilterCustomCheckbox>
                    </DropdownContent>
                    <DropdownContent onClick={() => filterOptionChangeHandler(2)}>
                        <FilterCustomCheckbox>
                            <input
                                checked={filterOption[2].isChecked}
                                id='description'
                                onChange={() => filterOptionChangeHandler(2)}
                                type='checkbox'
                                value={2}
                            />
                            <span className='checkmark' />
                            <DefaultDropdownText htmlFor='description'>Description</DefaultDropdownText>
                        </FilterCustomCheckbox>
                    </DropdownContent>
                </FilterDropdownContentContainer>
            </FilterDropdownContainer>
            <FilterSelectionContainer>
                <StepFilterLabelText>{setFilterLabel()}</StepFilterLabelText>
            </FilterSelectionContainer>
            <StepFilterSearchInput
                onChange={(e) => setFilterString(e.target.value)}
                placeholder='Search steps...'
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
        </StepsFilterSearchContainer>
    )
}

export default StepsFilterSearchBar

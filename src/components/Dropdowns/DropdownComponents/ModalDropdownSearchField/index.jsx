import React from 'react'
import reset from '../../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../../assets/icons/stark_search_bar_icon.svg'
import {FilterSpacer} from '../../../../style/spans'
import {ModalDropdownSearchContainer, ModalDropdownSearchInput} from '../../styles'
import {FilterImgContainer, FilterResetImgContainer} from '../../../../style/containers'


const ModalDropdownSearchField = ({inputName, handleKeyPress, inputRef, inputPlaceholder,
                                  handleFilterReset, handleFilterClick}) => {
    return (
        <ModalDropdownSearchContainer>
            <ModalDropdownSearchInput
                name={inputName}
                onKeyPress={(e) => handleKeyPress(e)}
                placeholder={inputPlaceholder}
                ref={inputRef}
                type='text'
            />
            <FilterResetImgContainer onClick={() => handleFilterReset()}>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer onClick={() => handleFilterClick()}>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </ModalDropdownSearchContainer>
    )
}

export default ModalDropdownSearchField

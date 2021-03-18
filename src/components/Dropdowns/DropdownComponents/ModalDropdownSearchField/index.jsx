import React from 'react'
import {handleFilterEntities, handleResetFilterEntities, handleSearchInputPressEnter} from '../../../../helpers'
import reset from '../../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../../assets/icons/stark_search_bar_icon.svg'
import {FilterSpacer} from '../../../../style/spans'
import {ModalDropdownSearchContainer, ModalDropdownSearchInput} from '../../styles'
import {FilterImgContainer, FilterResetImgContainer} from '../../../../style/containers'


const ModalDropdownSearchField = ({inputName, filterStateSet, inputRef, inputPlaceholder, originalArray, term}) => {
    return (
        <ModalDropdownSearchContainer>
            <ModalDropdownSearchInput
                name={inputName}
                onKeyPress={(e) => handleSearchInputPressEnter(e, originalArray, filterStateSet, term)}
                placeholder={inputPlaceholder}
                ref={inputRef}
                type='text'
            />
            <FilterResetImgContainer onClick={() => handleResetFilterEntities(term, filterStateSet, originalArray)}>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer onClick={() => handleFilterEntities(originalArray, filterStateSet, term)}>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </ModalDropdownSearchContainer>
    )
}

export default ModalDropdownSearchField

import React from 'react'
import reset from '../../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../../assets/icons/stark_search_bar_icon.svg'
import {FilterSpacer} from '../../../../style/spans'
import {ModalDropdownSearchContainer, ModalDropdownSearchInput} from '../../styles'
import {FilterImgContainer, FilterResetImgContainer} from '../../../../style/containers'
import {handleFilterEntities, handleResetFilterEntities} from '../../../../helpers'


const ModalDropdownSearchField = ({arrayToFilter, inputName, handleKeyPress, filterStateSet, inputRef, inputPlaceholder,
                                  originalArray, term}) => {
    return (
        <ModalDropdownSearchContainer>
            <ModalDropdownSearchInput
                name={inputName}
                onKeyPress={(e) => handleKeyPress(e)}
                placeholder={inputPlaceholder}
                ref={inputRef}
                type='text'
            />
            <FilterResetImgContainer onClick={() => handleResetFilterEntities(term, filterStateSet, originalArray)}>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer onClick={() => handleFilterEntities(arrayToFilter, filterStateSet, term)}>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </ModalDropdownSearchContainer>
    )
}

export default ModalDropdownSearchField

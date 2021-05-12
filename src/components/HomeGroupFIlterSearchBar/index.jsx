import React from 'react'
import reset from '../../assets/icons/stark_close_icon.svg'
import searchImage from '../../assets/icons/stark_search_bar_icon.svg'
import {FilterSpacer} from '../../style/spans'
import {FilterImgContainer, FilterResetImgContainer} from '../../style/containers'
import {HomeFilterSearchContainer, HomeFilterSearchInput} from './styles'


const HomeGroupFilterSearchBar = ({filterByClickChangeHandler, filterByKeypressChangeHandler, filterPlaceholder,
                                      filterString, resetFilterChangeHandler}) => {
    return (
        <HomeFilterSearchContainer>
            <HomeFilterSearchInput
                onKeyPress={(e) => filterByKeypressChangeHandler(e)}
                placeholder={filterPlaceholder}
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
        </HomeFilterSearchContainer>
    )
}

export default HomeGroupFilterSearchBar

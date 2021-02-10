import React from 'react'
import reset from '../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../assets/icons/stark_search_bar_icon.svg'
import {FilterImgContainer, FilterResetImgContainer} from '../../../style/containers'
import {HomeFilterSearchContainer, HomeFilterSearchInput} from './styles'
import {FilterSpacer} from '../../../style/spans'


const HomeFilterSearchBar = ({filterByClickChangeHandler, filterByKeypressChangeHandler, filterString, resetFilterChangeHandler}) => {
    return (
        <HomeFilterSearchContainer>
            <HomeFilterSearchInput
                onKeyPress={(e) => filterByKeypressChangeHandler(e)}
                placeholder='Search Group and Project names...'
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

export default HomeFilterSearchBar

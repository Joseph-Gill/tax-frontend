import React from 'react'
import reset from '../../../assets/icons/stark_close_icon.svg'
import filterImage from '../../../assets/icons/stark_filter.svg'
import {HomeFilterImgContainer, HomeFilterResetImg, HomeFilterResetImgContainer, HomeFilterSearchContainer,
    HomeFilterSearchInput, HomeFilterSpacer} from './styles'


const HomeFilterSearchBar = ({filterByClickChangeHandler, filterByKeypressChangeHandler, filterString, resetFilterChangeHandler}) => {
    return (
        <HomeFilterSearchContainer>
            <HomeFilterSearchInput
                onKeyPress={(e) => filterByKeypressChangeHandler(e)}
                placeholder='Search Group and Project names...'
                ref={filterString}
                type='text'
            />
            <HomeFilterResetImgContainer onClick={resetFilterChangeHandler}>
                <HomeFilterResetImg alt='reset filter' src={reset} />
            </HomeFilterResetImgContainer>
            <HomeFilterSpacer />
            <HomeFilterImgContainer onClick={filterByClickChangeHandler}>
                <img alt='search filter' src={filterImage} />
            </HomeFilterImgContainer>
        </HomeFilterSearchContainer>
    )
}

export default HomeFilterSearchBar

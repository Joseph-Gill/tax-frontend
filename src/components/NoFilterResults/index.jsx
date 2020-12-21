import React from 'react'
import noResults from '../../assets/icons/stark_no_filter_results.png'
import {CardTitleText, NoFilterResultText} from '../../style/text'
import {NoFilterResultsContainer, NoFilterTextContainer} from '../../style/containers'


const NoFilterResults = () => {
    return (
        <NoFilterResultsContainer>
            <img alt='no results' src={noResults} />
            <CardTitleText>Sorry, no result found</CardTitleText>
            <NoFilterTextContainer>
                <NoFilterResultText>What you searched was unfortunately</NoFilterResultText>
                <NoFilterResultText>not found or doesn&apos;t exist.</NoFilterResultText>
            </NoFilterTextContainer>
        </NoFilterResultsContainer>
    )
}

export default NoFilterResults

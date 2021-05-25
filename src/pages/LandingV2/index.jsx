import React from 'react'
import styled from 'styled-components/macro'
import CompanyDescriptionCards from './CompanyDescriptionCards'
import ProductDescriptionCards from './ProductDescriptionCards'
import {CompanyDescriptionContainer, LandingPageContainer, LandingSectionTitleContainer, ProductsDescriptionContainer} from './styles'


const LandingFooterContainer = styled.div`
    width: 100%;
    height: 180px;
    background: ${props => props.theme.grayFive};
`

const LandingV2 = () => {
    return (
        <LandingPageContainer>
            <CompanyDescriptionContainer>
                <LandingSectionTitleContainer>
                    <h2>Tax Cheetah</h2>
                    <span>The first digital corporate tax advisory platform for:</span>
                </LandingSectionTitleContainer>
                <CompanyDescriptionCards />
            </CompanyDescriptionContainer>
            <ProductsDescriptionContainer>
                <LandingSectionTitleContainer>
                    <h2>Our Products</h2>
                    <span>Speed up corporate tax advisory with the following tools:</span>
                </LandingSectionTitleContainer>
                <ProductDescriptionCards />
            </ProductsDescriptionContainer>
            <LandingFooterContainer>

            </LandingFooterContainer>
        </LandingPageContainer>
    )
}

export default LandingV2

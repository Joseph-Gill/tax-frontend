import React from 'react'
import LandingFooter from '../../components/LandingFooter'
import CompanyDescriptionCards from './CompanyDescriptionCards'
import ProductDescriptionCards from './ProductDescriptionCards'
import {CompanyDescriptionContainer, LandingSectionTitleContainer, ProductsDescriptionContainer} from './styles'
import {LandingPageContainer} from '../../style/containers'


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
            <LandingFooter />
        </LandingPageContainer>
    )
}

export default LandingV2

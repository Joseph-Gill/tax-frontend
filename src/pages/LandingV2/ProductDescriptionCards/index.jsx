import React from 'react'
import {PLATFORM} from '../../../routes/paths'
import platform from '../../../assets/icons/tax_cheetah_tax_platform_icon.svg'
import compliance from '../../../assets/icons/tax_cheetah_compliance_icon.svg'
import calculator from '../../../assets/icons/tax_cheetah_calculator_icon.svg'
import {LandingDisplayCard} from '../../../style/cards'
import {LandingDisplayCardLink} from '../../../style/links'
import {DisplayCardIconContainer} from '../../../style/containers'
import {ProductCardContainer} from './styles'


const ProductDescriptionCards = () => {
    return (
        <ProductCardContainer>
            <LandingDisplayCard>
                <DisplayCardIconContainer>
                    <img alt='tax platform' src={platform} />
                </DisplayCardIconContainer>
                <h2>Corporate Tax Platform</h2>
                <span>Digital platform to simplify all work around</span>
                <span>corporate tax advisory and Swiss tax compliance</span>
                <LandingDisplayCardLink to={PLATFORM}>Learn More</LandingDisplayCardLink>
            </LandingDisplayCard>
            <LandingDisplayCard>
                <DisplayCardIconContainer>
                    <img alt='compliance tool' src={compliance} />
                </DisplayCardIconContainer>
                <h2>Tax Compliance Tool</h2>
                <span>One-click preparation and storing of all Swiss</span>
                <span>withholding tax and stamp duty forms and</span>
                <span>enclosures</span>
                <i>coming soon</i>
            </LandingDisplayCard>
            <LandingDisplayCard>
                <DisplayCardIconContainer>
                    <img alt='tax calculator' src={calculator} />
                </DisplayCardIconContainer>
                <h2>Tax Calculator</h2>
                <span>Easy to use Swiss corporate tax calculator to</span>
                <span>calculate your tax provision and review of tax</span>
                <span>assessments</span>
                <i>coming soon</i>
            </LandingDisplayCard>
        </ProductCardContainer>
    )
}

export default ProductDescriptionCards

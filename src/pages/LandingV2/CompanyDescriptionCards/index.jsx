import React from 'react'
import {PLATFORM} from '../../../routes/paths'
import departments from '../../../assets/icons/tax_cheetah_building_icon.svg'
import advisors from '../../../assets/icons/tax_cheetah_advisors_icon.svg'
import {LandingDisplayCardLink} from '../../../style/links'
import {CompanyCardContainer} from './styles'
import {LandingDisplayCard} from '../../../style/cards'
import {DisplayCardIconContainer} from '../../../style/containers'


const CompanyDescriptionCards = () => {
    return (
        <CompanyCardContainer>
            <LandingDisplayCard>
                <DisplayCardIconContainer>
                    <img alt='tax departments' src={departments} />
                </DisplayCardIconContainer>
                <h2>Tax Departments</h2>
                <span>Free your tax resources from non-value adding</span>
                <span>tasks by using our Tax Platform</span>
                <LandingDisplayCardLink to={PLATFORM}>Learn More</LandingDisplayCardLink>
            </LandingDisplayCard>
            <LandingDisplayCard>
                <DisplayCardIconContainer>
                    <img alt='tax advisors' src={advisors} />
                </DisplayCardIconContainer>
                <h2>Tax Advisors</h2>
                <span>Automate and standardize your tax advice for</span>
                <span>corporate clients</span>
                <LandingDisplayCardLink to={PLATFORM}>Learn More</LandingDisplayCardLink>
            </LandingDisplayCard>
        </CompanyCardContainer>
    )
}

export default CompanyDescriptionCards

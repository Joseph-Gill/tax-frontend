import React from 'react'
import blueLion from '../../../assets/icons/tax_cheetah_blue_lion_logo.jpg'
import propulsion from '../../../assets/icons/tax_cheetah_propulsion_logo.jpg'
import linkedinIcon from '../../../assets/icons/tax_cheetah_about_linkedin_icon.svg'
import {LinkedInContainer} from '../styles'
import {PartnerCard, PartnerCardContainer, PartnerLogo, PartnerLogoContainer} from './styles'


const Partners = () => {
    return (
        <PartnerCardContainer>
            <PartnerCard>
                <PartnerLogoContainer>
                    <PartnerLogo alt='partner logo' src={blueLion} />
                </PartnerLogoContainer>
                <h2>Bluelion</h2>
                <span>LikeMinded</span>
                <span>Startup Accelerator</span>
                <LinkedInContainer href='https://www.linkedin.com/company/bluelion-incubator/' rel='noopener noreferrer' target='_blank'>
                    <img alt='linkedIn' src={linkedinIcon} />
                    <span>LinkedIn</span>
                </LinkedInContainer>
            </PartnerCard>
            <PartnerCard>
                <PartnerLogoContainer>
                    <PartnerLogo alt='partner logo' src={propulsion} />
                </PartnerLogoContainer>
                <h2>Propulsion</h2>
                <span>Coding and Data Science Academy</span>
                <LinkedInContainer href='https://www.linkedin.com/school/propulsion-academy/' rel='noopener noreferrer' target='_blank'>
                    <img alt='linkedIn' src={linkedinIcon} />
                    <span>LinkedIn</span>
                </LinkedInContainer>
            </PartnerCard>
        </PartnerCardContainer>
    )
}

export default Partners

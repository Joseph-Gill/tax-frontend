import React from 'react'
import linkedinIcon from '../../../assets/icons/tax_cheetah_about_linkedin_icon.svg'
import laurentProfile from '../../../assets/profiles/tax_cheetah_laurent_profile.jpg'
import danieleProfile from '../../../assets/profiles/tax_cheetah_daniele_profile.jpg'
import {LinkedInContainer, ProfileImage, ProfileImageContainer} from '../styles'
import {AdvisorCard, AdvisorCardContainer} from './styles'


const Advisors = () => {
    return (
        <AdvisorCardContainer>
            <AdvisorCard>
                <ProfileImageContainer>
                    <ProfileImage alt='profile photo' src={laurentProfile} />
                </ProfileImageContainer>
                <h2>Laurent Myer</h2>
                <span>General Advisor</span>
                <LinkedInContainer href='https://www.linkedin.com/in/laurent-meyer/' rel='noopener noreferrer' target='_blank'>
                    <img alt='linkedIn' src={linkedinIcon} />
                    <span>LinkedIn</span>
                </LinkedInContainer>
            </AdvisorCard>
            <AdvisorCard>
                <ProfileImageContainer>
                    <ProfileImage alt='profile photo' src={danieleProfile} />
                </ProfileImageContainer>
                <h2>Daniele Roncaglioni</h2>
                <span>Technical Advisor</span>
                <LinkedInContainer href='https://www.linkedin.com/in/daniele-roncaglioni/' rel='noopener noreferrer' target='_blank'>
                    <img alt='linkedIn' src={linkedinIcon} />
                    <span>LinkedIn</span>
                </LinkedInContainer>
            </AdvisorCard>
        </AdvisorCardContainer>
    )
}

export default Advisors

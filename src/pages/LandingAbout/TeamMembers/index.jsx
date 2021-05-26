import React from 'react'
import alainProfile from '../../../assets/profiles/tax_cheetah_alain_profile.png'
import linkedinIcon from '../../../assets/icons/tax_cheetah_about_linkedin_icon.svg'
import josephProfile from '../../../assets/profiles/tax_cheetah_joseph_profile.png'
import {LinkedInContainer, ProfileImage, ProfileImageContainer} from '../styles'
import {TeamMemberCard, TeamMemberCardContainer} from './styles'


const TeamMembers = () => {
    return (
        <TeamMemberCardContainer>
            <TeamMemberCard>
                <ProfileImageContainer>
                    <ProfileImage alt='profile photo' src={alainProfile} />
                </ProfileImageContainer>
                <h2>Alain Horat</h2>
                <span>CEO and Founder</span>
                <span>Swiss tax expert, Swiss CPA</span>
                <LinkedInContainer href='https://www.linkedin.com/in/alain-horat/' rel='noopener noreferrer' target='_blank'>
                    <img alt='linkedIn' src={linkedinIcon} />
                    <span>LinkedIn</span>
                </LinkedInContainer>
            </TeamMemberCard>
            <TeamMemberCard>
                <ProfileImageContainer>
                    <ProfileImage alt='profile photo' src={josephProfile} />
                </ProfileImageContainer>
                <h2>Joseph Gill</h2>
                <span>CTO</span>
                <span>Software Developer</span>
                <LinkedInContainer href='https://www.linkedin.com/in/josephedwingill/' rel='noopener noreferrer' target='_blank'>
                    <img alt='linkedIn' src={linkedinIcon} />
                    <span>LinkedIn</span>
                </LinkedInContainer>
            </TeamMemberCard>
        </TeamMemberCardContainer>
    )
}

export default TeamMembers

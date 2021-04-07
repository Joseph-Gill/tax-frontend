import React from 'react'
import linkedinIcon from '../../../../assets/icons/tax_cheetah_about_linkedin_icon.svg'
import {TeamMemberCardContainer, TeamMemberImage, TeamMemberInfoContainer, TeamMemberNameContainer} from '../styles'


const TeamMemberCard = ({description, linkedInLink, name, position, profilePicture}) => {
    return (
        <TeamMemberCardContainer>
            <TeamMemberImage alt='profile picture' src={profilePicture} />
            <TeamMemberInfoContainer>
                <TeamMemberNameContainer>
                    <h1>{name}</h1>
                    <a href={linkedInLink} rel='noopener noreferrer' target='_blank'>
                        {/* eslint-disable-next-line react/jsx-max-depth */}
                        <img alt='linkedIn' src={linkedinIcon} />
                    </a>
                </TeamMemberNameContainer>
                <h2>{position}</h2>
                <span>{description}</span>
            </TeamMemberInfoContainer>
        </TeamMemberCardContainer>
    )
}

export default TeamMemberCard

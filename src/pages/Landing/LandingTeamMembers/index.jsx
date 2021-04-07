import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import alainProfile from '../../../assets/profiles/tax_cheetah_alain_profile.png'
import josephProfile from '../../../assets/profiles/tax_cheetah_joseph_profile.png'
import {LandingTeamContainer} from '../styles'
import {LandingTeamMemberContainer, LandingTeamTitle} from './styles'
import {ImagePlaceholder} from '../../../style'


const LandingTeamMembers = () => {
    return (
        <LandingTeamContainer id='team'>
            <LandingTeamTitle>Our Team</LandingTeamTitle>
            <LandingTeamMemberContainer>
                <TeamMemberCard
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum accumsan porttitor. Proin sed rutrum ante. Nunc condimentum sapien
                            id nunc mattis egestas. Aliquam eu ornare magna. Vivamus suscipit mauris vel arcu iaculis, ornare scelerisque nisl rhoncus. Duis quis velit
                            tempor ante finibus facilisis. Morbi lectus lacus, gravida sit amet facilisis ut, scelerisque vel lorem. Suspendisse potenti. Aliquam eget
                            gravida purus. Mauris laoreet, eros tristique aliquam luctus, velit massa pharetra ligula, in accumsan lorem ante quis turpis. Sed molestie
                            orci nec ipsum mollis, vel sollicitudin enim ornare. In velit dolor, fringilla ut blandit nec, facilisis et nisi.'
                    linkedInLink='https://www.linkedin.com/in/alain-horat/'
                    name='Alain Horat'
                    position='CEO'
                    profilePicture={alainProfile}
                />
                <TeamMemberCard
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum accumsan porttitor. Proin sed rutrum ante. Nunc condimentum sapien
                            id nunc mattis egestas. Aliquam eu ornare magna. Vivamus suscipit mauris vel arcu iaculis, ornare scelerisque nisl rhoncus. Duis quis velit
                            tempor ante finibus facilisis. Morbi lectus lacus, gravida sit amet facilisis ut, scelerisque vel lorem. Suspendisse potenti. Aliquam eget
                            gravida purus. Mauris laoreet, eros tristique aliquam luctus, velit massa pharetra ligula, in accumsan lorem ante quis turpis. Sed molestie
                            orci nec ipsum mollis, vel sollicitudin enim ornare. In velit dolor, fringilla ut blandit nec, facilisis et nisi.'
                    linkedInLink='https://www.linkedin.com/in/josephedwingill/'
                    name='Joseph Gill'
                    position='Software Developer Consultant'
                    profilePicture={josephProfile}
                />
                <TeamMemberCard
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum accumsan porttitor. Proin sed rutrum ante. Nunc condimentum sapien
                            id nunc mattis egestas. Aliquam eu ornare magna. Vivamus suscipit mauris vel arcu iaculis, ornare scelerisque nisl rhoncus. Duis quis velit
                            tempor ante finibus facilisis. Morbi lectus lacus, gravida sit amet facilisis ut, scelerisque vel lorem. Suspendisse potenti. Aliquam eget
                            gravida purus. Mauris laoreet, eros tristique aliquam luctus, velit massa pharetra ligula, in accumsan lorem ante quis turpis. Sed molestie
                            orci nec ipsum mollis, vel sollicitudin enim ornare. In velit dolor, fringilla ut blandit nec, facilisis et nisi.'
                    linkedInLink='https://www.linkedin.com'
                    name='Placeholder Person'
                    position='Placeholder'
                    profilePicture={ImagePlaceholder}
                />
            </LandingTeamMemberContainer>
        </LandingTeamContainer>
    )
}

export default LandingTeamMembers

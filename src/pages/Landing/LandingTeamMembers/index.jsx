import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import alainProfile from '../../../assets/profiles/tax_cheetah_alain_profile.png'
import josephProfile from '../../../assets/profiles/tax_cheetah_joseph_profile.png'
import laurentProfile from '../../../assets/profiles/tax_cheetah_laurent_profile.jpg'
import {LandingTeamContainer} from '../styles'
import {LandingTeamMemberContainer, LandingTeamTitle} from './styles'
import {ImagePlaceholder} from '../../../style'


const LandingTeamMembers = () => {
    return (
        <LandingTeamContainer id='team'>
            <LandingTeamTitle>Our Team</LandingTeamTitle>
            <LandingTeamMemberContainer>
                <TeamMemberCard
                    description='Prior to founding Tax Cheetah, Alain worked for EY in Zurich and New York advising corporate groups in Swiss and international tax matters.
                            Alain is a Swiss tax expert and a Swiss CPA. Besides tax and finance, his passion was always technology. This led him to Propulsion Academy where
                            he completed the Full Stack program and learnt the power of coding.'
                    linkedInLink='https://www.linkedin.com/in/alain-horat/'
                    name='Alain Horat'
                    position='CEO'
                    profilePicture={alainProfile}
                />
                <TeamMemberCard
                    description='Joseph developed a passion for technology at a young age where he spent time building computers and solving puzzles with his father. He has worked
                            in Retail Management for more than fifteen years leading teams with a focus on providing an excellent customer experience. Desiring to transition his career
                            to a new one based on technology, he completed the Full Stack program at Propulsion Academy. It was here that he met and worked with Alain. He has since joined the team
                            as a Software Developer Consultant working on the Tax Cheetah application.'
                    linkedInLink='https://www.linkedin.com/in/josephedwingill/'
                    name='Joseph Gill'
                    position='Software Developer Consultant'
                    profilePicture={josephProfile}
                />
                <TeamMemberCard
                    description='Ever since his childhood, Laurent has lived and breathed IT and entrepreneurship. His passion is to educate the world in the most advanced
                            IT technologies, filling the gap between the enormous demands for experts in the coming decades. He is adamant that many talented, dedicated people
                            coming out of other disciplines can become successful IT professionals, and will fill that gap. Propulsion Academy is the realization of that vision.'
                    linkedInLink='https://www.linkedin.com/in/laurent-meyer/'
                    name='Laurent Meyer'
                    position='Advisor'
                    profilePicture={laurentProfile}
                />
                <TeamMemberCard
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum accumsan porttitor. Proin sed rutrum ante. Nunc condimentum sapien
                            id nunc mattis egestas. Aliquam eu ornare magna. Vivamus suscipit mauris vel arcu iaculis, ornare scelerisque nisl rhoncus. Duis quis velit
                            tempor ante finibus facilisis. Morbi lectus lacus, gravida sit amet facilisis ut, scelerisque vel lorem. Suspendisse potenti. Aliquam eget
                            gravida purus. Mauris laoreet, eros tristique aliquam luctus, velit massa pharetra ligula, in accumsan lorem ante quis turpis. Sed molestie
                            orci nec ipsum mollis, vel sollicitudin enim ornare. In velit dolor, fringilla ut blandit nec, facilisis et nisi.'
                    linkedInLink='https://www.linkedin.com/'
                    name='Placeholder'
                    position='Placeholder'
                    profilePicture={ImagePlaceholder}
                />
            </LandingTeamMemberContainer>
        </LandingTeamContainer>
    )
}

export default LandingTeamMembers

import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import alainProfile from '../../../assets/profiles/tax_cheetah_alain_profile.png'
import josephProfile from '../../../assets/profiles/tax_cheetah_joseph_profile.png'
import laurentProfile from '../../../assets/profiles/tax_cheetah_laurent_profile.jpg'
import danieleProfile from '../../../assets/profiles/tax_cheetah_daniele_profile.jpg'
import {LandingTeamContainer} from '../styles'
import {LandingTeamMembersRow, LandingTeamTitle} from './styles'


const LandingTeamMembers = () => {
    return (
        <LandingTeamContainer id='team'>
            <LandingTeamTitle>Our Team</LandingTeamTitle>
            <LandingTeamMembersRow>
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
            </LandingTeamMembersRow>
            <LandingTeamMembersRow>
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
                    description='Ever since Daniele coded his first game while in high school, the passion for programming has never let go of him. After his MSc in Physics at ETH,
                    during which he completed various Data Science projects, he has continued to follow his passion for coding, first working for an IT consulting company and then
                    joining Propulsion Academy.'
                    linkedInLink='https://www.linkedin.com/in/daniele-roncaglioni-23a6aa11b/'
                    name='Daniele Roncaglioni'
                    position='Advisor'
                    profilePicture={danieleProfile}
                />
            </LandingTeamMembersRow>
        </LandingTeamContainer>
    )
}

export default LandingTeamMembers

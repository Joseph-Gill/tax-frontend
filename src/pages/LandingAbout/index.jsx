import React from 'react'
import Advisors from './Advisors'
import Partners from './Partners'
import TeamMembers from './TeamMembers'
import LandingFooter from '../../components/LandingFooter'
import {LandingPageContainer} from '../../style/containers'
import {AboutStoryContainer, AdvisorContainer, LandingAboutSectionTitle, PartnerContainer, StoryTextContainer, TeamContainer} from './styles'


const LandingAbout = () => {
    return (
        <LandingPageContainer>
            <AboutStoryContainer>
                <LandingAboutSectionTitle>Our Story</LandingAboutSectionTitle>
                <StoryTextContainer>
                    <p>
                        Joseph and Alain met at Propulsion&apos;s Academy Coding boot camp. After the boot camp and back at work, Alain could not stop thinking about workstreams in corporate tax advisory that
                        could be digitized. He was annoyed on all manual &quot;copy-paste&quot; work, all tax-relevant knowledge about clients that were not available, or the very manual interactions with clients.
                    </p>
                </StoryTextContainer>
                <StoryTextContainer>
                    <p>
                        So he asked himself: &quot;In 10 years from now, how will corporate tax departments and advisors work?&quot;. For us, the answer is clear: workflows will be digitized and automated radically, and manual
                        input is only required for high-value tax advice!
                    </p>
                </StoryTextContainer>
                <StoryTextContainer>
                    <p>
                        Therefore, he decided to start to build a platform to &quot;speed up corporate tax digitization&quot;. He shared his idea with Joseph, who was quickly convinced.  Since then, they have spent evenings and weekends
                        to develop a first MVP. After some great feedback from tax advisors as well as tax departments, they decided to leave their jobs and make their vision become reality.
                    </p>
                </StoryTextContainer>
            </AboutStoryContainer>
            <TeamContainer>
                <LandingAboutSectionTitle>Our Team</LandingAboutSectionTitle>
                <TeamMembers />
            </TeamContainer>
            <AdvisorContainer>
                <LandingAboutSectionTitle>Our Advisors</LandingAboutSectionTitle>
                <Advisors />
            </AdvisorContainer>
            <PartnerContainer>
                <LandingAboutSectionTitle>Our Partners</LandingAboutSectionTitle>
                <Partners />
            </PartnerContainer>
            <LandingFooter />
        </LandingPageContainer>
    )
}

export default LandingAbout

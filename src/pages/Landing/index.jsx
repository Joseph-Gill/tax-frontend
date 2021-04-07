import React from 'react'
import {HashLink} from 'react-router-hash-link'
import LandingHeader from './LandingHeader'
import LandingFooter from './LandingFooter'
import LandingTeamMembers from './LandingTeamMembers'
import AboutSectionLowerRow from './AboutSectionLowerRow'
import AboutSectionUpperRow from './AboutSectionUpperRow'
import {BackToTopContainer, BackToTopText, LandingAboutContainer, LandingHeaderBar, LandingPageContainer,
    LandingTitleContainer} from './styles'


const Landing = ({history}) => {
    return (
        <LandingPageContainer>
            <LandingHeaderBar>
                <LandingHeader
                    history={history}
                />
            </LandingHeaderBar>
            <LandingTitleContainer>
                <h1>Tax Cheetah</h1>
                <span>Your first digital corporate tax advisor</span>
            </LandingTitleContainer>
            <LandingAboutContainer id='about'>
                <AboutSectionUpperRow />
                <AboutSectionLowerRow />
            </LandingAboutContainer>
            <LandingTeamMembers />
            <BackToTopContainer>
                <HashLink smooth to="#top"><BackToTopText>Back to top</BackToTopText></HashLink>
            </BackToTopContainer>
            <LandingFooter />
        </LandingPageContainer>
    )
}

export default Landing

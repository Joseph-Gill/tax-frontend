import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import AboutSectionLowerRow from './AboutSectionLowerRow'
import AboutSectionUpperRow from './AboutSectionUpperRow'
import taxCheetahLogo from '../../assets/logos/tax_cheetah_logo_new_v1.png'
import buttonArrow from '../../assets/icons/tax_cheetah_landing_button_icon.svg'
import {LoginLogoImg} from '../../style/images'
import {LandingAboutContainer, LandingHeaderButton, LandingHeaderContainer, LandingHeaderLinkContainer,
    LandingPageContainer, LandingTeamContainer, LandingTitleContainer} from './styles'


const Landing = () => {
    return (
        <LandingPageContainer>
            <LandingHeaderContainer>
                <LoginLogoImg alt='tax cheetah logo' src={taxCheetahLogo} />
                <LandingHeaderLinkContainer>
                    <HashLink smooth to="/#about">About</HashLink>
                    <HashLink smooth to="/#team">Team</HashLink>
                    <Link to='/login'>Login</Link>
                </LandingHeaderLinkContainer>
                <LandingHeaderButton>
                    <span>Request Demo</span>
                    <img alt='request demo' src={buttonArrow} />
                </LandingHeaderButton>
            </LandingHeaderContainer>
            <LandingTitleContainer>
                <h1>Tax Cheetah</h1>
                <span>Your first digital corporate tax advisor</span>
            </LandingTitleContainer>
            <LandingAboutContainer id='about'>
                <AboutSectionUpperRow />
                <AboutSectionLowerRow />
            </LandingAboutContainer>
            <LandingTeamContainer id='team'>
                Placeholder for Team Carousel
            </LandingTeamContainer>
            <HashLink smooth to="#top">Back to Top</HashLink>
            <div>Footer Placeholder</div>
        </LandingPageContainer>
    )
}

export default Landing

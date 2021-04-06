import React from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import AboutSectionLowerRow from './AboutSectionLowerRow'
import AboutSectionUpperRow from './AboutSectionUpperRow'
import taxCheetahLogo from '../../assets/logos/tax_cheetah_logo_new_v1.png'
import buttonArrow from '../../assets/icons/tax_cheetah_landing_button_icon.svg'
import linkedinIcon from '../../assets/icons/tax_cheetah_about_linkedin_icon.svg'
import {LoginLogoImg} from '../../style/images'
import {BackToTopText, LandingAboutContainer, LandingHeaderButton, LandingHeaderContainer, LandingHeaderLinkContainer,
    LandingPageContainer, LandingTeamContainer, LandingTitleContainer} from './styles'
import {ImagePlaceholder} from '../../style'


const LandingHeaderBar = styled.div`
    width: 100vw;
    height: 100px;
    background: ${props => props.theme.grayFour};
    display: flex;
    align-items: center;
    justify-content: center;
`

const LandingTeamTitle = styled.span`
    font-family: ${props => props.theme.spartanFontFamily};
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: ${props => props.theme.white};
    margin-bottom: 50px;
`

const LandingTeamMemberContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    grid-auto-rows: auto;
`

const TeamMemberCardContainer = styled.div`
    width: 484px;
    height: 507px;
    background: ${props => props.theme.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px;
    border-radius: ${props => props.theme.borderRadius};
`

const TeamMemberImage = styled.img`
    border-radius: 50%;
`

const TeamMemberInfoContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-family: ${props => props.theme.spartanFontFamily};
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
    }
`

const TeamMemberNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 18px;
        font-weight: 800;
        margin-bottom: 5px;
        margin-right: 10px;
    }
`


const Landing = () => {
    return (
        <LandingPageContainer>
            <LandingHeaderBar>
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
            </LandingHeaderBar>
            <LandingTitleContainer>
                <h1>Tax Cheetah</h1>
                <span>Your first digital corporate tax advisor</span>
            </LandingTitleContainer>
            <LandingAboutContainer id='about'>
                <AboutSectionUpperRow />
                <AboutSectionLowerRow />
            </LandingAboutContainer>
            <LandingTeamContainer id='team'>
                <LandingTeamTitle>Our Team</LandingTeamTitle>
                <LandingTeamMemberContainer>
                    <TeamMemberCardContainer>
                        <TeamMemberImage alt='placeholder' src={ImagePlaceholder} />
                        <TeamMemberInfoContainer>
                            <TeamMemberNameContainer>
                                <h1>Alain Horat</h1>
                                <img alt='linkedIn' src={linkedinIcon} />
                            </TeamMemberNameContainer>
                            <h2>CEO</h2>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum accumsan porttitor. Proin sed rutrum ante. Nunc condimentum sapien
                                id nunc mattis egestas. Aliquam eu ornare magna. Vivamus suscipit mauris vel arcu iaculis, ornare scelerisque nisl rhoncus. Duis quis velit
                                tempor ante finibus facilisis. Morbi lectus lacus, gravida sit amet facilisis ut, scelerisque vel lorem. Suspendisse potenti. Aliquam eget
                                gravida purus. Mauris laoreet, eros tristique aliquam luctus, velit massa pharetra ligula, in accumsan lorem ante quis turpis. Sed molestie
                                orci nec ipsum mollis, vel sollicitudin enim ornare. In velit dolor, fringilla ut blandit nec, facilisis et nisi.
                            </span>
                        </TeamMemberInfoContainer>
                    </TeamMemberCardContainer>
                    <TeamMemberCardContainer>
                        <TeamMemberImage alt='placeholder' src={ImagePlaceholder} />
                        <TeamMemberInfoContainer>
                            <TeamMemberNameContainer>
                                <h1>Joseph Gill</h1>
                                <img alt='linkedIn' src={linkedinIcon} />
                            </TeamMemberNameContainer>
                            <h2>Software Developer Consultant</h2>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum accumsan porttitor. Proin sed rutrum ante. Nunc condimentum sapien
                                id nunc mattis egestas. Aliquam eu ornare magna. Vivamus suscipit mauris vel arcu iaculis, ornare scelerisque nisl rhoncus. Duis quis velit
                                tempor ante finibus facilisis. Morbi lectus lacus, gravida sit amet facilisis ut, scelerisque vel lorem. Suspendisse potenti. Aliquam eget
                                gravida purus. Mauris laoreet, eros tristique aliquam luctus, velit massa pharetra ligula, in accumsan lorem ante quis turpis. Sed molestie
                                orci nec ipsum mollis, vel sollicitudin enim ornare. In velit dolor, fringilla ut blandit nec, facilisis et nisi.
                            </span>
                        </TeamMemberInfoContainer>
                    </TeamMemberCardContainer>
                </LandingTeamMemberContainer>
            </LandingTeamContainer>
            <HashLink smooth to="#top"><BackToTopText>Back to top</BackToTopText></HashLink>
            <div>Footer Placeholder</div>
        </LandingPageContainer>
    )
}

export default Landing

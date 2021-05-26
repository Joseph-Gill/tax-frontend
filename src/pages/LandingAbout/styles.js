import styled from 'styled-components/macro'


export const AboutStoryContainer = styled.div`
    width: 100%;
    height: 647px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ${props => props.theme.grayFive};
    padding-top: 75px;
`

export const StoryTextContainer = styled.div`
    width: 694px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 30px;
`

export const TeamContainer = styled.div`
    width: 100%;
    height: 742px;
    padding-top: 75px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const ProfileImageContainer = styled.div`
    height: 152px;
    width: 152px;
    margin-bottom: 24px;
`

export const ProfileImage = styled.img`
    height: 152px;
    width: 152px;
    border-radius: 50%;
`

export const LinkedInContainer = styled.a`
    display: flex;
    align-items: center;

    span {
        margin-left: 10px;
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
    }
`

export const LandingAboutSectionTitle = styled.h2`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 32px;
    line-height: 44px;
    font-weight: 600;
    color: ${props => props.theme.primaryBlue};
    margin-bottom: 50px;
`

export const AdvisorContainer = styled.div`
    width: 100%;
    height: 657px;
    padding-top: 75px;
    background: ${props => props.theme.grayFive};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const PartnerContainer = styled.div`
    width: 100%;
    height: 655px;
    padding-top: 75px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

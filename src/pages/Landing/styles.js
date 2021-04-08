import styled from 'styled-components/macro'
import {BasePageContainer} from '../../style/containers'


export const LandingPageContainer = styled(BasePageContainer)`
    justify-content: flex-start;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 2510px;
    background: ${props => props.theme.landingBackground};
`

export const LandingHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1118px;
`

export const LandingHeaderLinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;

    a, span {
        font-family: ${props => props.theme.spartanFontFamily};
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        text-decoration: none;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

export const LandingHeaderButton = styled.button`
    width: 192px;
    height: 60px;
    border-radius: 2rem;
    box-shadow: ${props => props.theme.buttonBoxShadow};
    background: ${props => props.theme.white};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-weight: 800;
        font-size: 16px;
        line-height: 25.6px;
    }

    img {
        margin-left: 10px;
    }


    :hover {
        cursor: pointer;
        transition: 167ms;
        border: 1px solid ${props => props.theme.grayTwo};
    }

    :focus {
        outline: none;
    }
`

export const LandingTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: ${props => props.theme.spartanFontFamily};
    font-weight: 400;
    margin-bottom: 100px;

    h1 {
        font-family: ${props => props.theme.spartanFontFamily};
        font-weight: 400;
        font-size: 50px;
        line-height: 65px;
        margin-bottom: 50px;
    }

    span {
        font-size: 18px;
        line-height: 28.8px;
    }
`

export const LandingAboutContainer = styled.div`
    width: 1118px;
    height: 766px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
`
export const AboutSectionContainer = styled.div`
    width: 540px;
    height: 95%;
    display: inline-block;
    position: relative;
`

export const AboutContainerRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50%;
`

export const AboutContainerBottomRow = styled(AboutContainerRow)`
    align-items: flex-end;
`


export const AboutSectionImage = styled.img`
    position: absolute;
    top: 30%;
    left: 0;
    z-index: 2;
`

export const AboutSectionBackground = styled.img`
    position: absolute;
    right: 0;
    z-index: 0;
`

export const AboutSectionTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 220px;
    height: 276px;
    position: absolute;
    right: 50px;
    top: 50px;
    font-family: ${props => props.theme.spartanFontFamily};
    z-index: 2;
`

export const AboutSectionTextTitle = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 31.2px;
    margin-bottom: 20px;
`

export const AboutSectionTextContent = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 25.6px;
`

export const LandingTeamContainer = styled.div`
    width: 1118px;
    min-height: 709px;
    background: ${props => props.theme.lightPrimaryBlue};
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 50px 50px 0 50px;
    margin-bottom: 100px;
`

export const BackToTopText = styled.span`
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
`

export const LandingHeaderBar = styled.div`
    width: 100vw;
    height: 100px;
    background: ${props => props.theme.grayFour};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`

export const BackToTopContainer = styled.div`
    display: flex;
    width: 1118px;
    justify-content: center;
    margin-bottom: 100px;
`

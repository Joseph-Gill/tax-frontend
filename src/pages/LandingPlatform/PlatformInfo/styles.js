import styled from 'styled-components/macro'


export const PlatformInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2145px;
    background: ${props => props.theme.grayFive};
    padding-top: 64px;
`

export const InfoTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 1200px;
    height: 208px;

    h2 {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 32px;
        line-height: 44px;
        font-weight: 600;
        color: ${props => props.theme.primaryBlue};
        margin-bottom: 16px;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 24px;
    }

    h3 {
        font-family: ${props => props.theme.nunitoFontFamily};
        color: ${props => props.theme.primaryBlue};
        font-size: 20px;
        margin-top: 48px;
        font-weight: 400;
    }
`

export const PlatformExampleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 1200px;
    height: 310px;
`

export const ExampleImageContainer = styled.div`
    width: 370px;
`

export const ExampleImage = styled.img`
    height: auto;
    width: 370px;
`

export const ExampleImageTwo = styled.img`
    height: 310px;
    width: auto;
`

export const ExampleTextContainer = styled.div`
    width: 830px;
    height: 242px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 32px;

    h2 {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 12px;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 26px;
    }

    a {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 26px;
        color: ${props => props.theme.primaryBlue};

        :hover {
            cursor: pointer;
        }
    }
`

export const ExampleTextContainerLeft = styled(ExampleTextContainer)`
    align-items: flex-end;
`

export const ExampleTextBar = styled.div`
    width: 35px;
    border-bottom: 2px solid ${props => props.theme.primaryBlue};
    margin-bottom: 5px;
`

export const MoreToComeImageContainer = styled.div`
    width: 370px;
    height: 195px;
    background: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
`

import styled from 'styled-components/macro'


export const LandingFooterContainer = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.grayFive};
`

export const FooterAddressInfoContainer = styled.div`
    width: 1170px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
`

export const FooterAddressContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 22px;
        line-height: 28px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 24px;
    }

    a {
        margin-top: 16px;
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 32px;
        text-decoration: underline;

        :hover {
            cursor: pointer;
        }
    }
`

export const FooterInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    border-top: 1px solid ${props => props.theme.grayFour};
    padding-top: 13px;

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 20px;
    }
`

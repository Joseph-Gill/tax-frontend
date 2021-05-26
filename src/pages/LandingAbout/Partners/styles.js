import styled from 'styled-components/macro'


export const PartnerCardContainer = styled.div`
    display: flex;
`

export const PartnerCard = styled.div`
    width: 431px;
    height: 365px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    h2 {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 10px;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
        line-height: 30px;
    }
`

export const PartnerLogoContainer = styled.div`
    height: 202px;
    width: 202px;
    margin-bottom: 20px;
`

export const PartnerLogo = styled.img`
    height: 202px;
    width: auto;
`

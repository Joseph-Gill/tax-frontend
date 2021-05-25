import styled from 'styled-components/macro'


export const LandingPageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
`

export const CompanyDescriptionContainer = styled.div`
    width: 100%;
    height: 630px;
    background: ${props => props.theme.grayFive};
`

export const ProductsDescriptionContainer = styled.div`
    width: 100%;
    height: 630px;
`

export const LandingSectionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 200px;

    h2 {
        font-family: ${props => props.theme.spartanFontFamily};
        font-size: 32px;
        font-weight: 600;
        color: ${props => props.theme.primaryBlue};
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 16px;
    }
`

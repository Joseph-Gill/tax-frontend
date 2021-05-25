import styled from 'styled-components/macro'


export const LandingDisplayCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 300px;
    width: 370px;
    border: 1px solid ${props => props.theme.grayFour};
    box-shadow: ${props => props.theme.boxShadow};
    background: ${props => props.theme.white};
    margin: 0 15px;
    padding: 32px 20px;

    :hover {
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        transition: 167ms;
        border: 1px solid ${props => props.theme.primaryBlue};
    }

    h2 {
        font-family: ${props => props.theme.spartanFontFamily};
        font-weight: 600;
        font-size: 23px;
        margin: 16px 0 8px 0;
    }

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 15px;
        line-height: 22px;
    }

    i {
        margin-top: 8px;
        font-family: ${props => props.theme.nunitoFontFamily};
    }
`

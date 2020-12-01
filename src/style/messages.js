import styled from 'styled-components/macro'


export const ErrorMessage = styled.span`
    color: ${props => props.theme.colorFail};
    font-weight: 600;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 10px;
`

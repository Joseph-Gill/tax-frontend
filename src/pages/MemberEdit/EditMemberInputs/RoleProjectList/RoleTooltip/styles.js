import styled from 'styled-components/macro'


export const TooltipRowContainer = styled.div`
    display: flex;
    align-items: center;
`

export const TooltipRowText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    color: ${props => props.theme.grayOne};
    margin-left: 13px;
`

export const TooltipRowImage = styled.img`
    width: 5px;
    height: 5px;
`

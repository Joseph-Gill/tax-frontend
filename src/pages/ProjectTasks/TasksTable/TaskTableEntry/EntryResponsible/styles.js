import styled from 'styled-components/macro'


export const EntryResponsibleContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const EntryResponsibleText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.taskResponsibleText};
`

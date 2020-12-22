import styled from 'styled-components/macro'


export const StepDisplayFooterContainer = styled.div`
    width: 860px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 21px;
`

export const NodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BeginningNode = styled.div`
    width: 13px;
    height: 25px;
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 3px;
    background: ${props => props.theme.greenBright};
`

export const StepNode = styled(BeginningNode)`
    background: ${props => props.theme.primaryBlue};
`

export const StepDisplayText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.greenBright};
`

import styled from 'styled-components/macro'


export const StepChartAndButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: ${props => props.theme.boxShadow};
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const NoChartToDisplay = styled.div`
    width: 860px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        line-height: 19px;
        color: ${props => props.theme.grayTwo};
    }
`

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

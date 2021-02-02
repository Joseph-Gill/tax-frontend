import styled from 'styled-components/macro'


export const StepChartButtonsContainer = styled.div`
    width: 140px;
    display: ${props => props.hide ? 'none' : 'flex'};
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme.grayFour};
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.buttonBorderRadius};
`

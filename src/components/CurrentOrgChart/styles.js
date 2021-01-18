import styled from 'styled-components/macro'


export const OrgChartContainer = styled.div`
    width: 860px;
    background: ${props => props.theme.white};
    margin-top: ${props => props.componentCalling === 'StepDisplay' ? '0px' : '30px'};
    height: ${props => props.componentCalling === 'GroupOrgChart' ? '516px' : props.componentCalling === 'StepDisplay' ? '398px' : '437px'};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.componentCalling === 'StepDisplay' ? '0' : props.theme.boxShadow};
`

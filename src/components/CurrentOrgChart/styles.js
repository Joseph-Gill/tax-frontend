import styled from 'styled-components/macro'


export const OrgChartContainer = styled.div`
    width: 860px;
    background: ${props => props.theme.white};
    margin-top: 30px;
    height: 516px;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
`

export const BeginningOrgChartContainer = styled(OrgChartContainer)`
    height: 437px;
`

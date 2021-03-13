import styled from 'styled-components/macro'
import {NoChartToDisplay} from '../../style/containers'


export const GroupAddEditNoChartToDisplay = styled(NoChartToDisplay)`
    height: 335px;
    background: ${props => props.theme.white};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-right: 1px solid ${props => props.theme.grayFour};
    border-bottom: 1px solid ${props => props.theme.grayFour};
    border-left: 1px solid ${props => props.theme.grayFour};
`

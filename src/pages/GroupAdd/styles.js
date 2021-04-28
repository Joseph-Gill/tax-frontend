import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'


export const GroupAddEditNoChartToDisplay = styled.div`
    width: 860px;
    height: 305px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.theme.white};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-right: 1px solid ${props => props.theme.grayFour};
    border-bottom: 1px solid ${props => props.theme.grayFour};
    border-left: 1px solid ${props => props.theme.grayFour};

    @media ${devices.laptopL} {
        height: 660px;
        width: 1160px;
    }

    p {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        line-height: 19px;
        color: ${props => props.theme.grayTwo};
    }
`

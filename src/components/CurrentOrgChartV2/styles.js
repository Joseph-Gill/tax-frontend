import styled from 'styled-components/macro'
import {device as devices} from '../../style/devices'


export const OrgChartContainer = styled.div`
    width: 860px;
    background: ${props => props.theme.white};
    margin-top: ${props => props.componentCalling === 'StepDisplay' || props.componentCalling === 'GroupAddEdit' ? '0px' : '30px'};
    height: ${props => props.componentCalling === 'GroupOrgChart' ? '516px'
        : props.componentCalling === 'StepDisplay' ? '368px'
            : props.componentCalling === 'GroupAddEdit' ? '305px' : '405px'};
    border-top-left-radius: ${props => props.componentCalling === 'GroupAddEdit' ? 'none' : `${props.theme.borderRadius}`};
    border-top-right-radius: ${props => props.componentCalling === 'GroupAddEdit' ? 'none' : `${props.theme.borderRadius}`};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.componentCalling === 'StepDisplay' ? '0' : props.theme.boxShadow};
    border-top: ${props => props.componentCalling === 'GroupAddEdit' ? 'none' : `1px solid ${props.theme.grayFour}`};
    border-right: 1px solid ${props => props.theme.grayFour};
    border-bottom: 1px solid ${props => props.theme.grayFour};
    border-left: 1px solid ${props => props.theme.grayFour};

    @media ${devices.laptopL} {
        height: ${props => props.componentCalling === 'GroupOrgChart' ? '871px'
            : props.componentCalling === 'StepDisplay' ? '620px'
                : props.componentCalling === 'GroupAddEdit' ? '660px' : '657px'};
        width: 1160px;
    }
`

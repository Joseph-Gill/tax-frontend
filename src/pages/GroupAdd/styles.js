import styled from 'styled-components/macro'
import {NoChartToDisplay} from '../../style/containers'


export const EntityTitleButtonContainer = styled.div`
    width: 860px;
    margin-top: 10px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GroupAddEditEntityTitle = styled.h2`
    font-family: ${props => props.theme.spartanFontFamily};
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.black};
    margin-left: 30px;
`

export const GroupAddEditNoChartToDisplay = styled(NoChartToDisplay)`
    height: 335px;
    background: ${props => props.theme.white};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-right: 1px solid ${props => props.theme.grayFour};
    border-bottom: 1px solid ${props => props.theme.grayFour};
    border-left: 1px solid ${props => props.theme.grayFour};
`

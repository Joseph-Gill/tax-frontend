import styled from 'styled-components/macro'
import {StatusLegendContainer} from '../../style/containers'
import {device as devices} from '../../style/devices'


export const TaskListTitleButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 249px;
`

export const StatusLegendFilterDropdownContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
`

export const TaskStatusLegendContainer = styled(StatusLegendContainer)`
    width: 355px;
`

export const TasksTableContainer = styled.div`
    width: 860px;
    max-height: 469px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    overflow: auto;
    overflow-x: hidden;

    @media ${devices.height1080p} {
        max-height: 718px;
    }
`

export const TaskStepFilterGoToContainer = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
`

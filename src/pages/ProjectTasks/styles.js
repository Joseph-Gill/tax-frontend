import styled from 'styled-components/macro'
import {StatusLegendContainer} from '../../style/containers'


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
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
`

export const TaskStepFilterGoToContainer = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
`

import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {StatusLegendContainer} from '../../style/containers'
import {InputLabel} from '../../style/labels'


export const AddTaskButton = styled(BaseButton)`
    width: 109px;
    height: 32px;
`

export const StatusLegendFilterDropdownContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
`

export const TaskStatusLegendContainer = styled(StatusLegendContainer)`
    width: 405px;
`

export const TasksTableContainer = styled.div`
    width: 860px;
    max-height: 469px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.grayFive};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.grayTwo};
    }
`

export const StepFilterInputLabel = styled(InputLabel)`
    color: ${props => props.theme.primaryBlue};
    background: linear-gradient(${props => props.theme.grayFive}, #FFFFFF);
`

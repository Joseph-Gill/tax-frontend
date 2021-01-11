import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {StatusLegendContainer} from '../../style/containers'
import {StatusDropdown} from '../../style/dropdowns'
import arrow from '../../assets/icons/stark_dropdown_arrow_blue.svg'


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

export const TaskStepFilter = styled(StatusDropdown)`
    width: 110px;
    height: 34px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    color: ${props => props.theme.primaryBlue};
    font-size: 14px;
    border: 1px solid ${props => props.theme.primaryBlue};
    background-image: url(${arrow});
    background-position: 92%;
    background-repeat: no-repeat;
`

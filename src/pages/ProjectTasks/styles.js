import styled from 'styled-components/macro'
import {BaseButton} from '../../style/buttons'
import {StatusLegendContainer} from '../../style/containers'


export const AddTaskButton = styled(BaseButton)`
    width: 109px;
    height: 32px;
`

export const StatusLegendFilterDropdownContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 21px;
`

export const TaskStatusLegendContainer = styled(StatusLegendContainer)`
    width: 405px;
`

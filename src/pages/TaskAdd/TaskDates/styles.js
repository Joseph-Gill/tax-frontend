import styled from 'styled-components/macro'
import {NewTaskInputLabel} from '../styles'


export const TaskDatesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DueDateContainer = styled.div`
    display: flex;
    align-items: center;
`

export const CompletionDateContainer = styled.div`
    display: flex;
    align-items: center;
`

export const DueDateLabel = styled(NewTaskInputLabel)`
    margin-right: 151px;
`

export const CompletionDateLabel = styled(NewTaskInputLabel)`
    margin-right: 45px;
`

import styled from 'styled-components/macro'
import {TaskInputLabel} from '../../../style/labels'


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

export const DueDateLabel = styled(TaskInputLabel)`
    margin-right: 151px;
`

export const CompletionDateLabel = styled(TaskInputLabel)`
    margin-right: 45px;
`

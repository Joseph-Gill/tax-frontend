import React from 'react'
import DateInput from '../../../components/DateInput'
import {CompletionDateContainer, CompletionDateLabel, DueDateContainer, DueDateLabel, TaskDatesContainer} from './styles'


const TaskDates = ({completionDate, dueDate, setCompletionDate, setDueDate}) => {
    return (
        <TaskDatesContainer>
            <DueDateContainer>
                <DueDateLabel>Due Date</DueDateLabel>
                <DateInput
                    date={dueDate}
                    setDate={setDueDate}
                />
            </DueDateContainer>
            <CompletionDateContainer>
                <CompletionDateLabel>Planned Completion Date</CompletionDateLabel>
                <DateInput
                    date={completionDate}
                    setDate={setCompletionDate}
                />
            </CompletionDateContainer>
        </TaskDatesContainer>
    )
}

export default TaskDates

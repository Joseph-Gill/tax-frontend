import React from 'react'
import {ADD_TASK, GROUPS, PROJECTS} from '../../../routes/paths'
import noTasks from '../../../assets/icons/stark_no_task_found.svg'
import {AddNewTaskButton, NoTaskFoundContainer, NoTaskFoundImage, NoTaskFoundText} from './styles'


const NoTasksFound = ({history}) => {
    return (
        <NoTaskFoundContainer>
            <NoTaskFoundImage alt='no tasks found' src={noTasks} />
            <NoTaskFoundText>You haven&apos;t created any tasks for</NoTaskFoundText>
            <NoTaskFoundText>this project.</NoTaskFoundText>
            <AddNewTaskButton onClick={() => history.push(`${GROUPS}${PROJECTS}${ADD_TASK}`)}>Add New Task</AddNewTaskButton>
        </NoTaskFoundContainer>
    )
}

export default NoTasksFound

import React from 'react'
import {DropdownOption} from '../../../../style/options'
import {TaskStatus} from './styles'


const TaskStatusDropdown = ({setTaskStatus, taskStatus}) => {
    return (
        <TaskStatus
            onChange={(e) => setTaskStatus(e.target.value)}
            value={taskStatus}
        >
            <DropdownOption value='Not Started'>Not Started</DropdownOption>
            <DropdownOption value='Ongoing'>Ongoing</DropdownOption>
            <DropdownOption value='Planned'>Planned</DropdownOption>
            <DropdownOption value='Completed'>Completed</DropdownOption>
        </TaskStatus>
    )
}

export default TaskStatusDropdown

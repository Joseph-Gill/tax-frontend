import React from 'react'
import {ExpandedTaskStatusDropdown, ExpandedTaskStatusDropdownOption} from './styles'



const TaskStatusDropdown = ({task}) => {
    return (
        <ExpandedTaskStatusDropdown disabled value={task.status}>
            <ExpandedTaskStatusDropdownOption disabled value=''>Status</ExpandedTaskStatusDropdownOption>
            <ExpandedTaskStatusDropdownOption value='Not Started'>Not Started</ExpandedTaskStatusDropdownOption>
            <ExpandedTaskStatusDropdownOption value='Ongoing'>Ongoing</ExpandedTaskStatusDropdownOption>
            <ExpandedTaskStatusDropdownOption value='Planned'>Planned</ExpandedTaskStatusDropdownOption>
            <ExpandedTaskStatusDropdownOption value='Completed'>Completed</ExpandedTaskStatusDropdownOption>
        </ExpandedTaskStatusDropdown>
    )
}

export default TaskStatusDropdown

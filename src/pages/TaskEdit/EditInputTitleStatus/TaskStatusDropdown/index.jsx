import React from 'react'
import styled from 'styled-components/macro'
import {StatusDropdown} from '../../../../style/dropdowns'
import {DropdownOption} from '../../../../style/options'


const TaskStatus = styled(StatusDropdown)`
    width: 130px;
    background-position-x: 111px;
    margin-left: 45px;
`


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

import React from 'react'
import {TaskInputLabel} from '../../../style/labels'
import {NewTaskTitleInput} from '../../TaskAdd/styles'
import TaskStatusDropdown from './TaskStatusDropdown'
import {InputContainer, InputStatusContainer, StatusContainer} from './styles'


const EditInputTitleStatus = ({setTaskStatus, setTitle, taskStatus, title}) => {
    return (
        <InputStatusContainer>
            <InputContainer>
                <TaskInputLabel>Task title</TaskInputLabel>
                <NewTaskTitleInput
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter task title'
                    type='text'
                    value={title}
                />
            </InputContainer>
            <StatusContainer>
                <TaskInputLabel>Status</TaskInputLabel>
                <TaskStatusDropdown
                    setTaskStatus={setTaskStatus}
                    taskStatus={taskStatus}
                />
            </StatusContainer>
        </InputStatusContainer>
    )
}

export default EditInputTitleStatus

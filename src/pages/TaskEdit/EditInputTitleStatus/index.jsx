import React from 'react'
import {TaskInputLabel} from '../../../style/labels'
import TaskStatusDropdown from './TaskStatusDropdown'
import {InputContainer, InputStatusContainer, StatusContainer} from './styles'
import {TaskTitleInput} from '../../../style/inputs'


const EditInputTitleStatus = ({handleTaskStatusSelectChange, setShowTaskStatusSelect, setTitle, showTaskStatusSelect,
                                  taskStatus, title}) => {

    return (
        <InputStatusContainer>
            <InputContainer>
                <TaskInputLabel>Task title</TaskInputLabel>
                <TaskTitleInput
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
                    handleTaskStatusSelectChange={handleTaskStatusSelectChange}
                    setShowTaskStatusSelect={setShowTaskStatusSelect}
                    showTaskStatusSelect={showTaskStatusSelect}
                    taskStatus={taskStatus}
                />
            </StatusContainer>
        </InputStatusContainer>
    )
}

export default EditInputTitleStatus

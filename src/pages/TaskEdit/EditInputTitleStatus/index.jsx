import React from 'react'
import styled from 'styled-components/macro'
import {TaskInputLabel} from '../../../style/labels'
import {NewTaskTitleInput} from '../../TaskAdd/styles'
import {TaskInputRow} from '../../../style/containers'
import TaskStatusDropdown from './TaskStatusDropdown'


const InputStatusContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
`

const StatusContainer = styled.div`
    display: flex;
    align-items: center;
`


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

import React from 'react'
import {TaskErrorContainer, TaskInputRow} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {TaskTitleInput} from '../../../style/inputs'
import {TaskAddErrorInputRow} from '../styles'


const TaskAddTitle = ({error, title}) => {
    return (
        <TaskAddErrorInputRow>
            <TaskInputRow>
                <TaskInputLabel>Task title</TaskInputLabel>
                <TaskTitleInput
                    name='title'
                    placeholder='Enter task title'
                    ref={title}
                    type='text'
                />
            </TaskInputRow>
            <TaskErrorContainer>
                {error && <ErrorMessage>{error.title}</ErrorMessage>}
            </TaskErrorContainer>
        </TaskAddErrorInputRow>
    )
}

export default TaskAddTitle

import React from 'react'
import {TaskErrorContainer, TaskInputRow} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {TaskTitleInput} from '../../../style/inputs'


const TaskAddTitle = ({error, title}) => {
    return (
        <div>
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
        </div>
    )
}

export default TaskAddTitle

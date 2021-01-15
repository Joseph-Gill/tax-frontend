import React from 'react'
import {TaskErrorContainer, TaskUpperLabelRow} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {TaskDescriptionTextArea} from '../../../style/textarea'


const TaskAddDescription = ({description, error}) => {
    return (
        <div>
            <TaskUpperLabelRow>
                <TaskInputLabel>Task description</TaskInputLabel>
                <TaskDescriptionTextArea
                    placeholder='Write your task description'
                    ref={description}
                />
            </TaskUpperLabelRow>
            <TaskErrorContainer>
                {error && <ErrorMessage>{error.description}</ErrorMessage>}
            </TaskErrorContainer>
        </div>
    )
}

export default TaskAddDescription

import React from 'react'
import {TaskErrorContainer, TaskUpperLabelRow} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import {TaskDescriptionTextArea} from '../../../style/textarea'
import {ErrorMessage} from '../../../style/messages'


const TaskEditDescription = ({description, error, setDescription}) => {
    return (
        <div>
            <TaskUpperLabelRow>
                <TaskInputLabel>Task description</TaskInputLabel>
                <TaskDescriptionTextArea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Write your task description'
                    value={description}
                />
            </TaskUpperLabelRow>
            <TaskErrorContainer>
                {error && <ErrorMessage>{error.description}</ErrorMessage>}
            </TaskErrorContainer>
        </div>
    )
}

export default TaskEditDescription

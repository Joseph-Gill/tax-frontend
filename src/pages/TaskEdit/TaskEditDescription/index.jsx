import React from 'react'
import {TaskErrorContainer, TaskUpperLabelRow} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import EditorHTML from '../../../components/EditorHTML'


const TaskEditDescription = ({descriptionState, error, setDescriptionState, textToLoad}) => {
    return (
        <div>
            <TaskUpperLabelRow>
                <TaskInputLabel>Task description</TaskInputLabel>
                <EditorHTML
                    componentCalling='TaskAddEdit'
                    editorState={descriptionState}
                    setEditorState={setDescriptionState}
                    textToLoad={textToLoad}
                />
            </TaskUpperLabelRow>
            <TaskErrorContainer>
                {error && <ErrorMessage>{error.description}</ErrorMessage>}
            </TaskErrorContainer>
        </div>
    )
}

export default TaskEditDescription

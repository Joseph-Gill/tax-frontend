import React from 'react'
import EditorHTML from '../../../components/EditorHTML'
import styled from 'styled-components/macro'
import {TaskErrorContainer, TaskUpperLabelRow} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {device as devices} from '../../../style/devices'


const TaskDescriptionRow = styled.div`
    height: 160px;
    margin-bottom: 12px;

    @media ${devices.height1080p} {
            height: 480px;
        }
`

const TaskAddDescription = ({descriptionState, error, setDescriptionState}) => {
    return (
        <TaskDescriptionRow>
            <TaskUpperLabelRow>
                <TaskInputLabel>Task description</TaskInputLabel>
                <EditorHTML
                    componentCalling='TaskAddEdit'
                    editorState={descriptionState}
                    setEditorState={setDescriptionState}
                />
            </TaskUpperLabelRow>
            <TaskErrorContainer>
                {error && <ErrorMessage>{error.description}</ErrorMessage>}
            </TaskErrorContainer>
        </TaskDescriptionRow>
    )
}

export default TaskAddDescription

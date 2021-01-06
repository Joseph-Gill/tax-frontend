import React from 'react'
import {NewTaskInputLabel, NewTaskInputRow} from '../styles'
import MemberDropdown from './MemberDropdown'
import DocumentUpload from './DocumentUpload'
import {DocumentUploadAreaText, TaskLowerInputsContainer, TaskLowerLeftContainer, TaskLowerRightContainer} from './styles'


const TaskLowerInputs = ({files, getInputProps, getRootProps, membersOptions, selectedMember, setSelectedMember}) => {
    return (
        <TaskLowerInputsContainer>
            <TaskLowerLeftContainer>
                <NewTaskInputRow>
                    <NewTaskInputLabel>Documents</NewTaskInputLabel>
                    <DocumentUpload
                        getInputProps={getInputProps}
                        getRootProps={getRootProps}
                    />
                </NewTaskInputRow>
                <NewTaskInputRow>
                    <NewTaskInputLabel>Responsibility</NewTaskInputLabel>
                    <MemberDropdown
                        membersOptions={membersOptions}
                        selectedMember={selectedMember}
                        setSelectedMember={setSelectedMember}
                    />
                </NewTaskInputRow>
            </TaskLowerLeftContainer>
            <TaskLowerRightContainer>
                <DocumentUploadAreaText>Documents to Upload</DocumentUploadAreaText>
                {files}
            </TaskLowerRightContainer>
        </TaskLowerInputsContainer>
    )
}

export default TaskLowerInputs

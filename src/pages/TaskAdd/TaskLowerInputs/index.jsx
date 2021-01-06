import React from 'react'
import {NewTaskErrorContainer, NewTaskInputLabel, NewTaskInputRow} from '../styles'
import MemberDropdown from './MemberDropdown'
import DocumentUpload from './DocumentUpload'
import {DocumentUploadAreaText, TaskLowerInputsContainer, TaskLowerLeftContainer, TaskLowerRightContainer} from './styles'
import {ErrorMessage} from '../../../style/messages'


const TaskLowerInputs = ({error, files, getInputProps, getRootProps, membersOptions, selectedMember, setSelectedMember}) => {
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
                <div>
                    <NewTaskInputRow>
                        <NewTaskInputLabel>Responsibility</NewTaskInputLabel>
                        <MemberDropdown
                            membersOptions={membersOptions}
                            selectedMember={selectedMember}
                            setSelectedMember={setSelectedMember}
                        />
                    </NewTaskInputRow>
                    <NewTaskErrorContainer>
                        {error && <ErrorMessage>{error.member}</ErrorMessage>}
                    </NewTaskErrorContainer>
                </div>
            </TaskLowerLeftContainer>
            <TaskLowerRightContainer>
                <DocumentUploadAreaText>Documents to Upload</DocumentUploadAreaText>
                {files}
            </TaskLowerRightContainer>
        </TaskLowerInputsContainer>
    )
}

export default TaskLowerInputs

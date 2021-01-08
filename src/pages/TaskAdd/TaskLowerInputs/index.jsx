import React from 'react'
import {NewTaskErrorContainer} from '../styles'
import MemberDropdown from './MemberDropdown'
import DocumentUpload from './DocumentUpload'
import {DocumentUploadAreaText, TaskLowerInputsContainer, TaskLowerLeftContainer, TaskLowerRightContainer} from './styles'
import {ErrorMessage} from '../../../style/messages'
import {TaskInputRow} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'


const TaskLowerInputs = ({error, files, getInputProps, getRootProps, membersOptions, selectedMember, setSelectedMember}) => {
    return (
        <TaskLowerInputsContainer>
            <TaskLowerLeftContainer>
                <TaskInputRow>
                    <TaskInputLabel>Documents</TaskInputLabel>
                    <DocumentUpload
                        getInputProps={getInputProps}
                        getRootProps={getRootProps}
                    />
                </TaskInputRow>
                <div>
                    <TaskInputRow>
                        <TaskInputLabel>Responsibility</TaskInputLabel>
                        <MemberDropdown
                            membersOptions={membersOptions}
                            selectedMember={selectedMember}
                            setSelectedMember={setSelectedMember}
                        />
                    </TaskInputRow>
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

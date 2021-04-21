import React from 'react'
import DocumentUpload from '../../../components/DocumentUpload'
import MemberResponsibilityDropdown from './MemberResponsibilityDropdown'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {DocumentUploadAreaText} from '../../../style/text'
import {AddTaskDocumentContainer, TaskLowerRightContainer} from './styles'
import {TaskErrorContainer, TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'


const TaskLowerInputs = ({error, files, getInputProps, getRootProps, handleTaskMemberSelectChange, members,
                             selectedMember, setShowTaskMemberSelect, showTaskMemberSelect}) => {
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
                    <MemberResponsibilityDropdown
                        handleTaskMemberSelectChange={handleTaskMemberSelectChange}
                        members={members}
                        selectedMember={selectedMember}
                        setShowTaskMemberSelect={setShowTaskMemberSelect}
                        showTaskMemberSelect={showTaskMemberSelect}
                    />
                    <TaskErrorContainer>
                        {error && <ErrorMessage>{error.member}</ErrorMessage>}
                    </TaskErrorContainer>
                </div>
            </TaskLowerLeftContainer>
            <TaskLowerRightContainer>
                <DocumentUploadAreaText>Documents to Upload</DocumentUploadAreaText>
                <AddTaskDocumentContainer>
                    {files}
                </AddTaskDocumentContainer>
            </TaskLowerRightContainer>
        </TaskLowerInputsContainer>
    )
}

export default TaskLowerInputs

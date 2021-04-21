import React from 'react'
import DocumentUpload from '../../../components/DocumentUpload'
import TaskDocument from '../../../components/TaskDocument'
import MemberResponsibilityDropdown from './MemberResponsibilityDropdown'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {DocumentUploadAreaText} from '../../../style/text'
import {DocumentContainer, TaskErrorContainer, TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'
import {EditTaskExistingDocumentContainer, EditTaskLowerRightContainer} from './styles'


const TaskEditLowerInputs = ({documents, error, files, getInputProps, getRootProps, handleTaskMemberSelectChange,
                                 members, project, selectedMember, setShowTaskMemberSelect, showTaskMemberSelect}) => {
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
            <EditTaskLowerRightContainer>
                <EditTaskExistingDocumentContainer>
                    <DocumentUploadAreaText>Task Documents</DocumentUploadAreaText>
                    <DocumentContainer>
                        {documents.map(document => (
                            <TaskDocument
                                key={document.id}
                                project={project}
                                taskDocument={document}
                            /> ))}
                    </DocumentContainer>
                </EditTaskExistingDocumentContainer>
                <div>
                    <DocumentUploadAreaText>Documents to Upload</DocumentUploadAreaText>
                    <DocumentContainer>
                        {files}
                    </DocumentContainer>
                </div>
            </EditTaskLowerRightContainer>
        </TaskLowerInputsContainer>
    )
}

export default TaskEditLowerInputs

import React from 'react'
import DocumentUpload from '../../../components/DocumentUpload'
import MemberDropdown from '../../../components/MemberDropdown'
import TaskDocument from '../../../components/TaskDocument'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {DocumentUploadAreaText} from '../../../style/text'
import {DocumentContainer, TaskErrorContainer, TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'
import {EditTaskExistingDocumentContainer, EditTaskLowerRightContainer} from './styles'
import MemberResponsibilityDropdown from './MemberResponsibilityDropdown'


const TaskEditLowerInputs = ({documents, error, files, getInputProps, getRootProps, membersOptions, project, selectedMember, setSelectedMember}) => {
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
                        membersOptions={membersOptions}
                        selectedMember={selectedMember}
                        setSelectedMember={setSelectedMember}
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
                                document={document}
                                key={document.id}
                                project={project}
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

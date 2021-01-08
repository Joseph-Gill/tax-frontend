import React from 'react'
import styled from 'styled-components/macro'
import {DocumentContainer, TaskErrorContainer, TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import DocumentUpload from '../../../components/DocumentUpload'
import MemberDropdown from '../../../components/MemberDropdown'
import {ErrorMessage} from '../../../style/messages'
import TaskDocument from '../../../components/TaskDocument'
import {DocumentUploadAreaText} from '../../../style/text'
import {EditTaskExistingDocumentContainer, EditTaskLowerRightContainer} from './styles'


const EditTaskLowerInputs = ({documents, error, files, getInputProps, getRootProps, membersOptions, project, selectedMember, setSelectedMember}) => {
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

export default EditTaskLowerInputs

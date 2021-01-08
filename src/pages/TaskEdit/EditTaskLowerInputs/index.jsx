import React from 'react'
import styled from 'styled-components/macro'
import {TaskErrorContainer, TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import DocumentUpload from '../../../components/DocumentUpload'
import MemberDropdown from '../../../components/MemberDropdown'
import {ErrorMessage} from '../../../style/messages'
import TaskDocument from '../../../components/TaskDocument'
import {DocumentUploadAreaText} from '../../../style/text'


const EditTaskLowerRightContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    margin-left: 10px;
`

const EditTaskExistingDocumentContainer = styled.div`
    width: 116px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`

const EditTaskUploadDocumentContainer = styled.div`

`


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
                    {documents.map(document => (
                        <TaskDocument
                            document={document}
                            key={document.id}
                            project={project}
                        /> ))}
                </EditTaskExistingDocumentContainer>
                <EditTaskUploadDocumentContainer>
                    <DocumentUploadAreaText>Documents to Upload</DocumentUploadAreaText>
                    {files}
                </EditTaskUploadDocumentContainer>
            </EditTaskLowerRightContainer>
        </TaskLowerInputsContainer>
    )
}

export default EditTaskLowerInputs

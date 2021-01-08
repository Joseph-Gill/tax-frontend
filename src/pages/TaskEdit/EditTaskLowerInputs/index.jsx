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
    width: 125px;
    display: flex;
    flex-direction: column;
    margin-right: 20px
`

const DocumentContainer = styled.div`
    max-height: 110px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */

    ::-webkit-scrollbar-track {
        background: ${props => props.theme.grayFive};
    }

    /* Handle */

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */

    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.grayTwo};
    }
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
                    <DocumentContainer>
                        {documents.map(document => (
                            <TaskDocument
                                document={document}
                                key={document.id}
                                project={project}
                            /> ))}
                    </DocumentContainer>
                </EditTaskExistingDocumentContainer>
                <EditTaskUploadDocumentContainer>
                    <DocumentUploadAreaText>Documents to Upload</DocumentUploadAreaText>
                    <DocumentContainer>
                        {files}
                    </DocumentContainer>
                </EditTaskUploadDocumentContainer>
            </EditTaskLowerRightContainer>
        </TaskLowerInputsContainer>
    )
}

export default EditTaskLowerInputs

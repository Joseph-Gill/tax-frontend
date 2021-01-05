import React from 'react'
import styled from 'styled-components/macro'
import {NewTaskInputLabel, NewTaskInputRow} from '../styles'
import MemberDropdown from './MemberDropdown'
import DocumentUpload from './DocumentUpload'
import {DocumentUploadAreaText} from './styles'


const TaskLowerInputsContainer = styled.div`
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TaskLowerLeftContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const TaskLowerRightContainer = styled.div`
    width: 285px;
    height: 130px;
    max-height: 130px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const TaskLowerInputs = ({files, getInputProps, getRootProps, selectedMember, setSelectedMember}) => {
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

import React from 'react'
import styled from 'styled-components/macro'
import {TaskErrorContainer, TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import DocumentUpload from '../../../components/DocumentUpload'
import MemberDropdown from '../../../components/MemberDropdown'
import {ErrorMessage} from '../../../style/messages'


const EditTaskLowerRightContainer = styled.div`
    width: 100%;
    display: flex;
`


const EditTaskLowerInputs = ({error, getInputProps, getRootProps, membersOptions, selectedMember, setSelectedMember}) => {
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

            </EditTaskLowerRightContainer>
        </TaskLowerInputsContainer>
    )
}

export default EditTaskLowerInputs

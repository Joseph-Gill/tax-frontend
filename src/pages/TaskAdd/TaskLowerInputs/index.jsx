import React from 'react'
import MemberDropdown from './MemberDropdown'
import {TaskLowerRightContainer} from './styles'
import {ErrorMessage} from '../../../style/messages'
import {TaskErrorContainer, TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import {DocumentUploadAreaText} from '../../../style/text'
import DocumentUpload from '../../../components/DocumentUpload'


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
                    <TaskErrorContainer>
                        {error && <ErrorMessage>{error.member}</ErrorMessage>}
                    </TaskErrorContainer>
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

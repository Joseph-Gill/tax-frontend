import React from 'react'
import styled from 'styled-components/macro'
import {TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'
import DocumentUpload from '../../../components/DocumentUpload'


const EditTaskLowerInputs = ({getInputProps, getRootProps}) => {
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
            </TaskLowerLeftContainer>
        </TaskLowerInputsContainer>
    )
}

export default EditTaskLowerInputs

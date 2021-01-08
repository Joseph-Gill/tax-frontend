import React from 'react'
import styled from 'styled-components/macro'
import {TaskInputRow, TaskLowerInputsContainer, TaskLowerLeftContainer} from '../../../style/containers'
import {TaskInputLabel} from '../../../style/labels'


const EditTaskLowerInputs = () => {
    return (
        <TaskLowerInputsContainer>
            <TaskLowerLeftContainer>
                <TaskInputRow>
                    <TaskInputLabel>Documents</TaskInputLabel>
                </TaskInputRow>
            </TaskLowerLeftContainer>
        </TaskLowerInputsContainer>
    )
}

export default EditTaskLowerInputs

import React from 'react'
import styled from 'styled-components/macro'
import noTasks from '../../../assets/icons/stark_no_task_found.svg'
import {BaseButton} from '../../../style/buttons'


const NoTaskFoundContainer = styled.div`
    width: 860px;
    height: 546px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 20px;
`

const NoTaskFoundImage = styled.img`
    margin-bottom: 10px;
`

const NoTaskFoundText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
`

const AddNewTaskButton = styled(BaseButton)`
    width: 148px;
    height: 32px;
    margin-top: 10px;
`


const NoTasksFound = () => {
    return (
        <NoTaskFoundContainer>
            <NoTaskFoundImage alt='no tasks found' src={noTasks} />
            <NoTaskFoundText>You haven&apos;t created any tasks for</NoTaskFoundText>
            <NoTaskFoundText>this project.</NoTaskFoundText>
            <AddNewTaskButton>Add New Task</AddNewTaskButton>
        </NoTaskFoundContainer>
    )
}

export default NoTasksFound

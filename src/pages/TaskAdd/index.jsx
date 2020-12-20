import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {ADD_TASK, GROUPS, PROJECTS, TASKS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CancelButton, SaveButton} from '../../style/buttons'


const NewTaskInputsContainer = styled.div`
    width: 860px;
    height: 484px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 30px;
`

const NewTaskCancelSaveButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    button {
        margin-left: 20px;
    }
`


const TaskAdd = () => {
    const project = useSelector(state => state.projectReducer.project)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb
                breadCrumbArray={[
                    {display: 'GROUPS', to: GROUPS, active: false},
                    {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                    {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                    {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                    {display: 'TASKS', to: `${GROUPS}${PROJECTS}${TASKS}`, active: false},
                    {display: 'NEW TASK', to: `${GROUPS}${PROJECTS}${ADD_TASK}`, active: true}
                ]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Add New Task</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <NewTaskInputsContainer>

            </NewTaskInputsContainer>
            <NewTaskCancelSaveButtonContainer>
                <CancelButton>Cancel</CancelButton>
                <SaveButton>Save</SaveButton>
            </NewTaskCancelSaveButtonContainer>
        </AuthenticatedPageContainer>
    )
}

export default TaskAdd

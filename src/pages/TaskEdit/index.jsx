import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {EDIT_TASK, GROUPS, PROJECTS, TASKS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {AuthenticatedPageTitle} from '../../style/titles'


const TaskEdit = ({history}) => {
    const match = useRouteMatch()
    const project = useSelector(state => state.projectReducer.project)
    const task = useSelector(state => state.taskReducer.tasks.filter(task => task.id === match.params.taskId))

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb
                breadCrumbArray={[
                    {display: 'GROUPS', to: GROUPS, active: false},
                    {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                    {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                    {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                    {display: 'TASKS', to: `${GROUPS}${PROJECTS}${TASKS}/${project.id}`, active: false},
                    {display: `EDIT ${task.id}`, to: `${GROUPS}${PROJECTS}${TASKS}${EDIT_TASK}/${task.id}`, active: true}
                ]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Edit Task</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
        </AuthenticatedPageContainer>
    )
}

export default TaskEdit

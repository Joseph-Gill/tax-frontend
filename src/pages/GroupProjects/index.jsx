import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, DisplayGroupTitleContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import {ADD_PROJECT, GROUPS, PROJECTS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {BaseButton} from '../../style/buttons'

export const AddProjectButton = styled(BaseButton)`
    width: 168px;
    height: 32px;
`

const GroupProjects = () => {
    const group = useSelector(state => state.groupReducer.group)
    const projects = useSelector(state => state.groupReducer.group.projects)
    const history = useHistory()

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display:'GROUPS', to:GROUPS},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`},
                {display: 'PROJECTS', to:`${GROUPS}${PROJECTS}`}]}
            />
            <DisplayGroupTitleContainer>
                <AuthenticatedPageTitle>Projects</AuthenticatedPageTitle>
                <AddProjectButton onClick={() => history.push(`${GROUPS}${PROJECTS}${ADD_PROJECT}`)}>Add New Project</AddProjectButton>
            </DisplayGroupTitleContainer>
        </AuthenticatedPageContainer>
    )
}

export default GroupProjects

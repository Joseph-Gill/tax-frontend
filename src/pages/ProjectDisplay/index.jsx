import React, {useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'
import styled from 'styled-components/macro'
import {useDispatch, useSelector} from 'react-redux'
import {AddEditProjectDescriptionContainer, AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import Spinner from '../../components/Spinner'
import {GROUPS, PROJECTS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {EditGroupButton} from '../GroupDisplay/styling'
import {getProjectAction} from '../../store/project/actions'
import {AuthenticatedText} from '../../style/text'
import {ProjectDisplayInfoBox, ProjectDisplayInfoBoxesContainer, ViewItemLink, ViewItemLinkContainer} from './styles'
import StatusCard from './StatusCard'
import MembersCard from './MembersCard'
import rightArrow from '../../assets/icons/stark_right_facing_arrow.svg'
import TasksCard from './TasksCard'
import StepsCard from './StepsCard'


const ProjectDisplayDescriptionContainer = styled(AddEditProjectDescriptionContainer)`
    justify-content: flex-start;
`

const ProjectDisplayDescriptionText = styled(AuthenticatedText)`
    margin-top: 10px;
`

const ProjectDisplay = () => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const project = useSelector(state => state.projectReducer.project)
    const loaded = useSelector(state => state.projectReducer.loaded)

    useEffect(() => {
        dispatch(getProjectAction(match.params.projectId))
    }, [dispatch, match.params.projectId])

    return(
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb
                        breadCrumbArray={[
                            {display: 'GROUPS', to: GROUPS, active: false},
                            {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                            {display: 'PROJECTS', to:`${GROUPS}${PROJECTS}`, active: false},
                            {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: true}
                        ]}
                    />
                    <DisplayTitleWithButtonContainer>
                        <AuthenticatedPageTitle>Project - {project.name}</AuthenticatedPageTitle>
                        <EditGroupButton>Edit Project</EditGroupButton>
                    </DisplayTitleWithButtonContainer>
                    <ProjectDisplayDescriptionContainer>
                        <AddEditProjectSectionTitles>Project Description</AddEditProjectSectionTitles>
                        <ProjectDisplayDescriptionText>{project.description}</ProjectDisplayDescriptionText>
                    </ProjectDisplayDescriptionContainer>
                    <ProjectDisplayInfoBoxesContainer>
                        <StepsCard steps={project.steps} />
                        <TasksCard steps={project.steps} />
                        <MembersCard members={project.assigned_users_roles} />
                        <StatusCard status={project.status} />
                    </ProjectDisplayInfoBoxesContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectDisplay

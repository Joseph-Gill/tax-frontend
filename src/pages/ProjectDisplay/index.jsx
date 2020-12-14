import React, {useEffect} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Spinner from '../../components/Spinner'
import BreadCrumb from '../../components/BreadCrumb'
import StatusCard from './StatusCard'
import MembersCard from './MembersCard'
import TasksCard from './TasksCard'
import StepsCard from './StepsCard'
import {getProjectAction} from '../../store/project/actions'
import {getGroupAction} from '../../store/group/actions'
import {GROUPS, PROJECTS} from '../../routes/paths'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {EditGroupButton} from '../GroupDisplay/styling'
import {ProjectDisplayDescriptionContainer, ProjectDisplayDescriptionText, ProjectDisplayInfoBoxesContainer} from './styles'


const ProjectDisplay = () => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)

    useEffect(() => {
        (async function getProfileGetGroupIfNeeded() {
            const response = await dispatch(getProjectAction(match.params.projectId))
            if (!groupLoaded) {
                dispatch(getGroupAction(response.group.id))
            }
        })();
    }, [dispatch, match.params.projectId, groupLoaded])

    return(
        <AuthenticatedPageContainer>
            {!projectLoaded  ? <Spinner /> : (
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

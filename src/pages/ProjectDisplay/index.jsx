import React, {useEffect, useState} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Spinner from '../../components/Spinner'
import BreadCrumb from '../../components/BreadCrumb'
import StatusCard from './StatusCard'
import MembersCard from './MembersCard'
import TasksCard from './TasksCard'
import StepsCard from './StepsCard'
import {getProjectAction, getProjectStepsStatusesAction, getProjectTasksStatusesAction} from '../../store/project/actions'
import {EDIT_PROJECT, GROUPS, PROJECTS} from '../../routes/paths'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {EditGroupButton} from '../GroupDisplay/styling'
import {ProjectDisplayDescriptionText, ProjectDisplayInfoBoxesContainer, ProjectDisplayTextContainer, ProjectDisplayTitleDescriptionContainer} from './styles'


const ProjectDisplay = ({history}) => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const [stepsStatuses, setStepsStatuses] = useState({})
    const [tasksStatuses, setTasksStatuses] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProfileIfNeededGetStatuses = async () => {
            await dispatch(getProjectAction(match.params.projectId))
            const stepsStatusInfo = await dispatch(getProjectStepsStatusesAction(match.params.projectId))
            if (stepsStatusInfo) {
                setStepsStatuses({...stepsStatusInfo})
            }
            const tasksStatusInfo = await dispatch(getProjectTasksStatusesAction(match.params.projectId))
                setTasksStatuses({...tasksStatusInfo})
        };
        setLoading(true)
        getProfileIfNeededGetStatuses()
            .then(() => setLoading(false))
    }, [dispatch, match.params.projectId])

    return(
        <AuthenticatedPageContainer>
            {!projectLoaded || loading ? <Spinner /> : (
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
                        <EditGroupButton onClick={() => {history.push(`${GROUPS}${PROJECTS}${EDIT_PROJECT}`)}}>Edit Project</EditGroupButton>
                    </DisplayTitleWithButtonContainer>
                    <ProjectDisplayTitleDescriptionContainer>
                        <AddEditProjectSectionTitles>Project Description</AddEditProjectSectionTitles>
                        <ProjectDisplayTextContainer>
                            <ProjectDisplayDescriptionText>{project.description}</ProjectDisplayDescriptionText>
                        </ProjectDisplayTextContainer>
                    </ProjectDisplayTitleDescriptionContainer>
                    <ProjectDisplayInfoBoxesContainer>
                        <StepsCard history={history} project={project} stepsStatuses={stepsStatuses} />
                        <TasksCard history={history} project={project} tasksStatuses={tasksStatuses} />
                        <MembersCard history={history} members={project.assigned_users_roles} />
                        <StatusCard status={project.status} />
                    </ProjectDisplayInfoBoxesContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectDisplay

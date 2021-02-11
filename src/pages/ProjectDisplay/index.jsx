import React, {useEffect, useState} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import LogoLoading from '../../components/LogoLoading'
import BreadCrumb from '../../components/BreadCrumb'
import StatusCard from './StatusCard'
import MembersCard from './MembersCard'
import TasksCard from './TasksCard'
import StepsCard from './StepsCard'
import {setMemberFilterProjectId} from '../../store/member/actions'
import {getGroupOfProjectAction} from '../../store/group/actions'
import {getProjectAction, getProjectStepsStatusesAction, getProjectTasksStatusesAction} from '../../store/project/actions'
import {EDIT_PROJECT, GROUPS, MEMBERS, PROJECTS} from '../../routes/paths'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {EditGroupButton} from '../GroupDisplay/styling'
import {ProjectDisplayDescriptionText, ProjectDisplayInfoBoxesContainer, ProjectDisplayTextContainer, ProjectDisplayTitleDescriptionContainer} from './styles'


const ProjectDisplay = ({history}) => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const project = useSelector(state => state.projectReducer.project)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const [stepsStatuses, setStepsStatuses] = useState({})
    const [tasksStatuses, setTasksStatuses] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProfileIfNeededGetStatuses = async () => {
            //Gets the group for the project in match.params if not loaded due to page refresh
            if (!groupLoaded) {
                await dispatch(getGroupOfProjectAction(match.params.projectId))
            }
            //Gets project matching match.params.projectId
            await dispatch(getProjectAction(match.params.projectId))
            //Gets step status numbers for project matching match.params.projectId for StepsCard
            const stepsStatusInfo = await dispatch(getProjectStepsStatusesAction(match.params.projectId))
            if (stepsStatusInfo) {
                setStepsStatuses({...stepsStatusInfo})
            }
            //Gets task status numbers for project matching match.params.projectId for TasksCard
            const tasksStatusInfo = await dispatch(getProjectTasksStatusesAction(match.params.projectId))
            if (tasksStatusInfo) {
                setTasksStatuses({...tasksStatusInfo})
            }
        };
        getProfileIfNeededGetStatuses()
            .then(() => setLoading(false))
    }, [dispatch, match.params.projectId, groupLoaded])

    //Used by link to GroupMembers page, sets the MembersProject filter to project in match.params
    const setProjectFilterGoToMembersHandler = () => {
        dispatch(setMemberFilterProjectId(match.params.projectId))
        history.push(`${GROUPS}${MEMBERS}`)
    }

    return(
        <AuthenticatedPageContainer>
            {loading ? <LogoLoading /> : (
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
                        <StepsCard
                            history={history}
                            project={project}
                            stepsStatuses={stepsStatuses}
                        />
                        <TasksCard
                            history={history}
                            project={project}
                            tasksStatuses={tasksStatuses}
                        />
                        <MembersCard
                            members={project.assigned_users_roles}
                            setProjectFilterGoToMembersHandler={setProjectFilterGoToMembersHandler}
                        />
                        <StatusCard status={project.status} />
                    </ProjectDisplayInfoBoxesContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default ProjectDisplay

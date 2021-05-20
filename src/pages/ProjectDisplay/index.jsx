import React, {useEffect, useState} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import TasksCard from './TasksCard'
import StepsCard from './StepsCard'
import StatusCard from './StatusCard'
import MembersCard from './MembersCard'
import BreadCrumb from '../../components/BreadCrumb'
import LogoLoading from '../../components/LogoLoading'
import ProjectDisplayButtons from './ProjectDisplayButtons'
import {setMemberFilterProjectId} from '../../store/member/actions'
import {getGroupOfProjectAction} from '../../store/group/actions'
import {getProjectAction, getProjectStepsStatusesAction, getProjectTasksStatusesAction} from '../../store/project/actions'
import {createSanitizedMarkup} from '../../helpers'
import {GROUPS, MEMBERS, PROJECTS} from '../../routes/paths'
import {AddEditProjectSectionTitles, AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {ProjectDisplayInfoBoxesContainer, ProjectDisplayText, ProjectDisplayTitleDescriptionContainer} from './styles'


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
        //Gets the group for the project in match.params if not loaded due to page refresh
        if (!groupLoaded){
            dispatch(getGroupOfProjectAction(match.params.projectId))
        } else {
            getProfileIfNeededGetStatuses()
                .then(() => setLoading(false))
        }
    }, [dispatch, match.params.projectId, groupLoaded])

    //Used by link to GroupMembers page, sets the MembersProject filter to project in match.params
    const setProjectFilterGoToMembersHandler = () => {
        dispatch(setMemberFilterProjectId(match.params.projectId))
        history.push(`${GROUPS}${MEMBERS}`)
    }

    // Used to disable the ability to delete a project if it has any completed steps
    const checkCantBeDeleted = () => !!project.steps.filter(step => step.status === 'Completed').length

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
                        <ProjectDisplayButtons
                            checkCantBeDeleted={checkCantBeDeleted()}
                            history={history}
                        />
                    </DisplayTitleWithButtonContainer>
                    <ProjectDisplayTitleDescriptionContainer>
                        <AddEditProjectSectionTitles>Project Description</AddEditProjectSectionTitles>
                        <ProjectDisplayText dangerouslySetInnerHTML={createSanitizedMarkup(project.description)} />
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

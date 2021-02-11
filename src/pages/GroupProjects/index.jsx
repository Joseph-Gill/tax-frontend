import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import ProjectCard from './ProjectCard'
import NoContent from '../../components/NoContent'
import LogoLoading from '../../components/LogoLoading'
import {resetProject} from '../../store/project/actions'
import {resetSteps} from '../../store/step/actions'
import {resetStepTaxConsequences} from '../../store/taxConsequence/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {resetTaskFilterStepNumber, resetTasks} from '../../store/task/actions'
import {ADD_PROJECT, GROUPS, HOME, PROJECTS} from '../../routes/paths'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AddProjectButton, ProjectCardListContainer} from './styles'


const GroupProjects = ({history}) => {
    const dispatch = useDispatch()
    const group = useSelector(state => state.groupReducer.group)
    const projects = useSelector(state => state.groupReducer.group.projects)
    const loaded = useSelector(state => state.groupReducer.loaded)

    useEffect(() => {
        //Resets error in redux state
        dispatch(resetErrors())
        //Resets project in redux state
        dispatch(resetProject())
        //Resets project steps in redux state
        dispatch(resetSteps())
        //Resets step tax consequence in redux state
        dispatch(resetStepTaxConsequences())
        //Resets step tasks in redux state
        dispatch(resetTasks())
        //Resets step number for task filter in redux state
        dispatch(resetTaskFilterStepNumber())
        //If chosen group is not in redux state due to reload, push Home to prevent crash
        if (!loaded) {
            history.push(`${HOME}`)
        }
    }, [dispatch, loaded, history])

    //Used to set the display order of projects, Ongoing/NotStarted first, Completed second, NotImplemented last
    const setProjectCardDisplayOrder = () => {
        let onGoingNotStarted = []
        let completed = []
        let notImplemented = []

        projects.forEach(project => {
            if (project.status === "Ongoing" || project.status === "Not Started") {
                onGoingNotStarted.push(project)
            } else if (project.status === "Completed") {
                completed.push(project)
            } else {
                notImplemented.push(project)
            }
        })
        return onGoingNotStarted.concat(completed.concat(notImplemented))
    }

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <LogoLoading /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                        {display: 'PROJECTS', to:`${GROUPS}${PROJECTS}`, active: true}]}
                    />
                    <DisplayTitleWithButtonContainer>
                        <AuthenticatedPageTitle>Projects</AuthenticatedPageTitle>
                        <AddProjectButton onClick={() => history.push(`${GROUPS}${PROJECTS}${ADD_PROJECT}`)}>Add New Project</AddProjectButton>
                    </DisplayTitleWithButtonContainer>
                    {!projects.length ?
                        <NoContent buttonText='Create Project' redirect={`${GROUPS}${PROJECTS}${ADD_PROJECT}`} text='Your group does not have any projects yet.' /> : (
                            <ProjectCardListContainer>
                                {projects.length ? setProjectCardDisplayOrder(projects).map(project => <ProjectCard history={history} key={project.id} project={project} />) : null}
                            </ProjectCardListContainer>)}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default GroupProjects

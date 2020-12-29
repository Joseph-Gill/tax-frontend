import React, {useEffect} from 'react'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import {ADD_PROJECT, GROUPS, PROJECTS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import ProjectCard from './ProjectCard'
import {AddProjectButton, ProjectCardListContainer} from './styles'
import NoContent from '../../components/NoContent'
import {resetProject} from '../../store/project/actions'
import {resetSteps} from '../../store/step/actions'
import {resetStepTaxConsequences} from '../../store/taxConsequence/actions'


const GroupProjects = ({history}) => {
    const group = useSelector(state => state.groupReducer.group)
    const projects = useSelector(state => state.groupReducer.group.projects)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetProject())
        dispatch(resetSteps())
        dispatch(resetStepTaxConsequences())
    }, [dispatch])

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
        </AuthenticatedPageContainer>
    )
}

export default GroupProjects

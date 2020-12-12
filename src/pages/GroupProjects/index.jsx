import React from 'react'
import {useHistory} from 'react-router-dom'
import {AuthenticatedPageContainer, DisplayGroupTitleContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import {ADD_PROJECT, GROUPS, PROJECTS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import ProjectCard from './ProjectCard'
import {AddProjectButton, ProjectCardListContainer} from './styles'


const GroupProjects = () => {
    const group = useSelector(state => state.groupReducer.group)
    const projects = useSelector(state => state.groupReducer.group.projects)
    const history = useHistory()

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
            <DisplayGroupTitleContainer>
                <AuthenticatedPageTitle>Projects</AuthenticatedPageTitle>
                <AddProjectButton onClick={() => history.push(`${GROUPS}${PROJECTS}${ADD_PROJECT}`)}>Add New Project</AddProjectButton>
            </DisplayGroupTitleContainer>
            <ProjectCardListContainer>
                {projects.length ? setProjectCardDisplayOrder(projects).map(project => <ProjectCard key={project.id} project={project} />) : null}
            </ProjectCardListContainer>
        </AuthenticatedPageContainer>
    )
}

export default GroupProjects

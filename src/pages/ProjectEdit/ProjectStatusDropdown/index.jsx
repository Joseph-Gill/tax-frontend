import React from 'react'
import CompleteProjectTooltip from '../../../components/Tooltips/CompleteProjectTooltip'
import CompletedProjectTooltip from '../../../components/Tooltips/CompletedProjectTooltip'
import OngoingProjectTooltip from '../../../components/Tooltips/OngoingProjectTooltip'
import ProjectAddEditStatusDropdown from '../../../components/Dropdowns/ProjectAddEditStatusDropdown'
import {checkIfProjectCanBeCompleted, checkIfProjectCanBeOngoing} from '../../../helpers'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {ErrorMessage} from '../../../style/messages'
import {ProjectEditErrorContainer} from '../styles'
import {ProjectAddEditInputTooltipContainer, ProjectAddEditStatusInputContainer} from '../../../style/containers'


const ProjectStatusDropdown = ({error, group, handleSelectProjectStatusChange, project, projectStatus, setShowProjectStatus,
                                   showProjectStatus, steps}) => {

    const projectCantBeOngoing = checkIfProjectCanBeOngoing(group.projects, project.id)
    const projectCantBeCompleted = checkIfProjectCanBeCompleted(steps)

    return (
        <ProjectAddEditInputTooltipContainer>
            <ProjectAddEditStatusInputContainer>
                <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
                <ProjectAddEditStatusDropdown
                    disabled={project.status === 'Completed'}
                    editProject
                    handleSelectProjectStatusChange={handleSelectProjectStatusChange}
                    projectCantBeCompleted={projectCantBeCompleted}
                    projectCantBeOngoing={projectCantBeOngoing}
                    projectStatus={projectStatus}
                    setShowProjectStatus={setShowProjectStatus}
                    showProjectStatus={showProjectStatus}
                />
                <ProjectEditErrorContainer>
                    {error && <ErrorMessage>{error.status}</ErrorMessage>}
                </ProjectEditErrorContainer>
            </ProjectAddEditStatusInputContainer>
            {project.status === 'Completed' ? <CompletedProjectTooltip /> : (
                <>
                    {projectCantBeCompleted && <CompleteProjectTooltip />}
                    {projectCantBeOngoing && <OngoingProjectTooltip />}
                </>
            )}
        </ProjectAddEditInputTooltipContainer>
    )
}

export default ProjectStatusDropdown

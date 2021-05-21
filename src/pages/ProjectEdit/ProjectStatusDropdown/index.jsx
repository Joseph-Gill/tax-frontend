import React from 'react'
import OngoingProjectTooltip from '../../../components/Tooltips/OngoingProjectTooltip'
import ProjectAddEditStatusDropdown from '../../../components/Dropdowns/ProjectAddEditStatusDropdown'
import {checkIfProjectCanBeOngoing} from '../../../helpers'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {ErrorMessage} from '../../../style/messages'
import {ProjectEditErrorContainer} from '../styles'
import {ProjectAddEditInputTooltipContainer, ProjectAddEditStatusInputContainer} from '../../../style/containers'


const ProjectStatusDropdown = ({error, group, handleSelectProjectStatusChange, project, projectStatus, setShowProjectStatus,
                                   showProjectStatus}) => {

    const projectCantBeOngoing = checkIfProjectCanBeOngoing(group.projects, project.id)

    return (
        <ProjectAddEditInputTooltipContainer>
            <ProjectAddEditStatusInputContainer>
                <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
                <ProjectAddEditStatusDropdown
                    disabled={project.status === 'Completed'}
                    editProject
                    handleSelectProjectStatusChange={handleSelectProjectStatusChange}
                    projectCantBeOngoing={projectCantBeOngoing}
                    projectStatus={projectStatus}
                    setShowProjectStatus={setShowProjectStatus}
                    showProjectStatus={showProjectStatus}
                />
                <ProjectEditErrorContainer>
                    {error && <ErrorMessage>{error.status}</ErrorMessage>}
                </ProjectEditErrorContainer>
            </ProjectAddEditStatusInputContainer>
            {projectCantBeOngoing && <OngoingProjectTooltip />}
        </ProjectAddEditInputTooltipContainer>
    )
}

export default ProjectStatusDropdown

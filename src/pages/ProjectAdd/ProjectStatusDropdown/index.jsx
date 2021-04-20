import React from 'react'
import OngoingProjectTooltip from '../../../components/Tooltips/OngoingProjectTooltip'
import ProjectAddEditStatusDropdown from '../../../components/Dropdowns/ProjectAddEditStatusDropdown'
import {ErrorMessage} from '../../../style/messages'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {ProjectAddEditInputTooltipContainer, ProjectAddEditStatusInputContainer} from '../../../style/containers'
import {ProjectEditErrorContainer} from '../../ProjectEdit/styles'


const ProjectStatusDropdown = ({error, group, handleSelectProjectStatusChange, projectStatus, setShowProjectStatus,
                                   showProjectStatus}) => {

    const projectCantBeOngoing = !!group.projects.filter(project => project.status === 'Ongoing').length

    return (
        <ProjectAddEditInputTooltipContainer>
            <ProjectAddEditStatusInputContainer>
                <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
                <ProjectAddEditStatusDropdown
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

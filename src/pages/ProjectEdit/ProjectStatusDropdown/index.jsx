import React from 'react'
import CompleteProjectTooltip from '../../../components/Tooltips/CompleteProjectTooltip'
import CompletedProjectTooltip from '../../../components/Tooltips/CompletedProjectTooltip'
import OngoingProjectTooltip from '../../../components/Tooltips/OngoingProjectTooltip'
import {checkIfProjectCanBeCompleted, checkIfProjectCanBeOngoing} from '../../../helpers'
import {DropdownOption} from '../../../style/options'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {EditStatusDropdown, ProjectEditInputTooltipContainer, ProjectEditStatusInputContainer} from './styles'


const ProjectStatusDropdown = ({group, project, status, steps}) => {
    const canBeOngoing = checkIfProjectCanBeOngoing(group.projects)
    const canBeCompleted = checkIfProjectCanBeCompleted(steps)

    return (
        <ProjectEditInputTooltipContainer>
            <ProjectEditStatusInputContainer>
                <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
                <EditStatusDropdown
                    defaultValue={project.status}
                    disabled={project.status === 'Completed'}
                    ref={status}
                >
                    <DropdownOption disabled value=''>Select a status</DropdownOption>
                    <DropdownOption value='Not Started'>Not Started</DropdownOption>
                    <DropdownOption value='Not Implemented'>Not Implemented</DropdownOption>
                    <DropdownOption
                        disabled={canBeOngoing}
                        value='Ongoing'
                    >Ongoing
                    </DropdownOption>
                    <DropdownOption
                        disabled={canBeCompleted}
                        value='Completed'
                    >Completed
                    </DropdownOption>
                </EditStatusDropdown>
            </ProjectEditStatusInputContainer>
            {canBeCompleted ? <CompleteProjectTooltip /> : null}
            {canBeOngoing ? <OngoingProjectTooltip /> : null}
            {project.status === 'Completed' && <CompletedProjectTooltip />}
        </ProjectEditInputTooltipContainer>
    )
}

export default ProjectStatusDropdown

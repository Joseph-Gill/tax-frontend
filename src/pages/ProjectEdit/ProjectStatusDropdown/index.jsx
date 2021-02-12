import React from 'react'
import CompleteProjectTooltip from '../../../components/CompleteProjectTooltip'
import {checkIfProjectCanBeCompleted} from '../../../helpers'
import {DropdownOption} from '../../../style/options'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {EditStatusDropdown, ProjectEditInputTooltipContainer, ProjectEditStatusInputContainer} from './styles'


const ProjectStatusDropdown = ({project, status, steps}) => {
    return (
        <ProjectEditInputTooltipContainer>
            <ProjectEditStatusInputContainer>
                <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
                <EditStatusDropdown defaultValue={project.status} ref={status}>
                    <DropdownOption disabled value=''>Select a status</DropdownOption>
                    <DropdownOption value='Not Started'>Not Started</DropdownOption>
                    <DropdownOption value='Ongoing'>Ongoing</DropdownOption>
                    <DropdownOption value='Not Implemented'>Not Implemented</DropdownOption>
                    <DropdownOption
                        disabled={checkIfProjectCanBeCompleted(steps)}
                        value='Completed'
                    >Completed
                    </DropdownOption>
                </EditStatusDropdown>
            </ProjectEditStatusInputContainer>
            {checkIfProjectCanBeCompleted(steps) ? <CompleteProjectTooltip /> : null}
        </ProjectEditInputTooltipContainer>
    )
}

export default ProjectStatusDropdown

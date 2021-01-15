import React from 'react'
import {DropdownOption} from '../../../style/options'
import {StatusDropdown} from '../../../style/dropdowns'


const ProjectStatusDropdown = ({project, status}) => {
    return (
        <StatusDropdown defaultValue={project.status} ref={status}>
            <DropdownOption disabled value=''>Select a status</DropdownOption>
            <DropdownOption value='Not Started'>Not Started</DropdownOption>
            <DropdownOption value='Ongoing'>Ongoing</DropdownOption>
            <DropdownOption value='Not Implemented'>Not Implemented</DropdownOption>
            <DropdownOption value='Completed'>Completed</DropdownOption>
        </StatusDropdown>
    )
}

export default ProjectStatusDropdown

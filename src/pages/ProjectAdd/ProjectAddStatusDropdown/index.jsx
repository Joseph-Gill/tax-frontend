import React from 'react'
import {DropdownOption} from '../../../style/options'
import {AddStatusDropdown} from './styles'


const ProjectAddStatusDropdown = ({status}) => {
    return (
        <AddStatusDropdown
            ref={status}
        >
            <DropdownOption value='Not Started'>Not Started</DropdownOption>
        </AddStatusDropdown>
    )
}

export default ProjectAddStatusDropdown

import React from 'react'
import {DropdownOption} from '../../../style/options'
import {StepFilterInputLabel} from '../../../style/labels'
import {MemberProjectFilterSelect} from './styles'



const ProjectFilterDropdown = ({filterProjectId, projectFilterChangeHandler, renderProjectFilterOptions}) => {
    return (
        <div>
            <StepFilterInputLabel>Project Access Filter</StepFilterInputLabel>
            <MemberProjectFilterSelect
                onChange={(e) => projectFilterChangeHandler(e.target.value)}
                value={filterProjectId}
            >
                <DropdownOption value=''>None</DropdownOption>
                {renderProjectFilterOptions()}
            </MemberProjectFilterSelect>
        </div>
    )
}

export default ProjectFilterDropdown

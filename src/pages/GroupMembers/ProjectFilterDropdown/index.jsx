import React from 'react'
import styled from 'styled-components/macro'
import {TaskStepFilterSelect} from '../../../style/dropdowns'
import {DropdownOption} from '../../../style/options'
import {StepFilterInputLabel} from '../../../style/labels'


const MemberProjectFilterSelect = styled(TaskStepFilterSelect)`
    width: 170px;
`


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

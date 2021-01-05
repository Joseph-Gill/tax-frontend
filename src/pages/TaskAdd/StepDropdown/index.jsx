import React from 'react'
import styled from 'styled-components/macro'
import {StatusDropdown} from '../../../style/dropdowns'
import {DropdownOption} from '../../../style/options'


const NewTaskStepSelector = styled(StatusDropdown)`
    margin-left: 125px;
`


const StepDropdown = ({selectedStep, setSelectedStep, stepOptions}) => {
    return (
        <NewTaskStepSelector
            onChange={(e) => setSelectedStep(e.target.value)}
            value={selectedStep}
        >
            <DropdownOption disabled value=''>Select a step</DropdownOption>
            {stepOptions}
        </NewTaskStepSelector>
    )
}

export default StepDropdown

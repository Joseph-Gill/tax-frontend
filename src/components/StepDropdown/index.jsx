import React from 'react'
import {DropdownOption} from '../../style/options'
import {TaskStepSelector} from './styles'


const StepDropdown = ({selectedStep, setSelectedStep, stepOptions}) => {
    return (
        <TaskStepSelector
            onChange={(e) => setSelectedStep(e.target.value)}
            value={selectedStep}
        >
            <DropdownOption disabled value=''>Select a step</DropdownOption>
            {stepOptions}
        </TaskStepSelector>
    )
}

export default StepDropdown

import React from 'react'
import StepDropdown from '../../../components/StepDropdown'
import {createTaskStepSelectOptions} from '../../../helpers'
import {ErrorMessage} from '../../../style/messages'
import {TaskInputLabel} from '../../../style/labels'
import {TaskErrorContainer, TaskInputRow} from '../../../style/containers'


const TaskAddStep = ({error, selectedStep, setSelectedStep, steps}) => {
    return (
        <div>
            <TaskInputRow>
                <TaskInputLabel>Assign a step</TaskInputLabel>
                <StepDropdown
                    selectedStep={selectedStep}
                    setSelectedStep={setSelectedStep}
                    stepOptions={createTaskStepSelectOptions(steps)}
                />
            </TaskInputRow>
            <TaskErrorContainer>
                {error && <ErrorMessage>{error.step}</ErrorMessage>}
            </TaskErrorContainer>
        </div>
    )
}

export default TaskAddStep

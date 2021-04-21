import React from 'react'
import StepDropdown from '../../../components/StepDropdown'
import {createTaskStepSelectOptions} from '../../../helpers'
import {ErrorMessage} from '../../../style/messages'
import {TaskInputLabel} from '../../../style/labels'
import {TaskErrorContainer, TaskInputRow} from '../../../style/containers'
import {TaskAddErrorInputRow} from '../styles'


const TaskAddStep = ({error, selectedStep, setSelectedStep, steps}) => {
    return (
        <TaskAddErrorInputRow>
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
        </TaskAddErrorInputRow>
    )
}

export default TaskAddStep

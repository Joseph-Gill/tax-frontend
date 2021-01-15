import React from 'react'
import StepDropdown from '../../../components/StepDropdown'
import {createTaskStepSelectOptions} from '../../../helpers'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {TaskErrorContainer, TaskInputRow} from '../../../style/containers'


const TaskEditStep = ({error, selectedStep, setSelectedStep, steps}) => {
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

export default TaskEditStep

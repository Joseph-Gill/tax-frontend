import React from 'react'
import TaskAddEditStepDropdown from '../../../components/Dropdowns/TaskAddEditStepDropdown'
import {ErrorMessage} from '../../../style/messages'
import {TaskInputLabel} from '../../../style/labels'
import {TaskErrorContainer, TaskInputRow} from '../../../style/containers'
import {TaskAddErrorInputRow} from '../styles'


const TaskAddStep = ({error, handleTaskStepSelectChange, selectedStep, steps, setShowTaskStepSelect,
                         showTaskStepSelect}) => {

    return (
        <TaskAddErrorInputRow>
            <TaskInputRow>
                <TaskInputLabel>Assign a step</TaskInputLabel>
                <TaskAddEditStepDropdown
                    handleTaskStepSelectChange={handleTaskStepSelectChange}
                    selectedStep={selectedStep}
                    setShowTaskStepSelect={setShowTaskStepSelect}
                    showTaskStepSelect={showTaskStepSelect}
                    steps={steps}
                />
            </TaskInputRow>
            <TaskErrorContainer>
                {error && <ErrorMessage>{error.step}</ErrorMessage>}
            </TaskErrorContainer>
        </TaskAddErrorInputRow>
    )
}

export default TaskAddStep

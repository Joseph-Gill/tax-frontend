import React from 'react'
import TaskAddEditStepDropdown from '../../../components/Dropdowns/TaskAddEditStepDropdown'
import {TaskInputLabel} from '../../../style/labels'
import {ErrorMessage} from '../../../style/messages'
import {TaskErrorContainer, TaskInputRow} from '../../../style/containers'


const TaskEditStep = ({error, handleTaskStepSelectChange, selectedStep, steps, setShowTaskStepSelect,
                         showTaskStepSelect}) => {
    return (
        <div>
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
        </div>
    )
}

export default TaskEditStep

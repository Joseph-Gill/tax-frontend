import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {createTaskStepsChoices, getEntityFromId} from '../../../helpers'
import {TaskStepDropdownButton, TaskStepDropdownContentContainer} from './styles'


const TaskAddEditStepDropdown = ({handleTaskStepSelectChange, selectedStep, setShowTaskStepSelect,
                                     showTaskStepSelect, steps}) => {

    return (
        <DropdownInternalContainer
            setDropdownView={setShowTaskStepSelect}
            showDropdownView={showTaskStepSelect}
        >
            <TaskStepDropdownButton
                onClick={() => setShowTaskStepSelect(!showTaskStepSelect)}
            >
                {!selectedStep ? 'Select a step' : `Step #${getEntityFromId(selectedStep, steps).number}`}
            </TaskStepDropdownButton>
            <TaskStepDropdownContentContainer show={showTaskStepSelect ? 1 : 0}>
                {createTaskStepsChoices(steps, handleTaskStepSelectChange)}
            </TaskStepDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default TaskAddEditStepDropdown

import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {createTaskStepsChoices, getEntityFromId} from '../../../helpers'
import {CustomDropdownContentContainer} from '../../Modals/styles'
import {TaskStepDropdownButton} from './styles'


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
            <CustomDropdownContentContainer show={showTaskStepSelect ? 1 : 0}>
                {createTaskStepsChoices(steps, handleTaskStepSelectChange)}
            </CustomDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default TaskAddEditStepDropdown

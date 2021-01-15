import React from 'react'
import {DropdownOption} from '../../../style/options'
import {TaskStepFilterSelect} from './styles'


const TaskStepFilter = ({filterStepNumber, renderTaskStepFilterOptions, taskStepFilterChangeHandler}) => {
    return (
        <TaskStepFilterSelect
            onChange={(e) => taskStepFilterChangeHandler(e.target.value)}
            value={filterStepNumber}
        >
            <DropdownOption value=''>All</DropdownOption>
            {renderTaskStepFilterOptions()}
        </TaskStepFilterSelect>
    )
}

export default TaskStepFilter

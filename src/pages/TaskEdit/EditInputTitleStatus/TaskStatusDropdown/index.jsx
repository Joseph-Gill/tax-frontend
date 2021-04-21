import React from 'react'
import DropdownInternalContainer from '../../../../components/Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ModalDropdownContent} from '../../../../components/Dropdowns/styles'
import {TaskStatusDropdownButton, TaskStatusDropdownContentContainer} from './styles'


const TaskStatusDropdown = ({handleTaskStatusSelectChange, setShowTaskStatusSelect,
                                showTaskStatusSelect, taskStatus}) => {

    return (
        <DropdownInternalContainer
            setDropdownView={setShowTaskStatusSelect}
            showDropdownView={showTaskStatusSelect}
        >
            <TaskStatusDropdownButton
                onClick={() => setShowTaskStatusSelect(!showTaskStatusSelect)}
            >
                {!taskStatus ? 'Select a status' : taskStatus}
            </TaskStatusDropdownButton>
            <TaskStatusDropdownContentContainer show={showTaskStatusSelect ? 1 : 0}>
                <ModalDropdownContent
                    onClick={() => handleTaskStatusSelectChange('Not Started')}
                >
                    <span>Not Started</span>
                </ModalDropdownContent>
                <ModalDropdownContent
                    onClick={() => handleTaskStatusSelectChange('Ongoing')}
                >
                    <span>Ongoing</span>
                </ModalDropdownContent>
                <ModalDropdownContent
                    onClick={() => handleTaskStatusSelectChange('Planned')}
                >
                    <span>Planned</span>
                </ModalDropdownContent>
                <ModalDropdownContent
                    onClick={() => handleTaskStatusSelectChange('Completed')}
                >
                    <span>Completed</span>
                </ModalDropdownContent>
            </TaskStatusDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default TaskStatusDropdown

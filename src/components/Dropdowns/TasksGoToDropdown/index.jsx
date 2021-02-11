import React from 'react'
import GoToButton from '../DropdownComponents/GoToButton'
import GoToImage from '../DropdownComponents/GoToImage'
import {ADD_TASK, GROUPS, PROJECTS, STEPS} from '../../../routes/paths'
import {DropdownContainer} from '../../../style/dropdowns'
import {DropdownContentText, GoToContentContainer, GoToDropdownContent} from '../styles'


const TasksGoToDropdown = ({history, project, showGoToDropdown, toggleGoToCloseFilterSearch}) => {
    return (
        <DropdownContainer>
            <GoToButton clickHandler={toggleGoToCloseFilterSearch} />
            <GoToContentContainer show={showGoToDropdown ? 1 : 0}>
                <GoToDropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${ADD_TASK}`)}>
                    <DropdownContentText>Add Task</DropdownContentText>
                    <GoToImage />
                </GoToDropdownContent>
                <GoToDropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}/${project.id}/`)}>
                    <DropdownContentText>All Steps</DropdownContentText>
                    <GoToImage />
                </GoToDropdownContent>
            </GoToContentContainer>
        </DropdownContainer>
    )
}

export default TasksGoToDropdown

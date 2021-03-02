import React from 'react'
import GoToButton from '../DropdownComponents/GoToButton'
import GoToImage from '../DropdownComponents/GoToImage'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {ADD_TASK, GROUPS, PROJECTS, STEPS} from '../../../routes/paths'
import {DropdownContentText, GoToContentContainer, GoToDropdownContent} from '../styles'


const TasksGoToDropdown = ({history, project, setShowGoToDropdown, showGoToDropdown, toggleGoToCloseFilterSearch}) => {
    return (
        <DropdownInternalContainer
            setDropdownView={setShowGoToDropdown}
            showDropdownView={showGoToDropdown}
        >
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
        </DropdownInternalContainer>
    )
}

export default TasksGoToDropdown

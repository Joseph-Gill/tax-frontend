import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {createTaskMembersChoices, getMemberInfo} from '../../../helpers'
import {TaskMemberDropdownButton, TaskMemberDropdownContentContainer} from './styles'


const TaskAddEditMemberDropdown = ({handleTaskMemberSelectChange, members, selectedMember,
                                       setShowTaskMemberSelect, showTaskMemberSelect}) => {

    return (
        <DropdownInternalContainer
            setDropdownView={setShowTaskMemberSelect}
            showDropdownView={showTaskMemberSelect}
        >
            <TaskMemberDropdownButton
                onClick={() => setShowTaskMemberSelect(!showTaskMemberSelect)}
            >
                {!selectedMember ? 'Select responsible member' : getMemberInfo(members, selectedMember)}
            </TaskMemberDropdownButton>
            <TaskMemberDropdownContentContainer show={showTaskMemberSelect ? 1 : 0}>
                {createTaskMembersChoices(members, handleTaskMemberSelectChange)}
            </TaskMemberDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default TaskAddEditMemberDropdown

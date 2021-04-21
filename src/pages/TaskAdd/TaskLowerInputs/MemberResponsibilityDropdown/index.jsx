import React from 'react'
import TaskAddEditMemberDropdown from '../../../../components/Dropdowns/TaskAddEditMemberDropdown'
import {TaskInputLabel} from '../../../../style/labels'
import {TaskInputRow} from '../../../../style/containers'


const MemberResponsibilityDropdown = ({members, handleTaskMemberSelectChange, selectedMember,
                                          setShowTaskMemberSelect, showTaskMemberSelect}) => {
    return (
        <TaskInputRow>
            <TaskInputLabel>Responsibility</TaskInputLabel>
            <TaskAddEditMemberDropdown
                handleTaskMemberSelectChange={handleTaskMemberSelectChange}
                members={members}
                selectedMember={selectedMember}
                setShowTaskMemberSelect={setShowTaskMemberSelect}
                showTaskMemberSelect={showTaskMemberSelect}
            />
        </TaskInputRow>
    )
}

export default MemberResponsibilityDropdown

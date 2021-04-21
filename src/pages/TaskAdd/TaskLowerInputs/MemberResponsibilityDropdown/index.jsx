import React from 'react'
import {TaskInputLabel} from '../../../../style/labels'
import {TaskInputRow} from '../../../../style/containers'
import TaskAddEditMemberDropdown from '../../../../components/Dropdowns/TaskAddEditMemberDropdown'


const MemberResponsibilityDropdown = ({members, handleTaskMemberSelectChange, selectedMember,
                                          setShowTaskMemberSelect, showTaskMemberSelect}) => {
    return (
        <TaskInputRow>
            <TaskInputLabel>Responsibility</TaskInputLabel>
            {/*<MemberDropdown*/}
            {/*    membersOptions={membersOptions}*/}
            {/*    selectedMember={selectedMember}*/}
            {/*    setSelectedMember={setSelectedMember}*/}
            {/*/>*/}
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

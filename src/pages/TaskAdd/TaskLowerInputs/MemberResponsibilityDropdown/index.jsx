import React from 'react'
import MemberDropdown from '../../../../components/MemberDropdown'
import {TaskInputLabel} from '../../../../style/labels'
import {TaskInputRow} from '../../../../style/containers'


const MemberResponsibilityDropdown = ({membersOptions, selectedMember, setSelectedMember}) => {
    return (
        <TaskInputRow>
            <TaskInputLabel>Responsibility</TaskInputLabel>
            <MemberDropdown
                membersOptions={membersOptions}
                selectedMember={selectedMember}
                setSelectedMember={setSelectedMember}
            />
        </TaskInputRow>
    )
}

export default MemberResponsibilityDropdown

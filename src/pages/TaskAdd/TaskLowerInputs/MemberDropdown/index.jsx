import React from 'react'
import {DropdownOption} from '../../../../style/options'
import {NewTaskMemberSelector} from './styles'


const MemberDropdown = ({membersOptions, selectedMember, setSelectedMember}) => {
    return (
        <NewTaskMemberSelector
            onChange={(e) => setSelectedMember(e.target.value)}
            value={selectedMember}
        >
            <DropdownOption disabled value=''>Select a member</DropdownOption>
            {membersOptions}
        </NewTaskMemberSelector>
    )
}

export default MemberDropdown

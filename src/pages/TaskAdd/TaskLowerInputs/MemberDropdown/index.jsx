import React from 'react'
import styled from 'styled-components/macro'
import {StatusDropdown} from '../../../../style/dropdowns'
import {DropdownOption} from '../../../../style/options'

const NewTaskMemberSelector = styled(StatusDropdown)`
    margin-left: 124px;
`


const MemberDropdown = ({selectedMember, setSelectedMember}) => {
    return (
        <NewTaskMemberSelector
            onChange={(e) => setSelectedMember(e.target.value)}
            value={selectedMember}
        >
            <DropdownOption disabled value=''>Select a member</DropdownOption>
        </NewTaskMemberSelector>
    )
}

export default MemberDropdown

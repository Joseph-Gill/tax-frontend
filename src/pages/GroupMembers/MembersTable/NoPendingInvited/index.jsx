import React from 'react'
import noMembers from '../../../../assets/icons/stark_no_invited_members.jpg'
import {CardTitleText, NoFilterResultText} from '../../../../style/text'
import {NoFilterTextContainer} from '../../../../style/containers'
import {NoInvitedMembersButton, NoInvitedMembersContainer} from './styles'


const NoPendingInvited = ({setShowAddMember}) => {
    return (
        <NoInvitedMembersContainer>
            <img alt='no members' src={noMembers} />
            <CardTitleText>No pending Invites</CardTitleText>
            <NoFilterTextContainer>
                <NoFilterResultText>You don&apos;t have any pending invites to</NoFilterResultText>
                <NoFilterResultText>your team members.</NoFilterResultText>
            </NoFilterTextContainer>
            <NoInvitedMembersButton onClick={() => setShowAddMember(true)}>Add team member</NoInvitedMembersButton>
        </NoInvitedMembersContainer>
    )
}

export default NoPendingInvited

import React, {useState, useRef} from 'react'
import {AuthenticatedPageContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import {GROUPS, MEMBERS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {ActionFilterDropdownContainer, AddMemberButton, AddMemberButtonContainer, DisplayMembersTitleContainer, GreyStatusText, MembersStatusToggleContainer, WhiteStatusContainer} from './styles'
import ActionDropdown from './ActionDropdown'
import FilterDropdown from './FilterDropdown'
import MembersTable from './MembersTable'


const GroupMembers = () => {
    const group = useSelector(state => state.groupReducer.group)
    const members = useSelector(state => state.groupReducer.group.users)
    const invitedMembers = useSelector(state => state.groupReducer.group.invited_new_users)
    const [filterMemberStatus, setFilterMemberStatus] = useState(true)
    let filterString = useRef('')

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display: 'GROUPS', to: GROUPS, active: false},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                {display: 'TEAM MEMBERS', to:`${GROUPS}${MEMBERS}`, active: true}]}
            />
            <DisplayMembersTitleContainer>
                <AuthenticatedPageTitle>Team Members</AuthenticatedPageTitle>
                <MembersStatusToggleContainer>
                    {filterMemberStatus ? (
                        <><WhiteStatusContainer>Active</WhiteStatusContainer>
                            <GreyStatusText onClick={() => setFilterMemberStatus(!filterMemberStatus)}>Invited</GreyStatusText>
                        </>) : (
                            <>
                                <GreyStatusText onClick={() => setFilterMemberStatus(!filterMemberStatus)}>Active</GreyStatusText>
                                <WhiteStatusContainer>Invited</WhiteStatusContainer>
                            </>)}
                </MembersStatusToggleContainer>
            </DisplayMembersTitleContainer>
            <ActionFilterDropdownContainer>
                <ActionDropdown />
                <FilterDropdown filterString={filterString} />
            </ActionFilterDropdownContainer>
            <MembersTable
                filterMemberStatus={filterMemberStatus}
                group={group}
                invitedMembers={invitedMembers}
                members={members}
            />
            <AddMemberButtonContainer>
                <AddMemberButton>Add team member</AddMemberButton>
            </AddMemberButtonContainer>
        </AuthenticatedPageContainer>
    )
}

export default GroupMembers

import React, {useState, useEffect} from 'react'
import {AuthenticatedPageContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import {GROUPS, MEMBERS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {ActionFilterDropdownContainer, AddMemberButton, AddMemberButtonContainer, DisplayMembersTitleContainer, GreyStatusText, MembersStatusToggleContainer, WhiteStatusContainer} from './styles'
import ActionDropdown from './ActionDropdown'
import FilterDropdown from './FilterDropdown'
import MembersTable from './MembersTable'
import AddMemberModal from '../../components/AddMemberModal'
import {resetMember} from '../../store/member/actions'
import DeleteMemberModal from '../../components/DeleteAccountModal/DeleteMemberModal'


const GroupMembers = ({history}) => {
    const dispatch = useDispatch()
    const group = useSelector(state => state.groupReducer.group)
    const members = useSelector(state => state.groupReducer.group.users)
    const invitedMembers = useSelector(state => state.groupReducer.group.invited_new_users)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [filterMemberStatus, setFilterMemberStatus] = useState(true)
    const [showAddMember, setShowAddMember] = useState(false)
    const [filterString, setFilterString] = useState('')
    const [filterOption, setFilterOption] = useState([
        {isChecked: true, type: 'email'},
        {isChecked: false, type: 'name'},
        {isChecked: false, type: 'organization'},
        {isChecked: false, type: 'project_access'},
        {isChecked: false, type: 'country'},
        {isChecked: false, type: 'project_role'}
    ])

    useEffect(() => {
        dispatch(resetMember())
    }, [dispatch])

    const filteredMembers = members.filter(member =>
        member.user.email.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
    )

    return (
        <AuthenticatedPageContainer>
            {showConfirmation &&
                <DeleteMemberModal
                    history={history}
                    setShowConfirmation={setShowConfirmation}
                />}
            {showAddMember && <AddMemberModal groupId={group.id} setShowAddMember={setShowAddMember} />}
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
                {!filterMemberStatus && !invitedMembers.length ? null : (
                    <>
                        <ActionDropdown
                            setShowConfirmation={setShowConfirmation}
                        />
                        <FilterDropdown
                            filterMemberStraus={filterMemberStatus}
                            filterOption={filterOption}
                            filterString={filterString}
                            setFilterOption={setFilterOption}
                            setFilterString={setFilterString}
                        />
                    </>)}
            </ActionFilterDropdownContainer>
            <MembersTable
                filterMemberStatus={filterMemberStatus}
                group={group}
                history={history}
                invitedMembers={invitedMembers}
                members={filteredMembers}
                setShowAddMember={setShowAddMember}
            />
            <AddMemberButtonContainer>
                {!filterMemberStatus && !invitedMembers.length ? null : (
                    <AddMemberButton onClick={() => setShowAddMember(!showAddMember)}>Add team member</AddMemberButton> )}
            </AddMemberButtonContainer>
        </AuthenticatedPageContainer>
    )
}

export default GroupMembers

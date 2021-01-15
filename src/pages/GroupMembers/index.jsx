import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import FilterDropdown from './FilterDropdown'
import ActionDropdown from './ActionDropdown'
import MembersTable from './MembersTable'
import StatusToggle from './StatusToggle'
import Spinner from '../../components/Spinner'
import RemoveMemberModal from '../../components/Modals/RemoveMemberModal'
import AddMemberModal from '../../components/Modals/AddMemberModal'
import {resetMember} from '../../store/member/actions'
import {GROUPS, HOME, MEMBERS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer} from '../../style/containers'
import {ActionFilterDropdownContainer, AddMemberButton, AddMemberButtonContainer, DisplayMembersTitleContainer} from './styles'


const GroupMembers = ({history}) => {
    const dispatch = useDispatch()
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const members = useSelector(state => state.groupReducer.group.users)
    const invitedMembers = useSelector(state => state.groupReducer.group.invited_new_users)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [filterMemberStatus, setFilterMemberStatus] = useState(false)
    const [activeRenderData, setActiveRenderData] = useState([])
    const [invitedRenderData, setInvitedRenderData] = useState([])
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
        if (!loaded) {
            history.push(`${HOME}`)
        }
    }, [dispatch, history, loaded])

    const resetAllCheckedChangeFilterMemberStatus = () => {
        const activeDataCopy = [...activeRenderData]
        const inviteDataCopy = [...invitedRenderData]
        for (const member of activeDataCopy) {
            member.isChecked = false
        }
        for (const member of inviteDataCopy) {
            member.isChecked = false
        }
        setFilterMemberStatus(!filterMemberStatus)
    }

    const sendEmailClickHandler = () => {
        const result = activeRenderData.filter(user => user.isChecked).concat(invitedRenderData.filter(user => user.isChecked))
        let emailString = 'mailto:'
        let counter = 0
        if (result.length) {
            result.forEach((user, index) => {
                if (!index) {
                    emailString = emailString.concat(`${user.email}?cc=`)
                    counter++
                } else {
                    emailString = emailString.concat(`${user.email}%3B%20`)
                    counter++
                }
            })
            counter === 1 ? window.location = emailString.slice(0, -4) : window.location = emailString.slice(0, -6)
        }
    }


    return (
        <AuthenticatedPageContainer>
            {showConfirmation &&
                <RemoveMemberModal
                    activeMembers={activeRenderData}
                    group={group}
                    history={history}
                    invitedMembers={invitedRenderData}
                    setShowConfirmation={setShowConfirmation}
                />}
            {showAddMember && <AddMemberModal groupId={group.id} setShowAddMember={setShowAddMember} />}
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                        {display: 'TEAM MEMBERS', to:`${GROUPS}${MEMBERS}`, active: true}]}
                    />
                    <DisplayMembersTitleContainer>
                        <AuthenticatedPageTitle>Team Members</AuthenticatedPageTitle>
                        <StatusToggle
                            filterMemberStatus={filterMemberStatus}
                            resetAllCheckedChangeFilterMemberStatus={resetAllCheckedChangeFilterMemberStatus}
                        />
                    </DisplayMembersTitleContainer>
                    <ActionFilterDropdownContainer>
                        {!filterMemberStatus && !invitedMembers.length ? null : (
                            <>
                                <ActionDropdown
                                    sendEmailClickHandler={sendEmailClickHandler}
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
                        activeRenderData={activeRenderData}
                        filterMemberStatus={filterMemberStatus}
                        filterOption={filterOption}
                        filterString={filterString}
                        group={group}
                        history={history}
                        invitedMembers={invitedMembers}
                        invitedRenderData={invitedRenderData}
                        members={members}
                        setActiveRenderData={setActiveRenderData}
                        setInvitedRenderData={setInvitedRenderData}
                        setShowAddMember={setShowAddMember}
                    />
                    <AddMemberButtonContainer>
                        {!filterMemberStatus && !invitedMembers.length ? null : (
                            <AddMemberButton onClick={() => setShowAddMember(!showAddMember)}>Add team member</AddMemberButton> )}
                    </AddMemberButtonContainer>
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default GroupMembers

import React, {useEffect, useState} from 'react'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../style/tables'
import {getMemberOrganizationNameAction} from '../../../store/organization/actions'
import {useDispatch} from 'react-redux'
import Spinner from '../../../components/Spinner'
import headerCheckbox from '../../../assets/icons/stark_checkbox_header.svg'
import {
    ActiveMemberUserContainer,
    ActiveMemberUserText,
    CheckBox,
    GroupMembersTableContainer,
    NewMemberGreenText,
    NewMemberYellowText,
    NoInvitedMembersButton,
    RoleFieldChevron,
    RoleFieldText,
    RoleTextImageContainer,
    TableDataCheckbox
} from './styles'
import noMembers from '../../../assets/icons/stark_no_invited_members.jpg'
import rightChevron from '../../../assets/icons/stark_right_chevron.png'
import {CardTitleText, NoFilterResultText} from '../../../style/text'
import {NoFilterResultsContainer, NoFilterTextContainer} from '../../../style/containers'
import {EDIT_MEMBER, GROUPS, MEMBERS} from '../../../routes/paths'
import {v4 as uuidv4} from 'uuid'


const MembersTable = ({filterMemberStatus, group, history, invitedMembers, members, setShowAddMember}) => {
    const [activeRenderData, setActiveRenderData] = useState([])
    const [invitedRenderData, setInvitedRenderData] = useState([...invitedMembers])
    const [loaded, setLoaded] = useState(false)
    const [allActiveStatus, setAllActiveStatus] = useState(true)
    const [allInvitedStatus, setAllInvitedStatus] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const listActiveWithOrgAndInvited = async () => {
            const activeResult = [];
            const invitedResult = [];
            for (const member of members) {
                const response = await dispatch(getMemberOrganizationNameAction(group.id, member.user.id))
                const project_roles = member.assigned_project_roles.filter(role => role.project.group === group.id)
                const group_projects = group.projects.length
                if (response) {
                    let data = {
                        id: member.id,
                        first_name: member.user.first_name,
                        last_name: member.user.last_name,
                        email: member.user.email,
                        phone_number: member.phone_number,
                        organization: response.name,
                        project_role: project_roles.length ? project_roles[0].role : 'Unassigned',
                        project_access: !group_projects ? 'Group has no Projects' : project_roles.length === group_projects ? 'All' : 'Limited',
                        country: 'N/A',
                        isChecked: false,
                        updated: member.updated
                    }
                    activeResult.push(data)
                } else {
                    let data = {
                        id: member.id,
                        first_name: member.user.first_name,
                        last_name: member.user.last_name,
                        email: member.user.email,
                        phone_number: member.phone_number,
                        organization: 'Unassigned',
                        project_role: project_roles.length ? project_roles[0].role : 'Unassigned',
                        project_access: !group_projects ? 'Group has no Projects' : project_roles.length === group_projects ? 'All' : 'Limited',
                        country: 'N/A',
                        isChecked: false,
                        updated: member.updated
                    }
                    activeResult.push(data)
                }
            }
            for (const member of invitedMembers) {
                let data = {
                    id: member.id,
                    email: member.user.email,
                    code_used: member.code_used,
                    isChecked: false
                }
                invitedResult.push(data)
            }
            activeResult.sort((a, b) => (a.updated > b.updated) ? -1 : ((b.updated > a.updated) ? 1 : 0));
            setActiveRenderData([...activeResult])
            setInvitedRenderData([...invitedResult])
            setLoaded(true)
        }
        listActiveWithOrgAndInvited()
    }, [dispatch, group.id, group.projects.length, members, invitedMembers])

    const activeCheckBoxChangeHandler = (e) => {
        const dataCopy = [...activeRenderData]
        dataCopy[e.target.value].isChecked = !dataCopy[e.target.value].isChecked
        setActiveRenderData([...dataCopy])
    }

    const invitedCheckBoxChangeHandler = (e) => {
        const dataCopy = [...invitedRenderData]
        dataCopy[e.target.value].isChecked = !dataCopy[e.target.value].isChecked
        setInvitedRenderData([...dataCopy])
    }

    const checkAllActiveMembersHandler = () => {
        const dataCopy = [...activeRenderData]
        for (const member of dataCopy) {
            member.isChecked = allActiveStatus
        }
        setActiveRenderData([...dataCopy])
        setAllActiveStatus(!allActiveStatus)
    }

    const checkAllInvitedMembersHandler = () => {
        const dataCopy = [...invitedRenderData]
        for (const member of dataCopy) {
            member.isChecked = allInvitedStatus
        }
        setInvitedRenderData([...dataCopy])
        setAllInvitedStatus(!allInvitedStatus)
    }

    const renderActiveMembers = (array) => {
        return array.map((member, index) => (
            <TableDataRow key={member.id}>
                <TableDataCheckbox>
                    <CheckBox
                        checked={activeRenderData[index].isChecked}
                        onChange={(e) => activeCheckBoxChangeHandler(e)}
                        type='checkbox'
                        value={index}
                    />
                </TableDataCheckbox>
                <TableData>
                    <ActiveMemberUserContainer onClick={() => history.push(`${GROUPS}${MEMBERS}${EDIT_MEMBER}/${member.id}/`)}>
                        <ActiveMemberUserText>{`${member.first_name} ${member.last_name}`}</ActiveMemberUserText>
                        <ActiveMemberUserText>{member.email}</ActiveMemberUserText>
                        <ActiveMemberUserText>{member.phone_number}</ActiveMemberUserText>
                    </ActiveMemberUserContainer>
                </TableData>
                <TableData>{member.organization}</TableData>
                <TableData>{member.project_access}</TableData>
                <TableData>{member.country}</TableData>
                <RoleTextImageContainer>
                    <RoleFieldText>{member.project_role}</RoleFieldText>
                    <RoleFieldChevron
                        alt='edit member'
                        onClick={() => history.push(`${GROUPS}${MEMBERS}${EDIT_MEMBER}/${member.id}/`)}
                        src={rightChevron}
                    />
                </RoleTextImageContainer>
            </TableDataRow>)
        )
    }

    const renderInvitedMembers = (array) => {
        return array.map((member, index) => (
            <TableDataRow key={uuidv4()}>
                <TableDataCheckbox>
                    <CheckBox
                        checked={invitedRenderData[index].isChecked}
                        onChange={(e) => invitedCheckBoxChangeHandler(e)}
                        type='checkbox'
                        value={index}
                    />
                </TableDataCheckbox>
                <TableData>{member.email}</TableData>
                <TableData>N/A</TableData>
                <TableData>N/A</TableData>
                <TableData>N/A</TableData>
                <TableData>{member.code_used ?
                    <NewMemberGreenText>Registered</NewMemberGreenText> :
                    <NewMemberYellowText>Invite Sent</NewMemberYellowText>}
                </TableData>
            </TableDataRow>)
        )
    }


    return (
        <GroupMembersTableContainer>
            {!loaded ? <Spinner /> : (
                <CommentTable>
                    <thead>
                        {filterMemberStatus ? (
                            <TableTitleRow>
                                <TableDataCheckbox>
                                    <img
                                        alt='checkbox'
                                        onClick={checkAllActiveMembersHandler}
                                        src={headerCheckbox}
                                    />
                                </TableDataCheckbox>
                                <TableHeader>User</TableHeader>
                                <TableHeader>Organization</TableHeader>
                                <TableHeader>Projects Access</TableHeader>
                                <TableHeader>Country</TableHeader>
                                <TableHeader>Role</TableHeader>
                            </TableTitleRow>) : invitedMembers.length ? (
                                <TableTitleRow>
                                    <TableDataCheckbox>
                                        <img
                                            alt='checkbox'
                                            onClick={checkAllInvitedMembersHandler}
                                            src={headerCheckbox}
                                        />
                                    </TableDataCheckbox>
                                    <TableHeader>User</TableHeader>
                                    <TableHeader>Organization</TableHeader>
                                    <TableHeader>Projects Access</TableHeader>
                                    <TableHeader>Country</TableHeader>
                                    <TableHeader>Status</TableHeader>
                                </TableTitleRow>) : (
                                    <NoFilterResultsContainer>
                                        <img alt='no members' src={noMembers} />
                                        <CardTitleText>No pending Invites</CardTitleText>
                                        <NoFilterTextContainer>
                                            <NoFilterResultText>You don&apos;t have any pending invites to</NoFilterResultText>
                                            <NoFilterResultText>your team members.</NoFilterResultText>
                                        </NoFilterTextContainer>
                                        <NoInvitedMembersButton onClick={() => setShowAddMember(true)}>Add team member</NoInvitedMembersButton>
                                    </NoFilterResultsContainer>)}
                    </thead>
                    <tbody>
                        {filterMemberStatus ?
                            renderActiveMembers(activeRenderData) :
                            renderInvitedMembers(invitedRenderData)}
                    </tbody>
                </CommentTable>)}
        </GroupMembersTableContainer>
    )
}

export default MembersTable
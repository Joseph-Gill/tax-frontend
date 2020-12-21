import React, {useEffect, useState} from 'react'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../style/tables'
import {getMemberOrganizationNameAction} from '../../../store/organization/actions'
import {useDispatch} from 'react-redux'
import Spinner from '../../../components/Spinner'
import headerCheckbox from '../../../assets/icons/stark_checkbox_header.svg'
import {
    ActiveMemberUserContainer,
    ActiveMemberUserText,
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
import {CheckBox} from '../../../style/inputs'
import {checkBoxChangeHandler} from '../../../helpers'


const MembersTable = ({filterMemberStatus, group, history, filterOption, filterString, invitedMembers, members, setShowAddMember}) => {
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

    const checkAllMembersHandler = (array, setArray, status, setStatus) => {
        const dataCopy = [...array]
        for (const member of dataCopy) {
            member.isChecked = status
        }
        setArray([...dataCopy])
        setStatus(!status)
    }

    const filteredMembers = () => {
        const selectedFilterOption = filterOption.filter(option => option.isChecked)[0]
        switch (selectedFilterOption.type) {
            case 'name':
                return activeRenderData.filter(member => member.first_name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
                    member.last_name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
            default:
                return activeRenderData.filter(member => member[selectedFilterOption.type].toLowerCase().indexOf(filterString.toLowerCase()) !== -1)

        }
    }

    const filteredInviteMembers = () => (
        invitedRenderData.filter(member => member.email.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
    )

    const renderActiveMembers = (array) => {
        return array.map((member, index) => (
            <TableDataRow key={member.id}>
                <TableDataCheckbox>
                    <CheckBox
                        checked={activeRenderData[index].isChecked}
                        onChange={(e) => checkBoxChangeHandler(e, activeRenderData, setActiveRenderData)}
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
                        onChange={(e) => checkBoxChangeHandler(e, invitedRenderData, setInvitedRenderData)}
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
                                        onClick={() => checkAllMembersHandler(activeRenderData, setActiveRenderData, allActiveStatus, setAllActiveStatus)}
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
                                            onClick={() => checkAllMembersHandler(invitedRenderData, setInvitedRenderData, allInvitedStatus, setAllInvitedStatus)}
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
                            renderActiveMembers(filteredMembers()) :
                            renderInvitedMembers(filteredInviteMembers())}
                    </tbody>
                </CommentTable>)}
        </GroupMembersTableContainer>
    )
}

export default MembersTable

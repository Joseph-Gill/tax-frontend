import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import NoPendingInvited from './NoPendingInvited'
import Loading from '../../../components/Loading'
import {getMemberOrganizationNameAction} from '../../../store/organization/actions'
import {checkBoxChangeHandler} from '../../../helpers'
import {EDIT_MEMBER, GROUPS, MEMBERS} from '../../../routes/paths'
import headerCheckbox from '../../../assets/icons/stark_checkbox_header.svg'
import rightChevron from '../../../assets/icons/stark_right_chevron.png'
import {CheckBox} from '../../../style/inputs'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../style/tables'
import {ActiveMemberUserContainer, ActiveMemberUserText, GroupMembersTableContainer, NewMemberGreenText, NewMemberYellowText,
    RoleFieldChevron, RoleFieldText, RoleTextImageContainer, TableDataCheckbox} from './styles'
import {MemberTableHeaderImg} from '../styles'


const MembersTable = ({activeRenderData, filterMemberStatus, group, history, filterOption, filterString, invitedMembers,
                          invitedRenderData, members, setActiveRenderData, setInvitedRenderData, setShowAddMember}) => {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const [allActiveStatus, setAllActiveStatus] = useState(true)
    const [allInvitedStatus, setAllInvitedStatus] = useState(true)

    useEffect(() => {
        //Creates lists of members that are active and members that are invited
        const listActiveWithOrgAndInvited = async () => {
            const activeResult = [];
            const invitedResult = [];
            //For active members of the group
            for (const member of members) {
                //Gets the organization name of a member specific to the chosen group
                const response = await dispatch(getMemberOrganizationNameAction(group.id, member.user.id))
                //Finds the project_role of member specific to the chosen group
                const project_roles = member.assigned_project_roles.filter(role => role.project.group === group.id)
                //Stores the number of projects of the chosen group
                const group_projects = group.projects.length
                //If the user has been assigned an organization specific to the chosen group...
                if (response) {
                    let data = {
                        id: member.id,
                        first_name: member.user.first_name,
                        last_name: member.user.last_name,
                        email: member.user.email,
                        phone_number: member.phone_number,
                        organization: response.name,
                        //Member has the same role for all projects of a group, finds the role of the first project
                        //a member has access to and assigns it
                        project_role: project_roles.length ? project_roles[0].role : 'Unassigned',
                        //Sets if the member has access to "all" or "limited" number of projects
                        //Shows "Group has no Projects" if the group has none
                        project_access: !group_projects ? 'Group has no Projects' : project_roles.length === group_projects ? 'All' : 'Limited',
                        country: member.country ? member.country : 'N/A',
                        //Used to control the check box of a member
                        isChecked: false,
                        updated: member.updated
                    }
                    activeResult.push(data)
                //If the user has not been assigned an organization specific to the chosen group...
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
                        country: member.country ? member.country : 'N/A',
                        isChecked: false,
                        updated: member.updated
                    }
                    activeResult.push(data)
                }
            }
            //For invited members of a group that have not finalized their registration
            for (const member of invitedMembers) {
                let data = {
                    id: member.id,
                    email: member.user.email,
                    code_used: member.code_used,
                    isChecked: false
                }
                invitedResult.push(data)
            }
            //Sorts list of members so the most recently updated are displayed first
            activeResult.sort((a, b) => (a.updated > b.updated) ? -1 : ((b.updated > a.updated) ? 1 : 0));
            //Stores list of active members to display
            setActiveRenderData([...activeResult])
            //Stores list of invited members to display
            setInvitedRenderData([...invitedResult])
            setLoaded(true)
        }
        listActiveWithOrgAndInvited()
    }, [dispatch, group.id, group.projects.length, members, invitedMembers, setActiveRenderData, setInvitedRenderData])

    //Used to check or uncheck all members of the current displayed table
    const checkAllMembersHandler = (array, setArray, status, setStatus) => {
        const dataCopy = [...array]
        for (const member of dataCopy) {
            member.isChecked = status
        }
        setArray([...dataCopy])
        setStatus(!status)
    }

    //Used by FilterDropdown to filter which active members to display
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

    //Used by FilterDropdown to filter which invited members to display
    const filteredInviteMembers = () => (
        invitedRenderData.filter(member => member.email.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)
    )

    //Used to render each member line of table for active members
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

    //Used to render each member line of table for invited members
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
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {!loaded ? <Loading /> : (
                <GroupMembersTableContainer>
                    <CommentTable>
                        <thead>
                            {!filterMemberStatus ? (
                                <TableTitleRow>
                                    <TableDataCheckbox>
                                        <MemberTableHeaderImg
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
                                        <tr>
                                            <td>
                                                <NoPendingInvited
                                                    setShowAddMember={setShowAddMember}
                                                />
                                            </td>
                                        </tr>)}
                        </thead>
                        <tbody>
                            {!filterMemberStatus ?
                                renderActiveMembers(filteredMembers()) :
                                renderInvitedMembers(filteredInviteMembers())}
                        </tbody>
                    </CommentTable>
                </GroupMembersTableContainer>)}
        </>
    )
}

export default MembersTable

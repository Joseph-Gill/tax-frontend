import React, {useEffect, useState} from 'react'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../style/tables'
import {getMemberOrganizationNameAction} from '../../../store/organization/actions'
import {useDispatch} from 'react-redux'
import Spinner from '../../../components/Spinner'
import headerCheckbox from '../../../assets/icons/stark_checkbox_header.svg'
import {ActiveMemberUserContainer, ActiveMemberUserText, CheckBox, GroupMembersTableContainer, NewMemberGreenText, NewMemberYellowText, TableDataCheckbox} from './styles'


const MembersTable = ({filterMemberStatus, group, invitedMembers, members}) => {
    const [activeRenderData, setActiveRenderData] = useState([])
    const [invitedRenderData, setInvitedRenderData] = useState([...invitedMembers])
    const [loaded, setLoaded] = useState(false)
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
                        id: member.user.id,
                        first_name: member.user.first_name,
                        last_name: member.user.last_name,
                        email: member.user.email,
                        phone_number: member.phone_number,
                        organization: response.name,
                        project_role: project_roles[0].role,
                        project_access: project_roles.length === group_projects ? 'All' : 'Limited',
                        country: 'N/A',
                        isChecked: false
                    }
                    activeResult.push(data)
                } else {
                    let data = {
                        id: member.user.id,
                        first_name: member.user.first_name,
                        last_name: member.user.last_name,
                        email: member.user.email,
                        phone_number: member.phone_number,
                        organization: 'Unassigned',
                        project_role: project_roles.length ? project_roles[0].role : 'Unassigned',
                        project_access: project_roles.length === group_projects ? 'All' : 'Limited',
                        isChecked: false
                    }
                    activeResult.push(data)
                }
            }
            for (const member of invitedMembers) {
                let data = {
                    id: member.user.id,
                    email: member.user.email,
                    code_used: member.code_used,
                    isChecked: false
                }
                invitedResult.push(data)
            }
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
                    <ActiveMemberUserContainer>
                        <ActiveMemberUserText>{`${member.first_name} ${member.last_name}`}</ActiveMemberUserText>
                        <ActiveMemberUserText>{member.email}</ActiveMemberUserText>
                        <ActiveMemberUserText>{member.phone_number}</ActiveMemberUserText>
                    </ActiveMemberUserContainer>
                </TableData>
                <TableData>{member.organization}</TableData>
                <TableData>{member.project_access}</TableData>
                <TableData>{member.country}</TableData>
                <TableData>{member.project_role}</TableData>
            </TableDataRow>)
        )
    }

    const renderInvitedMembers = (array) => {
        return array.map((member, index) => (
            <TableDataRow key={member.id}>
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
                                    <img alt='checkbox' src={headerCheckbox} />
                                </TableDataCheckbox>
                                <TableHeader>User</TableHeader>
                                <TableHeader>Organization</TableHeader>
                                <TableHeader>Projects Access</TableHeader>
                                <TableHeader>Country</TableHeader>
                                <TableHeader>Role</TableHeader>
                            </TableTitleRow>) : (
                                <TableTitleRow>
                                    <TableDataCheckbox>
                                        <img alt='checkbox' src={headerCheckbox} />
                                    </TableDataCheckbox>
                                    <TableHeader>User</TableHeader>
                                    <TableHeader>Organization</TableHeader>
                                    <TableHeader>Projects Access</TableHeader>
                                    <TableHeader>Country</TableHeader>
                                    <TableHeader>Status</TableHeader>
                                </TableTitleRow>)}
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

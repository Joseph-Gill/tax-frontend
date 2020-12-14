import React, {useEffect, useState} from 'react'
import styled from 'styled-components/macro'
import {CommentTable, TableData, TableDataRow, TableHeader, TableTitleRow} from '../../../style/tables'
import {CardInfoText} from '../../../style/text'


const GroupMembersTableContainer = styled.div`
    width: 860px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 21px;
    max-height: 350px;
`

const NewMemberGreenText = styled(CardInfoText)`
    color: ${props => props.theme.greenDark};
`

const NewMemberYellowText = styled(CardInfoText)`
    color: ${props => props.theme.yellowDark};
`



const GroupMembersTable = ({filterMemberStatus, invitedMembers, members}) => {
    const [renderData, setRenderData] = useState([])



    useEffect(() => {
        filterMemberStatus ? setRenderData(renderActiveMembers()) : setRenderData(renderInvitedMembers())
    }, [filterMemberStatus])

    const renderActiveMembers = () => {
        return members.map(member => (
            <TableDataRow key={member.user.id}>
                <TableData>X</TableData>
                <TableData>{member.user.email}</TableData>
                <TableData>PH Organization</TableData>
                <TableData>PH Project Access</TableData>
                <TableData>PH Country</TableData>
                <TableData>PH Role</TableData>
            </TableDataRow>)
        )
    }

    const renderInvitedMembers = () => {
        return invitedMembers.map(member => (
            <TableDataRow key={member.user.id}>
                <TableData>X</TableData>
                <TableData>{member.user.email}</TableData>
                <TableData>n/a</TableData>
                <TableData>n/a</TableData>
                <TableData>n/a</TableData>
                <TableData>{member.code_used ?
                    <NewMemberGreenText>Registered</NewMemberGreenText> :
                    <NewMemberYellowText>Invite Sent</NewMemberYellowText>}
                </TableData>
            </TableDataRow>)
        )
    }

    return (
        <GroupMembersTableContainer>
            <CommentTable>
                <thead>
                    {filterMemberStatus ? (
                        <TableTitleRow>
                            <TableHeader>X</TableHeader>
                            <TableHeader>User</TableHeader>
                            <TableHeader>Organization</TableHeader>
                            <TableHeader>Projects Access</TableHeader>
                            <TableHeader>Country</TableHeader>
                            <TableHeader>Role</TableHeader>
                        </TableTitleRow>) : (
                            <TableTitleRow>
                                <TableHeader>X</TableHeader>
                                <TableHeader>User</TableHeader>
                                <TableHeader>Organization</TableHeader>
                                <TableHeader>Projects Access</TableHeader>
                                <TableHeader>Country</TableHeader>
                                <TableHeader>Status</TableHeader>
                            </TableTitleRow>)}
                </thead>
                <tbody>
                    {renderData}
                </tbody>
            </CommentTable>
        </GroupMembersTableContainer>
    )
}

export default GroupMembersTable

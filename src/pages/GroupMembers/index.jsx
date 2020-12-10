import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, DisplayGroupTitleContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import {GROUPS, MEMBERS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'


const MembersStatusToggleContainer = styled.div`
    width: 150px;
    height: 40px;
    background: rgba(224, 224, 224, 0.5);
    box-shadow: inset 0 2px 4px rgba(44, 33, 120, 0.1), inset 0 1px 2px rgba(44, 33, 120, 0.1);
    border-radius: 8px;
`

export const DisplayMembersTitleContainer = styled(DisplayGroupTitleContainer)`
    margin-top: 16.5px;
`


const GroupMembers = () => {
    const group = useSelector(state => state.groupReducer.group)
    const members = useSelector(state => state.groupReducer.group.users)
    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display:'GROUPS', to:GROUPS},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`},
                {display: 'TEAM MEMBERS', to:`${GROUPS}${MEMBERS}`}]}
            />
            <DisplayMembersTitleContainer>
                <AuthenticatedPageTitle>Team Members</AuthenticatedPageTitle>
                <MembersStatusToggleContainer />
            </DisplayMembersTitleContainer>
        </AuthenticatedPageContainer>
    )
}

export default GroupMembers

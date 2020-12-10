import React, {useState} from 'react'
import {AuthenticatedPageContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import {GROUPS, MEMBERS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {DisplayMembersTitleContainer, GreyStatusText, MembersStatusToggleContainer, WhiteStatusContainer} from './styles'


const GroupMembers = () => {
    const group = useSelector(state => state.groupReducer.group)
    const members = useSelector(state => state.groupReducer.group.users)
    const [filterMemberStatus, setFilterMemberStatus] = useState(true)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display:'GROUPS', to:GROUPS},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`},
                {display: 'TEAM MEMBERS', to:`${GROUPS}${MEMBERS}`}]}
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
        </AuthenticatedPageContainer>
    )
}

export default GroupMembers

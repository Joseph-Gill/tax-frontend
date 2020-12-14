import React, {useState, useRef} from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import {GROUPS, MEMBERS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {DisplayMembersTitleContainer, GreyStatusText, MembersStatusToggleContainer, WhiteStatusContainer} from './styles'
import ActionDropdown from './ActionDropdown'
import FilterDropdown from './FilterDropdown'


const ActionFilterDropdownContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`


const GroupMembers = () => {
    const group = useSelector(state => state.groupReducer.group)
    // const members = useSelector(state => state.groupReducer.group.users)
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

        </AuthenticatedPageContainer>
    )
}

export default GroupMembers

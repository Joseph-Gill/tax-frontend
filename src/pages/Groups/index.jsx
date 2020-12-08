import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {useSelector} from 'react-redux'
import CreateGroupCard from './CreateGroupCard'
import GroupCard from './GroupCard'

const GroupDisplayContainer = styled.div`
    Width: 860px;
    background: ${props => props.theme.white};
    padding: 34px 20px 16px 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 26px;
    grid-row-gap: 16px
`

const Groups = () => {
    const groups = useSelector(state => state.profileReducer.profile.groups)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[{'GROUPS': '/groups'}]} />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Groups</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <GroupDisplayContainer>
                {groups.map(group => <GroupCard group={group} key={group.id} />)}
                <CreateGroupCard />
            </GroupDisplayContainer>
        </AuthenticatedPageContainer>
    )
}

export default Groups

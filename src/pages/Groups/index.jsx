import React from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {useSelector} from 'react-redux'
import CreateGroupCard from './CreateGroupCard'
import GroupCard from './GroupCard'
import {GroupDisplayContainer, GroupGridContainer, GroupsSectionTile} from './styles'


const Groups = () => {
    const groups = useSelector(state => state.profileReducer.profile.groups)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[{display:'GROUPS', to:'/groups'}]} />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Groups</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <GroupDisplayContainer>
                <GroupsSectionTile>Choose a Group</GroupsSectionTile>
                <GroupGridContainer>
                    {groups.map(group => <GroupCard group={group} key={group.id} />)}
                    <CreateGroupCard />
                </GroupGridContainer>
            </GroupDisplayContainer>
        </AuthenticatedPageContainer>
    )
}

export default Groups

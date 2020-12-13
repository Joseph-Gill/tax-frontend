import React, {useEffect} from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {useDispatch, useSelector} from 'react-redux'
import CreateGroupCard from './CreateGroupCard'
import GroupCard from './GroupCard'
import {GroupDisplayContainer, GroupGridContainer, GroupsSectionTile} from './styles'
import {resetGroup} from '../../store/group/actions'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import NoContent from '../../components/NoContent'


const Groups = () => {
    const groups = useSelector(state => state.profileReducer.profile.groups)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetGroup())
    }, [dispatch])

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display: 'GROUPS', to: GROUPS, active: true}]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Groups</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            {!groups.length ?
                <NoContent buttonText='Create Group' redirect={`${GROUPS}${ADD_GROUP}`} text='You do not have any groups yet.' /> : (
                    <GroupDisplayContainer>
                        <GroupsSectionTile>Choose a Group</GroupsSectionTile>
                        <GroupGridContainer>
                            {groups.map(group => <GroupCard group={group} key={group.id} />)}
                            <CreateGroupCard />
                        </GroupGridContainer>
                    </GroupDisplayContainer>)}
        </AuthenticatedPageContainer>
    )
}

export default Groups

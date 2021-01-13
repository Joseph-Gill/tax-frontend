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
import {resetProject} from '../../store/project/actions'
import {getProfileAction} from '../../store/profile/actions'
import Spinner from '../../components/Spinner'


const Groups = ({history}) => {
    const groups = useSelector(state => state.profileReducer.profile.groups)
    const loaded = useSelector(state => state.profileReducer.loaded)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetGroup())
        dispatch(resetProject())
        if (!loaded) {
            dispatch(getProfileAction())
        }
        console.log(groups)
    }, [dispatch, loaded])

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
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
                                    {groups.map(group => <GroupCard group={group} history={history} key={group.id} />)}
                                    <CreateGroupCard history={history} />
                                </GroupGridContainer>
                            </GroupDisplayContainer>)}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default Groups

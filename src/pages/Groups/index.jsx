import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import CreateGroupCard from './CreateGroupCard'
import GroupCard from './GroupCard'
import NoContent from '../../components/NoContent'
import LogoLoading from '../../components/LogoLoading'
import {resetGroup} from '../../store/group/actions'
import {resetProject} from '../../store/project/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {getProfileAction} from '../../store/profile/actions'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {GroupDisplayContainer, GroupGridContainer, GroupsSectionTile} from './styles'


const Groups = ({history}) => {
    const dispatch = useDispatch()
    const groups = useSelector(state => state.profileReducer.profile.groups)
    const loaded = useSelector(state => state.profileReducer.loaded)

    useEffect(() => {
        //Resets errors in redux state
        dispatch(resetErrors())
        //Resets group in redux state
        dispatch(resetGroup())
        //Resets project in redux state
        dispatch(resetProject())
        //If user's profile isn't in redux state, fetch it to prevent crash
        if (!loaded) {
            dispatch(getProfileAction())
        }
    }, [dispatch, loaded])

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <LogoLoading /> : (
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

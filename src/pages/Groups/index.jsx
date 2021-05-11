import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import GroupCardV2 from './GroupCardV2'
import CreateGroupCard from './CreateGroupCard'
import NoContent from '../../components/NoContent'
import BreadCrumb from '../../components/BreadCrumb'
import LogoLoading from '../../components/LogoLoading'
import HomeGroupsTabs from '../../components/HomeGroupsTabs'
import NoFilterResults from '../../components/NoFilterResults'
import {resetGroup} from '../../store/group/actions'
import {resetProject} from '../../store/project/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {getProfileAction} from '../../store/profile/actions'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer, HomeGroupListContainer} from '../../style/containers'
import {HomePageText} from '../../style/text'
import styled from 'styled-components/macro'


const GroupsAccessContainer = styled.div`
    width: 860px;
    margin-top: 38px;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`


const Groups = ({history}) => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profileReducer.profile)
    const loaded = useSelector(state => state.profileReducer.loaded)
    const [allUserGroups, setAllUserGroups] = useState([])
    const [favoriteUserGroups, setFavoriteUserGroups] = useState([])
    const [groupsToDisplay, setGroupsToDisplay] = useState([])
    const [favoriteGroupsToDisplay, setFavoriteGroupsToDisplay] = useState([])
    const [displayFavorites, setDisplayFavorites] = useState(true)
    const [loading, setLoading] = useState(true)

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
        } else {
            if (!profile.favorite_groups.length) {
                setDisplayFavorites(false)
            }
            setAllUserGroups([...profile.groups])
            setGroupsToDisplay([...profile.groups])
            setFavoriteUserGroups([...profile.favorite_groups])
            setFavoriteGroupsToDisplay([...profile.favorite_groups])
            setLoading(false)
        }
    }, [dispatch, loaded, profile])

    const renderGroups = arrayOfGroups => {
        if (arrayOfGroups.length) {
            return (
                <HomeGroupListContainer numCards={arrayOfGroups.length + 1}>
                    {arrayOfGroups.map(group => (
                        <GroupCardV2
                            key={group.id}
                        />
                    ))}
                    <CreateGroupCard history={history} />
                </HomeGroupListContainer>
            )
        } else {
            return <NoFilterResults />
        }
    }

    return (
        <AuthenticatedPageContainer>
            {loading ? <LogoLoading /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: true}]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>Groups</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    {!profile.groups.length ?
                        <NoContent buttonText='Create Group' redirect={`${GROUPS}${ADD_GROUP}`} text='You do not have any groups yet.' /> : (
                            <>
                                <GroupsAccessContainer>
                                    <HomePageText>Your current groups</HomePageText>
                                    <div>Search Bar</div>
                                </GroupsAccessContainer>
                                <HomeGroupsTabs
                                    displayFavorites={displayFavorites}
                                    setDisplayFavorites={setDisplayFavorites}
                                />
                                {displayFavorites ? renderGroups(favoriteGroupsToDisplay) : renderGroups(groupsToDisplay)}
                            </>)}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default Groups

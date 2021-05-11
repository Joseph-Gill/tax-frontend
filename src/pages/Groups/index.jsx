import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import GroupCardV2 from './GroupCardV2'
import CreateGroupCard from './CreateGroupCard'
import NoContent from '../../components/NoContent'
import BreadCrumb from '../../components/BreadCrumb'
import LogoLoading from '../../components/LogoLoading'
import HomeGroupsTabs from '../../components/HomeGroupsTabs'
import NoFilterResults from '../../components/NoFilterResults'
import {getUserFavoriteGroupsAction, resetGroup} from '../../store/group/actions'
import {resetProject} from '../../store/project/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {getProfileAction} from '../../store/profile/actions'
import {ADD_GROUP, GROUPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer, HomeGroupListContainer} from '../../style/containers'
import {HomePageText} from '../../style/text'
import {GroupsAccessContainer, SearchBarPlaceholder} from './styles'


const Groups = ({history}) => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profileReducer.profile)
    const loaded = useSelector(state => state.profileReducer.loaded)
    const [allUserGroups, setAllUserGroups] = useState([])
    const [groupsToDisplay, setGroupsToDisplay] = useState([])
    const [displayFavorites, setDisplayFavorites] = useState(true)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getUserFavoriteGroupsInfo = async () => {
            const groupResponse = await dispatch(getUserFavoriteGroupsAction())
                if (groupResponse.status === 200) {
                    setAllUserGroups([...groupResponse.data])
                    setGroupsToDisplay([...groupResponse.data])
                    // If the user has no favorite groups, defaults to All Groups tab
                    if (!groupResponse.data.filter(group => group.user_favorite).length) {
                        setDisplayFavorites(false)
                    }
                }
        }
        //If user's profile isn't in redux state, fetch it to prevent crash
        if (!loaded) {
            dispatch(getProfileAction())
        } else {
            //Resets errors in redux state
            dispatch(resetErrors())
            //Resets group in redux state
            dispatch(resetGroup())
            //Resets project in redux state
            dispatch(resetProject())
            getUserFavoriteGroupsInfo()
                .then(() => setLoading(false))
        }
    }, [dispatch, loaded])

    const renderGroups = () => {
        if (groupsToDisplay.length) {
            if (displayFavorites) {
                const favoriteGroups = groupsToDisplay.filter(group => group.user_favorite)
                return (
                    <HomeGroupListContainer numCards={favoriteGroups.length + 1}>
                        {favoriteGroups.map(group => (
                            <GroupCardV2
                                dispatch={dispatch}
                                group={group}
                                groupsToDisplay={groupsToDisplay}
                                history={history}
                                key={group.id}
                            />
                        ))}
                        <CreateGroupCard history={history} />
                    </HomeGroupListContainer>
                )
            } else {
                return (
                    <HomeGroupListContainer numCards={groupsToDisplay.length + 1}>
                        {groupsToDisplay.map(group => (
                            <GroupCardV2
                                dispatch={dispatch}
                                group={group}
                                groupsToDisplay={groupsToDisplay}
                                history={history}
                                key={group.id}
                            />
                        ))}
                        <CreateGroupCard history={history} />
                    </HomeGroupListContainer>
                )
            }
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
                                    <SearchBarPlaceholder>Search Bar</SearchBarPlaceholder>
                                </GroupsAccessContainer>
                                <HomeGroupsTabs
                                    displayFavorites={displayFavorites}
                                    setDisplayFavorites={setDisplayFavorites}
                                />
                                {renderGroups()}
                            </>)}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default Groups

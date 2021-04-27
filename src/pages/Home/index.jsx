import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import HomeGroupV2 from './HomeGroupV2'
import HomeProjectTabs from './HomeProjectTabs'
import BreadCrumb from '../../components/BreadCrumb'
import LogoLoading from '../../components/LogoLoading'
import NoContent from '../../components/NoContent'
import HomeFilterSearchBar from './HomeFilterSearchBar'
import NoFilterResults from '../../components/NoFilterResults'
import {getProfileAction} from '../../store/profile/actions'
import {resetGroup} from '../../store/group/actions'
import {getProjectFirstUncompletedStepAction, resetProject} from '../../store/project/actions'
import {resetMember, resetMemberFilterProjectId} from '../../store/member/actions'
import {resetSteps} from '../../store/step/actions'
import {resetTaskFilterStepNumber, resetTasks} from '../../store/task/actions'
import {getRolesForProfileGroupAction} from '../../store/projectRole/actions'
import {GROUPS, HOME} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {HomePageText} from '../../style/text'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {HomeGroupListContainer, ProjectAccessContainer} from './styles'


const Home = ({history}) => {
    const dispatch = useDispatch()
    let filterString = useRef('')
    const user = useSelector(state => state.userLoginReducer.user)
    const profile = useSelector(state => state.profileReducer.profile)
    const profileLoaded = useSelector(state => state.profileReducer.loaded)
    const [projectGroupPairings, setProjectGroupPairings] = useState([])
    const [pairingsToDisplay, setPairingsToDisplay] = useState([])
    const [homeLoading, setHomeLoading] = useState(true)
    const [displayFavorites, setDisplayFavorites] = useState(true)

    useEffect(() => {
        //Is given all groups the user is a member of
        const createGroupProjectPairingWithRole = async (groups) => {
            const groupNameProjectPairing = []
            //Loops over all groups the user is a member of
            for (let i = 0; i < groups.length; i++) {
                if (groups[i].projects.length) {
                    //Gets the role a member has for projects in the group
                    const roleResponse = await dispatch(getRolesForProfileGroupAction(user.user_profile.id, groups[i].id))
                    if (roleResponse.length) {
                        //For each project of the user's group
                        for (let x = 0; x < groups[i].projects.length; x++) {
                            //Creates an object with groupId, group name, project, user's role, firstUncompletedStep (initially null)
                            let result = {
                                groupId: groups[i].id,
                                groupName: groups[i].name,
                                groupImage: groups[i].avatar,
                                // project: groups[i].projects[x],
                                project: roleResponse[x].project,
                                userRole: roleResponse[x].role,
                                firstUncompletedStep: null,
                                favorite: roleResponse[x].favorite
                            }
                            //Looks at project of the group and finds it's first step that has a status not "Completed"
                            const stepResponse = await dispatch(getProjectFirstUncompletedStepAction(groups[i].projects[x].id))
                                if (stepResponse) {
                                    result.firstUncompletedStep = stepResponse
                                    groupNameProjectPairing.push(result)
                                } else {
                                    groupNameProjectPairing.push(result)
                                }
                        }
                    }
                }
            }
            return groupNameProjectPairing
        }

        const getProfileCreateParing = async () => {
            //Gets the user's profile
            const response = await dispatch(getProfileAction())
            //Creates an array of Group/Project pairings used to render Group/Project cards
            const result = await createGroupProjectPairingWithRole(response.groups)
            //Stores list of results to be used to filter
            setProjectGroupPairings([...result])
            //Stores list of result to render Group Cards
            setPairingsToDisplay([...result])
        }
        //Resets project in redux state
        dispatch(resetProject())
        //Resets group in redux state
        dispatch(resetGroup())
        //Resets selected member in redux state
        dispatch(resetMember())
        //Resets project steps in redux state
        dispatch(resetSteps())
        //Resets step tasks in redux state
        dispatch(resetTasks())
        //Resets task step number filter in redux state
        dispatch(resetTaskFilterStepNumber())
        //Resets member project filter in redux state
        dispatch(resetMemberFilterProjectId())
        getProfileCreateParing()
            .then(() => setHomeLoading(false))
    }, [dispatch, user])

    //Used by Group/Project filter to filter by Group or Project name
    const searchedPairings = () => (
        projectGroupPairings.filter(pair => pair.groupName.toLowerCase().indexOf(filterString.current.value.toLowerCase()) !== -1 ||
        pair.project.name.toLowerCase().indexOf(filterString.current.value.toLowerCase()) !== -1
        )
    );

    //Used by search bar to filter by enter keypress in search bar
    const filterByKeypressChangeHandler = (e) => {
        if (e.key === 'Enter') {
            setPairingsToDisplay(searchedPairings())
        }
    }

    //Used by search bar to filter by clicking search image
    const filterByClickChangeHandler = () => {
        setPairingsToDisplay(searchedPairings())
    }

    //Used by search bar to reset the search bar text
    const resetFilterChangeHandler = () => {
        filterString.current.value = ''
        setPairingsToDisplay([...projectGroupPairings])
    }

    //Used to render a Group Card for each entry in pairingsToDisplay
    const renderPairings = () => {
        if (pairingsToDisplay.length){
            if (displayFavorites) {
                const favoriteProjects = pairingsToDisplay.filter(pair => pair.favorite)
                return (
                    <HomeGroupListContainer
                        numCards={favoriteProjects.length}
                    >
                        {favoriteProjects.map((pair) => (
                            <HomeGroupV2
                                dispatch={dispatch}
                                history={history}
                                key={uuidv4()}
                                pair={pair}
                                user={user}
                            />))}
                    </HomeGroupListContainer>
                )
            }
            return (
                <HomeGroupListContainer
                    numCards={pairingsToDisplay.length}
                >
                    {pairingsToDisplay.map((pair) => (
                        <HomeGroupV2
                            dispatch={dispatch}
                            history={history}
                            key={uuidv4()}
                            pair={pair}
                            user={user}
                        />
                    ))}
                </HomeGroupListContainer>)
        } else {
            return <NoFilterResults />}
    }

    return (
        <AuthenticatedPageContainer>
            {homeLoading || !profileLoaded ? <LogoLoading /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'HOME', to: HOME, active: true}]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>Welcome {profile.user.first_name}</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    {!projectGroupPairings.length ?
                        <NoContent buttonText='Go to groups overview' redirect={GROUPS} text='You have not created or been granted access to a group/project yet.' /> : (
                            <>
                                <ProjectAccessContainer>
                                    <HomePageText>Your current projects</HomePageText>
                                    <HomeFilterSearchBar
                                        filterByClickChangeHandler={filterByClickChangeHandler}
                                        filterByKeypressChangeHandler={filterByKeypressChangeHandler}
                                        filterString={filterString}
                                        resetFilterChangeHandler={resetFilterChangeHandler}
                                    />
                                </ProjectAccessContainer>
                                <HomeProjectTabs
                                    displayFavorites={displayFavorites}
                                    setDisplayFavorites={setDisplayFavorites}
                                />
                                {renderPairings()}
                            </>)}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default Home

import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HomeGroupV2 from './HomeGroupV2'
import BreadCrumb from '../../components/BreadCrumb'
import LogoLoading from '../../components/LogoLoading'
import NoContent from '../../components/NoContent'
import HomeFilterSearchBar from './HomeFilterSearchBar'
import HomeGroupsTabs from '../../components/HomeGroupsTabs'
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
        const getProfileAndProjects = async () => {
            //Used to store the Group/Project pairings needed to render each card
            const groupNameProjectPairing = []
            const response = await dispatch(getProfileAction())
            //Gets all Groups the user has access to
            const userGroups = response.groups
            //For each of the Groups, we need to get the projects the User has a Project Role for
            for (let i = 0; i < userGroups.length; i++) {
                const roleResponse = await dispatch(getRolesForProfileGroupAction(response.id, userGroups[i].id))
                for (let x = 0; x < roleResponse.length; x++) {
                    //Creates the object with all information needed to render the card
                    let result = {
                        id: roleResponse[x].project.id,
                        groupId: roleResponse[x].project.group.id,
                        groupName: roleResponse[x].project.group.name,
                        groupImage: roleResponse[x].project.group.avatar,
                        project: roleResponse[x].project,
                        userRole: roleResponse[x].role,
                        firstUncompletedStep: null,
                        favorite: roleResponse[x].favorite,
                    }
                    //Finds the first uncompleted step for each project, updating the card object if a step is found
                    const stepResponse = await dispatch(getProjectFirstUncompletedStepAction(roleResponse[x].project.id))
                    if (stepResponse) {
                        result.firstUncompletedStep = stepResponse
                        groupNameProjectPairing.push(result)
                    } else {
                        groupNameProjectPairing.push(result)
                    }
                }
            }
            //Stores list of results to be used to reset the filter
            setProjectGroupPairings([...groupNameProjectPairing])
            //Stores list of result to render Group Cards
            setPairingsToDisplay([...groupNameProjectPairing])
            //Checks if the user has no favorites and sets the tab to All Projects if they do not
            const favoriteProjects = groupNameProjectPairing.filter(pair => pair.favorite)
            if (!favoriteProjects.length) {
                setDisplayFavorites(false)
            }
        }
        //Resets redux state to default
        dispatch(resetProject())
        dispatch(resetGroup())
        dispatch(resetMember())
        dispatch(resetSteps())
        dispatch(resetTasks())
        dispatch(resetTaskFilterStepNumber())
        dispatch(resetMemberFilterProjectId())
        getProfileAndProjects()
            .then(() => setHomeLoading(false))
    }, [dispatch])

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

    //Used in renderPairings to only render Projects that are not status Completed
    const renderNonCompletedProjects = array => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            if (array[i].project.status !== 'Completed') {
                result.push(
                    <HomeGroupV2
                        dispatch={dispatch}
                        history={history}
                        key={array[i].id}
                        pair={array[i]}
                        pairingsToDisplay={pairingsToDisplay}
                        setHomeLoading={setHomeLoading}
                        user={user}
                    />)
            }
        }
        return result
    }

    //Used to render a Group Card for each entry in pairingsToDisplay
    const renderPairings = () => {
        if (pairingsToDisplay.length){
            if (displayFavorites) {
                const favoriteProjects = pairingsToDisplay.filter(pair => pair.favorite)
                return (
                    <HomeGroupListContainer numCards={favoriteProjects.length}>
                        {renderNonCompletedProjects(favoriteProjects)}
                    </HomeGroupListContainer>
                )
            } else {
                return (
                    <HomeGroupListContainer numCards={pairingsToDisplay.length}>
                        {renderNonCompletedProjects(pairingsToDisplay)}
                    </HomeGroupListContainer>
                )
            }
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
                                {/*<HomeProjectTabs*/}
                                {/*    displayFavorites={displayFavorites}*/}
                                {/*    setDisplayFavorites={setDisplayFavorites}*/}
                                {/*/>*/}
                                <HomeGroupsTabs
                                    componmentCalling='Home'
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

import React, {useEffect, useState, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import BreadCrumb from '../../components/BreadCrumb'
import HomeGroup from './HomeGroup'
import Spinner from '../../components/Spinner'
import NoContent from '../../components/NoContent'
import HomeFilterDropdown from './HomeFilterDropdown'
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
import {ProjectAccessContainer, ProjectFilterInputLabel} from './styles'


const Home = ({history}) => {
    const dispatch = useDispatch()
    let filterString = useRef('')
    const user = useSelector(state => state.userLoginReducer.user)
    const profile = useSelector(state => state.profileReducer.profile)
    const profileLoaded = useSelector(state => state.profileReducer.loaded)
    const [projectGroupPairings, setProjectGroupPairings] = useState([])
    const [pairingsToDisplay, setPairingsToDisplay] = useState([])
    const [homeLoading, setHomeLoading] = useState(false)

    useEffect(() => {
        if (!profileLoaded) {
            dispatch(getProfileAction())
        }
    }, [dispatch, profileLoaded])


    useEffect(() => {
        const createGroupProjectPairingWithRole = async (groups) => {
            const groupNameProjectPairing = []
            for (let i = 0; i < groups.length; i++) {
                if (groups[i].projects.length) {
                    const roleResponse = await dispatch(getRolesForProfileGroupAction(user.user_profile.id, groups[i].id))
                    if (roleResponse.length) {
                        for (let x = 0; x < groups[i].projects.length; x++) {
                            let result = {groupId: groups[i].id, groupName: groups[i].name, project:groups[i].projects[x], userRole: roleResponse[0].role, firstUncompletedStep: null}
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
            const response = await dispatch(getProfileAction())
            const result = await createGroupProjectPairingWithRole(response.groups)
            setProjectGroupPairings([...result])
            setPairingsToDisplay([...result])
        }
        setHomeLoading(true)
        dispatch(resetProject())
        dispatch(resetGroup())
        dispatch(resetMember())
        dispatch(resetSteps())
        dispatch(resetTasks())
        dispatch(resetTaskFilterStepNumber())
        dispatch(resetMemberFilterProjectId())
        getProfileCreateParing()
            .then(() => setHomeLoading(false))
    }, [dispatch, user])

    const filterChangeHandler = (e) => {
        if (e.key === 'Enter') {
            console.log('filterTrigger')
            const searchedPairings = projectGroupPairings.filter(pair =>
                pair.groupName.toLowerCase().indexOf(filterString.current.value.toLowerCase()) !== -1 ||
                pair.project.name.toLowerCase().indexOf(filterString.current.value.toLowerCase()) !== -1
            );
            setPairingsToDisplay(searchedPairings)
        }
    }


    const renderPairings = () => {
        if (pairingsToDisplay.length){
            return pairingsToDisplay.map((pair) => (
                <HomeGroup
                    firstUncompletedStep={pair.firstUncompletedStep}
                    groupId={pair.groupId}
                    groupName={pair.groupName}
                    history={history}
                    key={uuidv4()}
                    project={pair.project}
                    setHomeLoading={setHomeLoading}
                    user={user}
                    userRole={pair.userRole}
                />
            ))
        } else {
            return <NoFilterResults />}
    }

    return (
        <AuthenticatedPageContainer>
            {homeLoading || !profileLoaded ? <Spinner /> : (
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
                                    <div>
                                        <ProjectFilterInputLabel>Project / Group Filter</ProjectFilterInputLabel>
                                        <HomeFilterDropdown
                                            filterChangeHandler={filterChangeHandler}
                                            filterString={filterString}
                                        />
                                    </div>
                                </ProjectAccessContainer>
                                {renderPairings()}
                            </>
                        )}
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default Home


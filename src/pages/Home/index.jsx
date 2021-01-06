import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import BreadCrumb from '../../components/BreadCrumb'
import HomeGroup from './HomeGroup'
import Spinner from '../../components/Spinner'
import {getProfileAction} from '../../store/profile/actions'
import {resetGroup} from '../../store/group/actions'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import {HomePageText} from '../../style/text'
import {ProjectAccessContainer} from './styles'
import {GROUPS, HOME} from '../../routes/paths'
import NoContent from '../../components/NoContent'
import {resetProject} from '../../store/project/actions'
import HomeFilterDropdown from './HomeFilterDropdown'
import {resetMember} from '../../store/member/actions'
import NoFilterResults from '../../components/NoFilterResults'
import {resetSteps} from '../../store/step/actions'
import {resetTasks} from '../../store/task/actions'


const Home = ({history}) => {
    const dispatch = useDispatch()
    const first_name = useSelector(state => state.userLoginReducer.user.first_name)
    const [filterString, setFilterString] = useState('')
    const [projectGroupPairings, setProjectGroupPairings] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async function getProfileCreateParing() {
            setLoading(true)
            dispatch(resetProject())
            dispatch(resetGroup())
            dispatch(resetMember())
            dispatch(resetSteps())
            dispatch(resetTasks())
            const response = await dispatch(getProfileAction())
            setProjectGroupPairings([...createGroupProjectPairing(response.groups)])
        })();
    }, [dispatch])

    const searchedPairings = projectGroupPairings.filter(pair =>
        pair.groupName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
        pair.project.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
    );

    const renderPairings = () => {
        if (searchedPairings.length){
            return searchedPairings.map((pair) => (
                <HomeGroup groupName={pair.groupName} history={history} key={uuidv4()} project={pair.project} />
            ))
        } else {
            return <NoFilterResults />}
    }

    const createGroupProjectPairing = (groups) => {
        const groupNameProjectPairing = []
        groups.forEach(groupEntry => {
            if (groupEntry.projects.length) {
                groupEntry.projects.forEach(projectEntry => {
                    let result = {id: groupEntry.id, groupName: groupEntry.name, project:projectEntry}
                    groupNameProjectPairing.push(result)
                })
            }
        })
        setLoading(false)
        return groupNameProjectPairing
    }

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display: 'HOME', to: HOME, active: true}]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Welcome {first_name}</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            {loading ? <Spinner /> :
                !projectGroupPairings.length ?
                    <NoContent buttonText='Go to groups overview' redirect={GROUPS} text='You have not created or been granted access to a group/project yet.' /> : (
                        <>
                            <ProjectAccessContainer>
                                <HomePageText>Your current projects</HomePageText>
                                <HomeFilterDropdown filterString={filterString} setFilterString={setFilterString} />
                            </ProjectAccessContainer>
                            {renderPairings()}
                        </>
                    )}
        </AuthenticatedPageContainer>
    )
}

export default Home


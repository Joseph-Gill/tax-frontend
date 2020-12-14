import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import BreadCrumb from '../../components/BreadCrumb'
import HomeGroup from './HomeGroup'
import Spinner from '../../components/Spinner'
import GroupFilter from './GroupFilter'
import {getProfileAction} from '../../store/profile/actions'
import {resetGroup} from '../../store/group/actions'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import {CardTitleText, HomePageText} from '../../style/text'
import {NoFilterResultsContainer, NoFilterResultText, NoFilterTextContainer, ProjectAccessContainer} from './styles'
import {GROUPS, HOME} from '../../routes/paths'
import noResults from '../../assets/icons/stark_no_filter_results.png'
import NoContent from '../../components/NoContent'
import {resetProject} from '../../store/project/actions'


const Home = ({history}) => {
    const dispatch = useDispatch()
    const first_name = useSelector(state => state.userLoginReducer.user.first_name)
    const [filterString, setFilterString] = useState('')
    const [projectGroupPairings, setProjectGroupPairings] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async function getProfileCreateParing() {
            setLoading(true)
            dispatch(resetGroup())
            dispatch(resetProject())
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
            return (
                <NoFilterResultsContainer>
                    <img alt='no results' src={noResults} />
                    <CardTitleText>Sorry, no result found</CardTitleText>
                    <NoFilterTextContainer>
                        <NoFilterResultText>What you searched was unfortunately</NoFilterResultText>
                        <NoFilterResultText>not found or doesn&apos;t exist.</NoFilterResultText>
                    </NoFilterTextContainer>
                </NoFilterResultsContainer> )
        }
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
                                <GroupFilter filterString={filterString} setFilterString={setFilterString} />
                            </ProjectAccessContainer>
                            {renderPairings()}
                        </>
                    )}
        </AuthenticatedPageContainer>
    )
}

export default Home


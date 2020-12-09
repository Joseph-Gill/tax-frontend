import React, {useEffect, useRef, useState} from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {getProfileAction} from '../../store/profile/actions'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import HomeGroup from './HomeGroup'
import {HomePageText} from '../../style/text'
import {AuthenticatedButtonLargest} from '../../style/buttons'
import Spinner from '../../components/Spinner'
import GroupFilter from './GroupFilter'
import { v4 as uuidv4 } from 'uuid'
import {NoAccessContainer, ProjectAccessContainer} from './styles'


const Home = () => {
    const dispatch = useDispatch()
    const first_name = useSelector(state => state.userLoginReducer.user.first_name)
    const user_profile = useSelector(state => state.profileReducer)
    let filter = useRef('')
    const [projectGroupPairings, setProjectGroupPairings] = useState([])

    useEffect(() => {
        (async function getProfileCreateParing() {
            const response = await dispatch(getProfileAction())
            setProjectGroupPairings([...createGroupProjectPairing(response.groups)])
        })();
    }, [dispatch])


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
        return groupNameProjectPairing
    }

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[{'HOME': '/home'}]} />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Welcome {first_name}</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            {!user_profile.loaded ? <Spinner /> :
                !projectGroupPairings.length ? (
                    <NoAccessContainer>
                        <HomePageText>You have not created or been granted access to a project yet.</HomePageText>
                        <AuthenticatedButtonLargest>Go to groups overview</AuthenticatedButtonLargest>
                    </NoAccessContainer>) : (
                        <>
                            <ProjectAccessContainer>
                                <HomePageText>Your current projects</HomePageText>
                                <GroupFilter filter={filter} />
                            </ProjectAccessContainer>
                            {projectGroupPairings.map(entry => <HomeGroup groupName={entry.groupName} key={uuidv4()} project={entry.project} />)}
                        </>
                    )}
        </AuthenticatedPageContainer>
    )
}

export default Home


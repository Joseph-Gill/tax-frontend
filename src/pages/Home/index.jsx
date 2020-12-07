import React, {useEffect} from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {getProfileAction} from '../../store/profile/actions'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import NoGroups from './NoGroups'
import HomeGroup from './HomeGroup'
import {HomePageText} from '../../style/text'
import {AuthenticatedButtonLargest} from '../../style/buttons'
import styled from 'styled-components/macro'
import Spinner from '../../components/Spinner'

const ProjectOrNoAccessContainer = styled.div`
  width: 860px;
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    margin-bottom: 20px;
  }
`


const Home = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.userLoginReducer.accessToken)
    const first_name = useSelector(state => state.userLoginReducer.user.first_name)
    const user_profile = useSelector(state => state.profileReducer)

    useEffect(() => {
        dispatch(getProfileAction(token))
    }, [])

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[{'HOME': '/home'}]} />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Welcome {first_name}</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            {!user_profile.loaded ? <Spinner /> :
                !user_profile.profile.groups.length ? (
                    <ProjectOrNoAccessContainer>
                        <HomePageText>You have not created or been granted access to a group/project yet.</HomePageText>
                        <AuthenticatedButtonLargest>Go to groups overview</AuthenticatedButtonLargest>
                    </ProjectOrNoAccessContainer>) : (
                        <ProjectOrNoAccessContainer>
                            <HomePageText>Your current projects</HomePageText>

                        </ProjectOrNoAccessContainer>)}
        </AuthenticatedPageContainer>
    )

}

export default Home


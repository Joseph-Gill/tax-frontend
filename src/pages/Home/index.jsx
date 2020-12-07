import React, {useEffect} from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {getProfileAction} from '../../store/profile/actions'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import NoGroups from './NoGroups'
import HomeGroup from './HomeGroup'


const Home = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.userLoginReducer.accessToken)
    const first_name = useSelector(state => state.userLoginReducer.user.first_name)
    const profile = useSelector(state => state.profileReducer)

    useEffect(() => {
        dispatch(getProfileAction(token))
    }, [])

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[{'HOME': '/home'}]} />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Welcome {first_name}</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            {/*{true && <NoGroups />}*/}
            <HomeGroup />
        </AuthenticatedPageContainer>
    )

}

export default Home


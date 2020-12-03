import React, {useEffect} from 'react'
import {AuthenticatedPageContainer, BasePageContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {getProfileAction} from '../../store/profile/actions'
import {useDispatch, useSelector} from 'react-redux'


const Home = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.userLoginReducer.accessToken)
    const profile = useSelector(state => state.profileReducer)

    useEffect(() => {
        dispatch(getProfileAction(token))
    }, [])

    return (
        <BasePageContainer>
            <AuthenticatedPageContainer>
                <BreadCrumb breadCrumbArray={[{'HOME': '/home'}]} />
                <p>Home</p>
            </AuthenticatedPageContainer>
        </BasePageContainer>
    )

}

export default Home


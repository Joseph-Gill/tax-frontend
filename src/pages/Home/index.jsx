import React from 'react'
import {AuthenticatedPageContainer, BasePageContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'


const Home = () => {
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

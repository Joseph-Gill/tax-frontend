import React from 'react'
import {LinkBase} from '../../style/links'
import {BasePageContainer} from '../../style/containers'
import {Title} from '../../style/titles'

const LandingPage = () => {
    return (
        <BasePageContainer>
            <Title>Landing Page</Title>
            <LinkBase to='/login'>Login</LinkBase>
        </BasePageContainer>
    )
}

export default LandingPage

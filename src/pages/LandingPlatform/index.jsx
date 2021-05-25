import React from 'react'
import ComingSoon from './ComingSoon'
import PlatformInfo from './PlatformInfo'
import LandingFooter from '../../components/LandingFooter'
import {LandingPageContainer} from '../../style/containers'
import {PlatformComingSoonContainer} from './styles'


const LandingPlatform = () => {
    return (
        <LandingPageContainer>
            <PlatformInfo />
            <PlatformComingSoonContainer>
                <ComingSoon />
            </PlatformComingSoonContainer>
            <LandingFooter />
        </LandingPageContainer>
    )
}

export default LandingPlatform

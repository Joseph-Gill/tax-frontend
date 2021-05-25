import React from 'react'
import ComingSoonTool from './ComingSoonTool'
import ComingSoonCalculator from './ComingSoonCalculator'
import {ComingSoonCardContainer, ComingSoonContainer} from './styles'


const ComingSoon = () => {
    return (
        <ComingSoonContainer>
            <h2>Coming soon...</h2>
            <ComingSoonCardContainer>
                <ComingSoonTool />
                <ComingSoonCalculator />
            </ComingSoonCardContainer>
        </ComingSoonContainer>
    )
}

export default ComingSoon

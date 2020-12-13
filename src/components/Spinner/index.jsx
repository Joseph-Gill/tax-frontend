import React, {useState} from 'react'
import {BeatLoader} from 'react-spinners'
import styled from 'styled-components/macro'
import {animated, useSpring} from 'react-spring'


const SpinnerContainer = styled(animated.div)`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.43);
    border-radius: 8px;
    padding-left: 200px;
`

const Spinner = () => {
    const [loading] = useState(true)
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <SpinnerContainer style={props}>
            <BeatLoader
                color="#00709F"
                loading={loading}
                size={30}
            />
        </SpinnerContainer>
    )
}

export default Spinner

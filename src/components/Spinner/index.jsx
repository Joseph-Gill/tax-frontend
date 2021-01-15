import React, {useState} from 'react'
import {BeatLoader} from 'react-spinners'
import {useSpring} from 'react-spring'
import {SpinnerContainer} from './styles'


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

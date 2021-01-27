import React from 'react'
import {useSpring} from 'react-spring'
import {LoadingContainer} from './styles'
import './styles.css'

//Used by components that do not want a fullscreen loading image
const Loading = () => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <LoadingContainer style={props}>
            <div className='lds-ellipsis'>
                <div />
                <div />
                <div />
                <div />
            </div>
        </LoadingContainer>
    )
}

export default Loading

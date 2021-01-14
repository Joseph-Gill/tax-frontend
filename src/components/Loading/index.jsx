import React from 'react'
import './styles.css'
import {LoadingContainer} from './styles'
import {useSpring} from 'react-spring'


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

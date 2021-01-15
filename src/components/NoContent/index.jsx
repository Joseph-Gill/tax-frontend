import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSpring} from 'react-spring'
import {HomePageText} from '../../style/text'
import {NoAccessContainer, NoContentButton} from './styles'


const NoContent = ({buttonText, redirect, text}) => {
    const history = useHistory()
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <NoAccessContainer style={props}>
            <HomePageText>{text}</HomePageText>
            <NoContentButton onClick={() => history.push(redirect)} redirect={redirect}>{buttonText}</NoContentButton>
        </NoAccessContainer>
    )
}

export default NoContent

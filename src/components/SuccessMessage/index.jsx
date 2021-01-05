import React from 'react'
import check from '../../assets/icons/stark_success_message_check.svg'
import styled from 'styled-components/macro'
import { useHistory} from 'react-router-dom'
import {animated, useSpring} from 'react-spring'


const SuccessContainer = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background: rgba(0,0,0,0.69);
    color: ${props => props.theme.primaryBlueLight};
    font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 60px 40px 60px 200px;
    text-align: center;
    z-index: 999;
`

const SuccessMessage = ({message, redirect}) => {
    const history = useHistory()
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    setTimeout(() => {
        history.push(`${redirect}`)
    }, 3000)

    return (
        // eslint-disable-next-line react/forbid-component-props
        <SuccessContainer style={props}>
            {message}
            <img
                alt="check icon"
                src={check}
            />
        </SuccessContainer>
    )

}

export default SuccessMessage

import React from 'react'
import { useHistory} from 'react-router-dom'
import {useSpring} from 'react-spring'
import check from '../../assets/icons/stark_success_message_check.svg'
import {SuccessContainer} from './styles'


const SuccessMessage = ({message, redirect}) => {
    const history = useHistory()
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    setTimeout(() => {
        history.push(`${redirect}`)
    }, 1500)

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

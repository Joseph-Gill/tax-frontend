import React from 'react'
import {useSpring} from 'react-spring'
import styled from 'styled-components/macro'


const GroupCardContainerV2 = styled.div`
    height: 255px;
    width: 415px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    box-shadow: 0 0 20px ${props => props.theme.boxShadowColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px;

    :hover {
        transition: 167ms;
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        border: 1px solid ${props => props.theme.primaryBlue};
        cursor: pointer;
    }
`


const GroupCardV2 = () => {

    //From react-spring, causes to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <GroupCardContainerV2 style={props}>
            Group
        </GroupCardContainerV2>
    )
}

export default GroupCardV2

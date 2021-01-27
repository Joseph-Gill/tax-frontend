import React from 'react'
import {useSpring} from 'react-spring'
import {CardInfoText, CardTitleText} from '../../../style/text'
import {DisplayCardContainer, DisplayCardImageContainer} from './styling'


const DisplayCard = ({type, image, content, redirectOnClickHandler}) => {

    //From react-spring, causes component to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <DisplayCardContainer onClick={() => redirectOnClickHandler(type)} style={props}>
            <DisplayCardImageContainer>
                <img alt={type} src={image} />
            </DisplayCardImageContainer>
            <CardTitleText>{type}</CardTitleText>
            <CardInfoText>
                {type === 'Organization Chart' ? `${content.length} Entities` : type === 'Projects' ? `${content.length} Projects` : `${content.length} Members`}
            </CardInfoText>
        </DisplayCardContainer>
    )
}

export default DisplayCard

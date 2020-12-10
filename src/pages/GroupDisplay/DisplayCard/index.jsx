import React from 'react'
import {CardInfoText, CardTitleText} from '../../../style/text'
import {DisplayCardContainer, DisplayCardImageContainer} from './styling'


const DisplayCard = ({type, image, content, redirectOnClickHandler}) => {

    return (
        <DisplayCardContainer onClick={() => redirectOnClickHandler(type)}>
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

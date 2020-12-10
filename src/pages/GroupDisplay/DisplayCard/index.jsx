import React from 'react'
import styled from 'styled-components/macro'
import {CardInfoText, CardTitleText} from '../../../style/text'


const DisplayCardContainer = styled.div`
    width: 272px;
    height: 250px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const DisplayCardImageContainer = styled.div`
    width: 240px;
    height: 155px;
    background: ${props => props.theme.graySix};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
`

const DisplayCard = ({type, image, content}) => {
    return (
        <DisplayCardContainer>
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

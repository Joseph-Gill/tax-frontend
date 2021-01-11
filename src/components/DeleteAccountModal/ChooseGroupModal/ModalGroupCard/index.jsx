import React from 'react'
import styled from 'styled-components/macro'
import placeholderImage from '../../../../assets/icons/stark_modal_group_card_placeholder_image.svg'


const ModalGroupCardContainer = styled.div`
    width: 256px;
    height: 84.84px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    padding: 15px;

    :hover {
        cursor: pointer;
    }
`

const ModalGroupCardImage = styled.img`
    width: 85px;
    height: 54px;
    margin-right: 15px;
`

const ModalGroupCardText = styled.h2`
    font-family: ${props => props.theme.spartanFontFamily};
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.grayOne};
`


const ModalGroupCard = ({group, history}) => {
    return (
        <ModalGroupCardContainer>
            <ModalGroupCardImage
                alt='group image'
                src={group.avatar ? group.avatar : placeholderImage}
            />
            <ModalGroupCardText>{group.name}</ModalGroupCardText>
        </ModalGroupCardContainer>
    )
}

export default ModalGroupCard

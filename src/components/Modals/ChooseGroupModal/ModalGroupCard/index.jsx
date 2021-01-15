import React from 'react'
import {GROUPS} from '../../../../routes/paths'
import placeholderImage from '../../../../assets/icons/stark_modal_group_card_placeholder_image.svg'
import {ModalGroupCardContainer, ModalGroupCardImage, ModalGroupCardText} from './styles'


const ModalGroupCard = ({group, history, setShowChooseGroup}) => {
    const clickGroupCardHandler = () => {
        history.push(`${GROUPS}/${group.id}/`)
        setShowChooseGroup(false)
    }

    return (
        <ModalGroupCardContainer onClick={clickGroupCardHandler}>
            <ModalGroupCardImage
                alt='group image'
                src={group.avatar ? group.avatar : placeholderImage}
            />
            <ModalGroupCardText>{group.name}</ModalGroupCardText>
        </ModalGroupCardContainer>
    )
}

export default ModalGroupCard

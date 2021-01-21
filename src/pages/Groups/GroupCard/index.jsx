import React from 'react'
import groupImagePH from '../../../assets/icons/stark_group_card_image_ph.png'
import {CardInfoText, CardTitleText} from '../../../style/text'
import {GroupAvatarImage, GroupCardContainer, GroupCardInfoContainer} from './styles'


const GroupCard = ({group, history}) => {
    return (
        <GroupCardContainer onClick={() => history.push(`/groups/${group.id}/`)}>
            <GroupAvatarImage alt='group' src={group.avatar ? group.avatar : groupImagePH} />
            <CardTitleText>{group.name}</CardTitleText>
            <GroupCardInfoContainer>
                <CardInfoText>{`${group.projects.length} Projects`}</CardInfoText>
                <CardInfoText>{`${group.users.length} Members`}</CardInfoText>
            </GroupCardInfoContainer>
        </GroupCardContainer>
    )
}

export default GroupCard

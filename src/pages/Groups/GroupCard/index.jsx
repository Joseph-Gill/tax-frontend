import React from 'react'
import {useHistory} from 'react-router-dom'
import groupImagePH from '../../../assets/icons/stark_group_card_image_ph.png'
import {GroupCardContainer, GroupCardInfoContainer, GroupCardTitleText, GroupInfoText} from './styles'


const GroupCard = ({group}) => {
    const history = useHistory()

    return (
        <GroupCardContainer onClick={() => history.push(`/groups/${group.id}/`)}>
            <img alt='group' src={groupImagePH} />
            <GroupCardTitleText>{group.name}</GroupCardTitleText>
            <GroupCardInfoContainer>
                <GroupInfoText>{`${group.projects.length} Projects`}</GroupInfoText>
                <GroupInfoText>{`${group.users.length} Members`}</GroupInfoText>
            </GroupCardInfoContainer>
        </GroupCardContainer>
    )
}

export default GroupCard

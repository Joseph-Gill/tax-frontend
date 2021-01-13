import React from 'react'
import groupImagePH from '../../../assets/icons/stark_group_card_image_ph.png'
import {GroupAvatarImage, GroupCardContainer, GroupCardInfoContainer} from './styles'
import {CardInfoText, CardTitleText} from '../../../style/text'
import {useSpring} from 'react-spring'


const GroupCard = ({group, history}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <GroupCardContainer onClick={() => history.push(`/groups/${group.id}/`)} style={props}>
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

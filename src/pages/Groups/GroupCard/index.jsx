import React from 'react'
import {useHistory} from 'react-router-dom'
import groupImagePH from '../../../assets/icons/stark_group_card_image_ph.png'
import {GroupCardContainer, GroupCardInfoContainer} from './styles'
import {CardInfoText, CardTitleText} from '../../../style/text'
import {useSpring} from 'react-spring'


const GroupCard = ({group}) => {
    const history = useHistory()
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <GroupCardContainer onClick={() => history.push(`/groups/${group.id}/`)} style={props}>
            <img alt='group' src={groupImagePH} />
            <CardTitleText>{group.name}</CardTitleText>
            <GroupCardInfoContainer>
                <CardInfoText>{`${group.projects.length} Projects`}</CardInfoText>
                <CardInfoText>{`${group.users.length} Members`}</CardInfoText>
            </GroupCardInfoContainer>
        </GroupCardContainer>
    )
}

export default GroupCard

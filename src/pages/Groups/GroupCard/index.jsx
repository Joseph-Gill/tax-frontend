import React from 'react'
import styled from 'styled-components/macro'
import groupImagePH from '../../../assets/icons/stark_group_card_image_ph.png'
import {HomeGroupText, HomePageText} from '../../../style/text'


const GroupCardContainer = styled.div`
    height: 245px;
    width: 256px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.primaryBlue};
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px 15px 18px 15px;
`

const GroupCardInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const GroupCardTitleText = styled(HomePageText)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;
    margin-top: 16px;
`

const GroupInfoText = styled(HomeGroupText)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;
`

const GroupCard = ({group}) => {
    return (
        <GroupCardContainer>
            <img alt='group image' src={groupImagePH} />
            <GroupCardTitleText>{group.name}</GroupCardTitleText>
            <GroupCardInfoContainer>
                <GroupInfoText>{`${group.projects.length} Projects`}</GroupInfoText>
                <GroupInfoText>{`${group.users.length} Members`}</GroupInfoText>
            </GroupCardInfoContainer>
        </GroupCardContainer>
    )
}

export default GroupCard

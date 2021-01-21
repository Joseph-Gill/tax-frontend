import React from 'react'
import {ADD_GROUP, GROUPS} from '../../../routes/paths'
import addGroup from '../../../assets/icons/stark_add_group.svg'
import {CreateGroupCardContainer, CreateGroupImage, CreateGroupText, CreateGroupTextContainer} from './styles'


const CreateGroupCard = ({history}) => {

    return (
        <CreateGroupCardContainer onClick={() => history.push(`${GROUPS}${ADD_GROUP}`)}>
            <CreateGroupImage alt='add' src={addGroup} />
            <CreateGroupTextContainer>
                <CreateGroupText>Create</CreateGroupText>
                <CreateGroupText>New Group</CreateGroupText>
            </CreateGroupTextContainer>
        </CreateGroupCardContainer>
    )
}

export default CreateGroupCard

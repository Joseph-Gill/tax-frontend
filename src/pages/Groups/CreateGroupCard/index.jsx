import React from 'react'
import addGroup from '../../../assets/icons/stark_add_group.svg'
import {CreateGroupCardContainer, CreateGroupImage, CreateGroupText, CreateGroupTextContainer} from './styles'
import {ADD_GROUP, GROUPS} from '../../../routes/paths'


const CreateGroupCard = ({history}) => {

    return (
        <CreateGroupCardContainer>
            <CreateGroupImage alt='add' onClick={() => history.push(`${GROUPS}${ADD_GROUP}`)} src={addGroup} />
            <CreateGroupTextContainer>
                <CreateGroupText>Create</CreateGroupText>
                <CreateGroupText>New Group</CreateGroupText>
            </CreateGroupTextContainer>
        </CreateGroupCardContainer>
    )
}

export default CreateGroupCard

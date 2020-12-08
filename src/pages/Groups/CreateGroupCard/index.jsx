import React from 'react'
import addGroup from '../../../assets/icons/stark_add_group.svg'
import {CreateGroupCardContainer, CreateGroupImage, CreateGroupText, CreateGroupTextContainer} from './styles'


const CreateGroupCard = () => {
    return (
        <CreateGroupCardContainer>
            <CreateGroupImage alt='add' src={addGroup} />
            <CreateGroupTextContainer>
                <CreateGroupText>Create</CreateGroupText>
                <CreateGroupText>New Group</CreateGroupText>
            </CreateGroupTextContainer>
        </CreateGroupCardContainer>
    )
}

export default CreateGroupCard

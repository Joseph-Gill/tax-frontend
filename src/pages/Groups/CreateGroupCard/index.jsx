import React from 'react'
import {useHistory} from 'react-router-dom'
import addGroup from '../../../assets/icons/stark_add_group.svg'
import {CreateGroupCardContainer, CreateGroupImage, CreateGroupText, CreateGroupTextContainer} from './styles'


const CreateGroupCard = () => {
    const history = useHistory()

    return (
        <CreateGroupCardContainer>
            <CreateGroupImage alt='add' onClick={() => history.push('/groups/create')} src={addGroup} />
            <CreateGroupTextContainer>
                <CreateGroupText>Create</CreateGroupText>
                <CreateGroupText>New Group</CreateGroupText>
            </CreateGroupTextContainer>
        </CreateGroupCardContainer>
    )
}

export default CreateGroupCard

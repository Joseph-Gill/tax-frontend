import React from 'react'
import {ModalText} from '../../../../style/text'
import {AddMemberCenterTextContainer} from '../styles'


const AddMemberCenterText = () => {
    return (
        <AddMemberCenterTextContainer>
            <ModalText>For a New User:</ModalText>
            <ModalText>Must complete their registration email, to be added in a group.</ModalText>
            <ModalText>For an Existing User:</ModalText>
            <ModalText>Will be added to group immediately.</ModalText>
        </AddMemberCenterTextContainer>
    )
}

export default AddMemberCenterText

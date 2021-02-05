import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {Ellipse} from '../../../../style/images'
import {ModalText} from '../../../../style/text'
import {AddDeleteModalTextContainer} from '../../styles'


const DeleteTaskText = () => {
    return (
        <AddDeleteModalTextContainer>
            <Ellipse alt='ellipse' src={ellipse} />
            <ModalText>All documentation tied to this Task will be deleted</ModalText>
        </AddDeleteModalTextContainer>
    )
}

export default DeleteTaskText

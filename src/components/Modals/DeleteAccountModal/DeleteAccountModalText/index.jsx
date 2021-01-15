import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {Ellipse} from '../../../../style/images'
import {ModalText} from '../../../../style/text'
import {AddDeleteModalTextContainer} from '../../styles'


const DeleteAccountModalText = () => {
    return (
        <div>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>Your access to all groups will be deleted</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>Your access to all projects will be deleted</ModalText>
            </AddDeleteModalTextContainer>
        </div>
    )
}

export default DeleteAccountModalText

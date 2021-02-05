import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {ModalText} from '../../../../style/text'
import {Ellipse} from '../../../../style/images'
import {AddDeleteModalTextContainer} from '../../styles'


const DeleteDocumentText = ({documentName}) => {
    return (
        <AddDeleteModalTextContainer>
            <Ellipse alt='ellipse' src={ellipse} />
            <ModalText>{documentName} will be deleted</ModalText>
        </AddDeleteModalTextContainer>
    )
}

export default DeleteDocumentText

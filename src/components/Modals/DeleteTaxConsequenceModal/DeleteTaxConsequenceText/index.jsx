import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {Ellipse} from '../../../../style/images'
import {ModalText} from '../../../../style/text'
import {AddDeleteModalTextContainer} from '../../styles'


const DeleteTaxConsequenceText = () => {
    return (
        <AddDeleteModalTextContainer>
            <Ellipse alt='ellipse' src={ellipse} />
            <ModalText>This country consequence will be deleted</ModalText>
        </AddDeleteModalTextContainer>
    )
}

export default DeleteTaxConsequenceText

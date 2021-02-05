import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {Ellipse} from '../../../../style/images'
import {ModalText} from '../../../../style/text'
import {AddDeleteModalTextContainer} from '../../styles'


const SetNotReviewedText = () => {
    return (
        <AddDeleteModalTextContainer>
            <Ellipse alt='ellipse' src={ellipse} />
            <ModalText>This tax consequence will be marked as not reviewed</ModalText>
        </AddDeleteModalTextContainer>
    )
}

export default SetNotReviewedText

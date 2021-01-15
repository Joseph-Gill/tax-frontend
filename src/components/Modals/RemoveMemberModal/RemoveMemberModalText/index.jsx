import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {Ellipse} from '../../../../style/images'
import {ModalText} from '../../../../style/text'
import {AddDeleteModalTextContainer} from '../../styles'


const RemoveMemberModalText = () => {
    return (
        <div>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>User will lose access to your group.</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>User will lose access to all group projects.</ModalText>
            </AddDeleteModalTextContainer>
        </div>
    )
}

export default RemoveMemberModalText

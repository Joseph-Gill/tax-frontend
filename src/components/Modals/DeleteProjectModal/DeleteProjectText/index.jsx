import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {ModalText} from '../../../../style/text'
import {Ellipse} from '../../../../style/images'
import {AddDeleteModalTextContainer} from '../../styles'


const DeleteProjectText = () => {
    return (
        <>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>All steps in this project will be deleted</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>All associated entity histories will be deleted</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>All associated tasks to the project will be deleted</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>All associated country consequences to the project will be deleted</ModalText>
            </AddDeleteModalTextContainer>
        </>
    )
}

export default DeleteProjectText

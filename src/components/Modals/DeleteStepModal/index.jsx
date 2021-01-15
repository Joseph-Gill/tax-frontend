import React from 'react'
import {useSpring} from 'react-spring'
import close from '../../../assets/icons/stark_close_icon.svg'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {CloseIcon, Ellipse} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {ModalText} from '../../../style/text'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../../style/buttons'
import {
    AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTextContainer,
    AddDeleteModalTitleContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'


const DeleteStepModal = ({deleteStepHandler, setShowConfirmation}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <DeleteStepReviewTaskModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Are you sure?</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <AddDeleteModalTextContainer>
                    <Ellipse alt='ellipse' src={ellipse} />
                    <ModalText>All saved tax consequences in this step will be deleted</ModalText>
                </AddDeleteModalTextContainer>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowConfirmation(false)}>Cancel</AuthenticatedButtonCancel>
                    <RedLargerButton onClick={deleteStepHandler}>Confirm Delete</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </DeleteStepReviewTaskModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteStepModal

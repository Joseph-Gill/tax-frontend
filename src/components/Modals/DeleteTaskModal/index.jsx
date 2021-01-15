import React from 'react'
import {useSpring} from 'react-spring'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'
import {CloseIcon, Ellipse} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../../style/titles'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {ModalText} from '../../../style/text'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../../style/buttons'


const DeleteTaskModal = ({deleteTaskHandler, setShowDeleteTaskConfirmation}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <DeleteStepReviewTaskModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowDeleteTaskConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Are you sure?</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <AddDeleteModalTextContainer>
                    <Ellipse alt='ellipse' src={ellipse} />
                    <ModalText>All documentation tied to this Task will be deleted</ModalText>
                </AddDeleteModalTextContainer>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowDeleteTaskConfirmation(false)}>Cancel</AuthenticatedButtonCancel>
                    <RedLargerButton onClick={deleteTaskHandler}>Confirm Delete</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </DeleteStepReviewTaskModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteTaskModal

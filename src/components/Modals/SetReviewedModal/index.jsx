import React from 'react'
import {useSpring} from 'react-spring'
import close from '../../../assets/icons/stark_close_icon.svg'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {CloseIcon, Ellipse} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {ModalText} from '../../../style/text'
import {AuthenticatedButtonCancel} from '../../../style/buttons'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer, BlueConfirmReviewedButton, DeleteStepReviewTaskModalInternalContainer} from '../styles'


const SetReviewedModal = ({setReviewedHandler, setShowConfirmation}) => {
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
                    <ModalText>This tax consequence will be marked as reviewed by you</ModalText>
                </AddDeleteModalTextContainer>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowConfirmation(false)}>Cancel</AuthenticatedButtonCancel>
                    <BlueConfirmReviewedButton onClick={setReviewedHandler}>Confirm Reviewed</BlueConfirmReviewedButton>
                </AddDeleteModalButtonContainer>
            </DeleteStepReviewTaskModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default SetReviewedModal

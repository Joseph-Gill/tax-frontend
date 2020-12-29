import React from 'react'
import {useSpring} from 'react-spring'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer, BlueConfirmReviewedButton, DeleteStepReviewModalInternalContainer} from '../styles'
import {CloseIcon, Ellipse} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../../style/titles'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {ModalText} from '../../../style/text'
import {AuthenticatedButtonCancel} from '../../../style/buttons'


const SetReviewedModal = ({setReviewedHandler, setShowConfirmation}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <DeleteStepReviewModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Are you sure?</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>This tax consequence will be marked as reviewed by you</ModalText>
                    </AddDeleteModalTextContainer>
                </div>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowConfirmation(false)}>Cancel</AuthenticatedButtonCancel>
                    <BlueConfirmReviewedButton onClick={setReviewedHandler}>Confirm Reviewed</BlueConfirmReviewedButton>
                </AddDeleteModalButtonContainer>
            </DeleteStepReviewModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default SetReviewedModal

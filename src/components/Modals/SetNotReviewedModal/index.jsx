import React from 'react'
import {useSpring} from 'react-spring'
import close from '../../../assets/icons/stark_close_icon.svg'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {CloseIcon, Ellipse} from '../../../style/images'
import {AuthenticatedPageTitle} from '../../../style/titles'
import {ModalText} from '../../../style/text'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../../style/buttons'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by StepChart for setting tax consequences of a step as not reviewed
const SetNotReviewedModal = ({setNotReviewedHandler, setShowSecondConfirmation}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <DeleteStepReviewTaskModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowSecondConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Are you sure?</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <AddDeleteModalTextContainer>
                    <Ellipse alt='ellipse' src={ellipse} />
                    <ModalText>This tax consequence will be marked as not reviewed</ModalText>
                </AddDeleteModalTextContainer>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowSecondConfirmation(false)}>Cancel</AuthenticatedButtonCancel>
                    <RedLargerButton onClick={setNotReviewedHandler}>Set as Not Reviewed</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </DeleteStepReviewTaskModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default SetNotReviewedModal

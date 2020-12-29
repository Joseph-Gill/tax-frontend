import React from 'react'
import styled from 'styled-components/macro'
import {useSpring} from 'react-spring'
import {AddDeleteModalButtonContainer, AddDeleteModalCloseContainer, AddDeleteModalExternalContainer, AddDeleteModalInternalContainer, AddDeleteModalTextContainer, AddDeleteModalTitleContainer} from '../styles'
import {CloseIcon, Ellipse} from '../../../style/images'
import close from '../../../assets/icons/stark_close_icon.svg'
import {AuthenticatedPageTitle} from '../../../style/titles'
import ellipse from '../../../assets/icons/stark_modal_ellipse.png'
import {ModalText} from '../../../style/text'
import {AuthenticatedButtonCancel, RedLargerButton} from '../../../style/buttons'


const DeleteStepModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 370px;
    height: 240px;
`


const DeleteStepModal = ({deleteStepHandler, setShowConfirmation}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <DeleteStepModalInternalContainer>
                <AddDeleteModalCloseContainer>
                    <CloseIcon alt='close' onClick={() => setShowConfirmation(false)} src={close} />
                </AddDeleteModalCloseContainer>
                <AddDeleteModalTitleContainer>
                    <AuthenticatedPageTitle>Are you sure?</AuthenticatedPageTitle>
                </AddDeleteModalTitleContainer>
                <div>
                    <AddDeleteModalTextContainer>
                        <Ellipse alt='ellipse' src={ellipse} />
                        <ModalText>All saved tax consequences in this step will be deleted</ModalText>
                    </AddDeleteModalTextContainer>
                </div>
                <AddDeleteModalButtonContainer>
                    <AuthenticatedButtonCancel onClick={() => setShowConfirmation(false)}>Cancel</AuthenticatedButtonCancel>
                    <RedLargerButton onClick={deleteStepHandler}>Confirm Delete</RedLargerButton>
                </AddDeleteModalButtonContainer>
            </DeleteStepModalInternalContainer>
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteStepModal

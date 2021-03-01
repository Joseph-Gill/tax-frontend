import React from 'react'
import Draggable from 'react-draggable'
import SetNotReviewedText from './SetNotReviewedText'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by StepChart for setting tax consequences of a step as not reviewed
const SetNotReviewedModal = ({setNotReviewedHandler, setShowSecondConfirmation, showSecondConfirmation}) => {

    const cancelButtonHandler = () => {
        setShowSecondConfirmation(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowSecondConfirmation}
            showModalView={showSecondConfirmation}
        >
            <Draggable>
                <DeleteStepReviewTaskModalInternalContainer>
                    <ModalClose modalDisplay={setShowSecondConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <SetNotReviewedText />
                    <ModalDeleteButtons
                        cancelButtonHandler={cancelButtonHandler}
                        deleteButtonHandler={setNotReviewedHandler}
                        deleteText='Set as Not Reviewed'
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default SetNotReviewedModal

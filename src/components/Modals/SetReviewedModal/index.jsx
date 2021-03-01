import React from 'react'
import Draggable from 'react-draggable'
import SetReviewedText from './SetReviewedText'
import SetReviewedButtons from './SetReviewedButtons'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by StepChart for setting tax consequences of a step as reviewed
const SetReviewedModal = ({setReviewedHandler, setShowConfirmation, showConfirmation}) => {

    const cancelButtonHandler = () => {
        setShowConfirmation(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <ModalExternalContainer
            setModalView={setShowConfirmation}
            showModalView={showConfirmation}
        >
            <Draggable>
                <DeleteStepReviewTaskModalInternalContainer>
                    <ModalClose modalDisplay={setShowConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <SetReviewedText />
                    <SetReviewedButtons
                        cancelButtonHandler={cancelButtonHandler}
                        setReviewedHandler={setReviewedHandler}
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default SetReviewedModal

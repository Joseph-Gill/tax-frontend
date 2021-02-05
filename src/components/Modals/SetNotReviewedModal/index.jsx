import React from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import SetNotReviewedText from './SetNotReviewedText'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import {AddDeleteModalExternalContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by StepChart for setting tax consequences of a step as not reviewed
const SetNotReviewedModal = ({setNotReviewedHandler, setShowSecondConfirmation}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        setShowSecondConfirmation(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
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
        </AddDeleteModalExternalContainer>
    )
}

export default SetNotReviewedModal

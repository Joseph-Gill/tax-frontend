import React from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import SetReviewedText from './SetReviewedText'
import SetReviewedButtons from './SetReviewedButtons'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import {AddDeleteModalExternalContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by StepChart for setting tax consequences of a step as reviewed
const SetReviewedModal = ({setReviewedHandler, setShowConfirmation}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        setShowConfirmation(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
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
        </AddDeleteModalExternalContainer>
    )
}

export default SetReviewedModal

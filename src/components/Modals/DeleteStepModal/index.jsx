import React from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import DeleteStepText from './DeleteStepText'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import {AddDeleteModalExternalContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'

//Used by StepDisplay for deleting steps from a project
const DeleteStepModal = ({deleteStepHandler, setShowConfirmation}) => {

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
                    <DeleteStepText />
                    <ModalDeleteButtons
                        cancelButtonHandler={cancelButtonHandler}
                        deleteButtonHandler={deleteStepHandler}
                        deleteText='Confirm Delete'
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteStepModal

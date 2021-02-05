import React from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import DeleteTaskText from './DeleteTaskText'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalClose from '../ModalComponents/ModalClose'
import ModalDeleteButtons from '../ModalComponents/ModalDeleteButtons'
import {AddDeleteModalExternalContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'


//Used by ProjectTasks for deleting a task from a Step
const DeleteTaskModal = ({deleteTaskHandler, setShowDeleteTaskConfirmation}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        setShowDeleteTaskConfirmation(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <Draggable>
                <DeleteStepReviewTaskModalInternalContainer>
                    <ModalClose modalDisplay={setShowDeleteTaskConfirmation} />
                    <ModalTitle title='Are you sure?' />
                    <DeleteTaskText />
                    <ModalDeleteButtons
                        cancelButtonHandler={cancelButtonHandler}
                        deleteButtonHandler={deleteTaskHandler}
                        deleteText='Confirm Delete'
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </AddDeleteModalExternalContainer>
    )
}

export default DeleteTaskModal

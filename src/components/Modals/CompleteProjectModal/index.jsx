import React from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import CompleteProjectModalText from './CompleteProjectModalText'
import CompleteProjectModalButtons from './CompleteProjectModalButtons'
import {AddDeleteModalExternalContainer, DeleteStepReviewTaskModalInternalContainer} from '../styles'


const CompleteProjectModal = ({completeProjectHandler, setShowCompleteProject}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        setShowCompleteProject(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <Draggable>
                <DeleteStepReviewTaskModalInternalContainer>
                    <ModalClose modalDisplay={setShowCompleteProject} />
                    <ModalTitle title='Are you sure?' />
                    <CompleteProjectModalText />
                    <CompleteProjectModalButtons
                        cancelButtonHandler={cancelButtonHandler}
                        completeProjectHandler={completeProjectHandler}
                    />
                </DeleteStepReviewTaskModalInternalContainer>
            </Draggable>
        </AddDeleteModalExternalContainer>
    )
}

export default CompleteProjectModal

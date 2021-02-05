import React from 'react'
import {useSpring} from 'react-spring'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import RemoveEntityDropdown from './RemoveEntityDropdown'
import ModalRemoveButtons from '../ModalComponents/ModalRemoveButtons'
import {AddDeleteModalExternalContainer, RemoveLinkEntityInternalContainer} from '../styles'


//Used by StepChart for deleting Entities of a StepChart
const RemoveEntityModal = ({entityOptions, entityToRemove, removeEntityHandler, setEntityToRemove,
                               setShowRemoveEntity}) => {

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const cancelButtonHandler = () => {
        setShowRemoveEntity(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <AddDeleteModalExternalContainer style={props}>
            <Draggable>
                <RemoveLinkEntityInternalContainer>
                    <ModalClose modalDisplay={setShowRemoveEntity} />
                    <ModalTitle title='Select the entity to remove' />
                    <RemoveEntityDropdown
                        entityOptions={entityOptions}
                        entityToRemove={entityToRemove}
                        setEntityToRemove={setEntityToRemove}
                    />
                    <ModalRemoveButtons
                        cancelButtonHandler={cancelButtonHandler}
                        removeButtonHandler={removeEntityHandler}
                    />
                </RemoveLinkEntityInternalContainer>
            </Draggable>
        </AddDeleteModalExternalContainer>
    )
}

export default RemoveEntityModal

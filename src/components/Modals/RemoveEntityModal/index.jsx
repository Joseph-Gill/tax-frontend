import React from 'react'
import Draggable from 'react-draggable'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import RemoveEntityDropdown from './RemoveEntityDropdown'
import ModalRemoveButtons from '../ModalComponents/ModalRemoveButtons'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {RemoveLinkEntityInternalContainer} from '../styles'


//Used by StepChart for deleting Entities of a StepChart
const RemoveEntityModal = ({entityOptions, entityToRemove, removeEntityHandler, setEntityToRemove,
                               setShowRemoveEntity, showRemoveEntity}) => {

    const cancelButtonHandler = () => {
        setShowRemoveEntity(false)
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <ModalExternalContainer
            setModalView={setShowRemoveEntity}
            showModalView={showRemoveEntity}
        >
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
        </ModalExternalContainer>
    )
}

export default RemoveEntityModal

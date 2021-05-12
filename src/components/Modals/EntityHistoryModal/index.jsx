import React from 'react'
import Draggable from 'react-draggable'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import styled from 'styled-components/macro'


const EntityHistoryModal = ({entityData, setShowEntityHistory, showEntityHistory}) => {
    return (
        <ModalExternalContainer
            setModalView={setShowEntityHistory}
            showModalView={showEntityHistory}
        >
            <Draggable>
                <div>{entityData.name}</div>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default EntityHistoryModal

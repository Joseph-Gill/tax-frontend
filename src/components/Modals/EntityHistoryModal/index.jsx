import React from 'react'
import Draggable from 'react-draggable'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import styled from 'styled-components/macro'
import {AddDeleteModalInternalContainer} from '../styles'


const EntityHistoryInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 800px;
    height: 500px;
`


const EntityHistoryModal = ({entityData, setShowEntityHistory, showEntityHistory}) => {
    return (
        <ModalExternalContainer
            setModalView={setShowEntityHistory}
            showModalView={showEntityHistory}
        >
            <Draggable>
                <EntityHistoryInternalContainer>
                    {entityData.name}
                </EntityHistoryInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default EntityHistoryModal

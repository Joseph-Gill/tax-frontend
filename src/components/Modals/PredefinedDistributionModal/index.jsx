import React from 'react'
import Draggable from 'react-draggable'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'

const PredefinedDistributionModal = ({setShowPredefinedDistribution, showPredefinedDistribution}) => {
    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedDistribution}
            showModalView={showPredefinedDistribution}
        >
            <Draggable>

            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedDistributionModal

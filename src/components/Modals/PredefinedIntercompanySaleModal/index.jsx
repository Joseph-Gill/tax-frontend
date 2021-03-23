import React from 'react'
import {useDispatch} from 'react-redux'
import Draggable from 'react-draggable'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import {PredefinedModalInternalContainer} from '../styles'
import ModalClose from '../ModalComponents/ModalClose'
import ModalTitle from '../ModalComponents/ModalTitle'
import ModalAddButtons from '../ModalComponents/ModalAddButtons'
import {resetErrors} from '../../../store/errors/actions/errorAction'


const PredefinedIntercompanySaleModal = ({setShowPredefinedIntercompanySale, showPredefinedIntercompanySale}) => {

    const dispatch = useDispatch()

    const handleCancelButton = () => {
        dispatch(resetErrors())
        setShowPredefinedIntercompanySale(false)
    }

    return (
        <ModalExternalContainer
            setModalView={setShowPredefinedIntercompanySale}
            showModalView={showPredefinedIntercompanySale}
        >
            <Draggable>
                <PredefinedModalInternalContainer>
                    <ModalClose modalDisplay={setShowPredefinedIntercompanySale} />
                    <ModalTitle title='Intercompany Sale Step' />
                    <ModalAddButtons
                        cancelHandler={handleCancelButton}
                    />
                </PredefinedModalInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default PredefinedIntercompanySaleModal

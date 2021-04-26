import React from 'react'
import {CancelButton} from '../../../../style/buttons'
import {ButtonContainer, GoToProjectButton} from './styles'


const ViewMoreButtons = ({goToProjectClickHandler, setShowViewMoreModal, showViewMoreModal}) => {
    return (
        <ButtonContainer>
            <CancelButton onClick={() => setShowViewMoreModal(!showViewMoreModal)}>Cancel</CancelButton>
            <GoToProjectButton onClick={goToProjectClickHandler}>Go to Project</GoToProjectButton>
        </ButtonContainer>
    )
}

export default ViewMoreButtons

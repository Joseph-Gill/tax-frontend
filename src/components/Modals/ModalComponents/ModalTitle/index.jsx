import React from 'react'
import {AddDeleteModalTitleContainer} from '../../styles'
import {AuthenticatedPageTitle} from '../../../../style/titles'


const ModalTitle = ({title}) => {
    return (
        <AddDeleteModalTitleContainer>
            <AuthenticatedPageTitle>{title}</AuthenticatedPageTitle>
        </AddDeleteModalTitleContainer>
    )
}

export default ModalTitle

import React from 'react'
import {AuthenticatedPageTitle} from '../../../../style/titles'
import {EditEntityLinkModalTitleContainer} from '../../styles'


const ModalEditTitle = ({title}) => {
    return (
        <EditEntityLinkModalTitleContainer>
            <AuthenticatedPageTitle>{title}</AuthenticatedPageTitle>
        </EditEntityLinkModalTitleContainer>
    )
}

export default ModalEditTitle

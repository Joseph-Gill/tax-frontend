import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {Ellipse} from '../../../../style/images'
import {ModalText} from '../../../../style/text'
import {AddDeleteModalTextContainer} from '../../styles'


const RemoveEntityText = () => {
    return (
        <>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>This permanently deletes the entity and its history</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>To remove an entity and retain its histories, please remove it inside a project</ModalText>
            </AddDeleteModalTextContainer>
        </>
    )
}

export default RemoveEntityText

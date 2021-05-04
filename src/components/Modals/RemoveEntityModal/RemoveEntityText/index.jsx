import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {Ellipse} from '../../../../style/images'
import {ModalText} from '../../../../style/text'
import {AddDeleteModalTextContainer} from '../../styles'
import {GROUPS, PROJECTS} from '../../../../routes/paths'


const RemoveEntityText = ({history}) => {
    return (
        <>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>This permanently deletes the entity and its history</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>{`To remove an entity and retain its history, please remove it inside a `}
                    <span onClick={() => history.push(`${GROUPS}${PROJECTS}`)}>project</span>
                </ModalText>
            </AddDeleteModalTextContainer>
        </>
    )
}

export default RemoveEntityText

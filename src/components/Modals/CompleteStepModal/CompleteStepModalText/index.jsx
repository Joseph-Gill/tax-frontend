import React from 'react'
import ellipse from '../../../../assets/icons/stark_modal_ellipse.png'
import {ModalText} from '../../../../style/text'
import {Ellipse} from '../../../../style/images'
import {AddDeleteModalTextContainer} from '../../styles'
import {CompleteStepTextContainer} from './styles'


const CompleteStepModalText = () => {
    return (
        <>
            <AddDeleteModalTextContainer>
                <ModalText>After marking this Step as completed you can no longer:</ModalText>
            </AddDeleteModalTextContainer>
            <AddDeleteModalTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>Change the description or effective date of the Step.</ModalText>
            </AddDeleteModalTextContainer>
            <CompleteStepTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>Add, remove, or make changes to Country Consequences.</ModalText>
            </CompleteStepTextContainer>
            <CompleteStepTextContainer>
                <Ellipse alt='ellipse' src={ellipse} />
                <ModalText>Add, remove, or make changes to the entities of this Step.</ModalText>
            </CompleteStepTextContainer>
            <CompleteStepTextContainer>
                <ModalText>After completing this Step, the Group organization will be updated to reflect changes made in this Step.</ModalText>
            </CompleteStepTextContainer>
        </>
    )
}

export default CompleteStepModalText

import React from 'react'
import previousActive from '../../assets/icons/stark_step_header_left_active.png'
import nextActive from '../../assets/icons/stark_step_header_right_active.png'
import previousInactive from '../../assets/icons/stark_step_header_left_inactive.png'
import nextInactive from '../../assets/icons/stark_step_header_right_inactive.png'
import {ImageTextStepHeaderContainer, PreviousNextActiveText, PreviousNextArrowLeft, PreviousNextArrowRight, PreviousNextStepHeaderContainer} from './styles'


const PreviousNextStepHeader = ({previous, next}) => {
    return (
        <PreviousNextStepHeaderContainer>
            <ImageTextStepHeaderContainer>
                {previous ? <PreviousNextArrowLeft alt='previous step' src={previousActive} /> : <PreviousNextArrowLeft alt='previous step' src={previousInactive} />}
                <PreviousNextActiveText active={previous}>Previous Step</PreviousNextActiveText>
            </ImageTextStepHeaderContainer>
            <ImageTextStepHeaderContainer>
                <PreviousNextActiveText active={next}>Next Step</PreviousNextActiveText>
                {next ? <PreviousNextArrowRight alt='next step' src={nextActive} /> : <PreviousNextArrowRight alt='next step' src={nextInactive} />}
            </ImageTextStepHeaderContainer>
        </PreviousNextStepHeaderContainer>
    )
}

export default PreviousNextStepHeader

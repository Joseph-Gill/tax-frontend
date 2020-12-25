import React from 'react'
import {useHistory} from 'react-router-dom'
import previousActive from '../../assets/icons/stark_step_header_left_active.png'
import nextActive from '../../assets/icons/stark_step_header_right_active.png'
import previousInactive from '../../assets/icons/stark_step_header_left_inactive.png'
import nextInactive from '../../assets/icons/stark_step_header_right_inactive.png'
import {ImageTextStepHeaderContainer, PreviousNextActiveText, PreviousNextArrowLeft, PreviousNextArrowRight, PreviousNextStepHeaderContainer} from './styles'
import {BEGINNING, DISPLAY_STEP, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import {useDispatch} from 'react-redux'
import {decrementStepToView, incrementStepToView} from '../../store/step/actions'


const PreviousNextStepHeader = ({indexOfStepToDisplay, previous, next, stepBeginning, stepEnding}) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const previousClickHandler = () => {
        if (stepEnding) {
            // Need to add to this Changing the indexOfStepToDisplay to be the last index of steps
            history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
        } else if (!indexOfStepToDisplay) {
            history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)
        } else {
            dispatch(decrementStepToView())
        }
    }

    const nextClickHandler = () => {
        if (stepBeginning) {
            history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
        } else {
            dispatch(incrementStepToView())
        }
    }

    return (
        <PreviousNextStepHeaderContainer>
            {previous ? (
                <ImageTextStepHeaderContainer active={previous} onClick={previousClickHandler}>
                    <PreviousNextArrowLeft alt='previous step' src={previousActive} />
                    <PreviousNextActiveText active={previous}>Previous Step</PreviousNextActiveText>
                </ImageTextStepHeaderContainer> ) : (
                    <ImageTextStepHeaderContainer active={previous}>
                        <PreviousNextArrowLeft alt='previous step' src={previousInactive} />
                        <PreviousNextActiveText active={previous}>Previous Step</PreviousNextActiveText>
                    </ImageTextStepHeaderContainer>)}
            {next ? (
                <ImageTextStepHeaderContainer active={next} onClick={nextClickHandler}>
                    <PreviousNextActiveText active={next}>Next Step</PreviousNextActiveText>
                    <PreviousNextArrowRight alt='next step' src={nextActive} />
                </ImageTextStepHeaderContainer> ) : (
                    <ImageTextStepHeaderContainer active={next}>
                        <PreviousNextActiveText active={next}>Next Step</PreviousNextActiveText>
                        <PreviousNextArrowRight alt='next step' src={nextInactive} />
                    </ImageTextStepHeaderContainer>)}
        </PreviousNextStepHeaderContainer>
    )
}

export default PreviousNextStepHeader

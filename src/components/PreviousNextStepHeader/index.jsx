import React from 'react'
import {useHistory} from 'react-router-dom'
import previousActive from '../../assets/icons/stark_step_header_left_active.png'
import nextActive from '../../assets/icons/stark_step_header_right_active.png'
import previousInactive from '../../assets/icons/stark_step_header_left_inactive.png'
import nextInactive from '../../assets/icons/stark_step_header_right_inactive.png'
import {ImageTextStepHeaderContainer, PreviousNextActiveText, PreviousNextArrowLeft, PreviousNextArrowRight, PreviousNextStepHeaderContainer} from './styles'
import {BEGINNING, DISPLAY_STEP, ENDING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import {useDispatch, useSelector} from 'react-redux'
import {decrementStepToView, incrementStepToView, skipToSpecifiedStep} from '../../store/step/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'


const PreviousNextStepHeader = ({indexOfStepToDisplay, previous, next, stepBeginning, stepEnding}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const steps = useSelector(state => state.stepReducer.steps)

    const previousClickHandler = () => {
        dispatch(resetErrors())
        if (stepEnding) {
            if (!steps.length) {
                history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)
            } else {
                dispatch(skipToSpecifiedStep(steps.length - 1))
                history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
            }
        } else if (!indexOfStepToDisplay) {
            history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)
        } else {
            dispatch(decrementStepToView())
        }
    }

    const nextClickHandler = () => {
        dispatch(resetErrors())
        if (stepBeginning){
            if (!steps.length) {
                history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)
            } else {
                history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
            }
        } else if (steps.length === indexOfStepToDisplay + 1) {
            history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)
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

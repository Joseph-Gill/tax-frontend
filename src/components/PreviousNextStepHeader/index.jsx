import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {decrementStepToView, incrementStepToView, skipToSpecifiedStep} from '../../store/step/actions'
import {resetErrors} from '../../store/errors/actions/errorAction'
import {BEGINNING, DISPLAY_STEP, ENDING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import previousActive from '../../assets/icons/stark_step_header_left_active.png'
import nextActive from '../../assets/icons/stark_step_header_right_active.png'
import previousInactive from '../../assets/icons/stark_step_header_left_inactive.png'
import nextInactive from '../../assets/icons/stark_step_header_right_inactive.png'
import {ImageTextStepHeaderContainer, PreviousNextActiveText, PreviousNextArrowLeft, PreviousNextArrowRight, PreviousNextStepHeaderContainer} from './styles'


//Used by StepDisplay to provide the header where users click to next / previous step of the current step
const PreviousNextStepHeader = ({indexOfStepToDisplay, previous, next, stepBeginning, stepEnding}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const steps = useSelector(state => state.stepReducer.steps)

    const previousClickHandler = () => {
        dispatch(resetErrors())
        //If the component calling this is StepEnding...
        if (stepEnding) {
            //If the are no steps, previous pushes to StepBeginning
            if (!steps.length) {
                history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)
            //Previous changes the indexOfStepToDisplay to the last Step and pushes to StepDisplay
            } else {
                dispatch(skipToSpecifiedStep(steps.length - 1))
                history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
            }
        //If the component calling isn't StepEnding and indexOfStepToDisplay is 0, previous pushes to StepDisplay
        } else if (!indexOfStepToDisplay) {
            history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)
        //Reduce indexOfStepToDisplay by 1, showing the previous step
        } else {
            dispatch(decrementStepToView())
        }
    }

    const nextClickHandler = () => {
        dispatch(resetErrors())
        //If the component calling this is StepBeginning...
        if (stepBeginning){
            //If the are no steps, next pushes to StepEnding
            if (!steps.length) {
                history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)
            //Next pushes to StepDisplay
            } else {
                history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
            }
        //If indexOfStepToDisplay is the last step, next pushes to StepEnding
        } else if (steps.length === indexOfStepToDisplay + 1) {
            history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)
        //Increase indexOfStepToDisplay by 1, showing the next step
        } else {
            dispatch(incrementStepToView())
        }
    }

    return (
        //The active prop controls styling of the link in styles.js
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

import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import {skipToSpecifiedStep} from '../../store/step/actions'
import {scrollContainer} from '../../helpers'
import scrollLeft from '../../assets/icons/tax_cheetah_scroll_left_icon.svg'
import scrollRight from '../../assets/icons/tax_cheetah_scroll_right_icon.svg'
import {BEGINNING, DISPLAY_STEP, ENDING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import {ScrollButtonContainer} from '../../style/containers'
import {StepDisplayContainer, StepDisplayProgressBar, StepNode, StepProgressBarButtonContainer} from './styles'


const StepDisplayFooterV2 = ({endingNode, history, indexOfStepToDisplay, project, steps}) => {
    const dispatch = useDispatch()
    const ref = useRef(null)

    const stepNodeClickHandler = index => {
        dispatch(skipToSpecifiedStep(index))
        history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
    }

    //Used to create the step node entities for StepDisplay footer, varies depending if the component calling it
    //is StepDisplay/StepBeginning or StepEnding
    const renderSteps = () => (
        steps.map((step, index) => (
            <StepNode
                isactive={indexOfStepToDisplay === undefined ? 0 : index <= indexOfStepToDisplay ? 1 : 0}
                iscomplete={indexOfStepToDisplay === undefined ? 0 : index > indexOfStepToDisplay ? 0 : step.status === 'Completed' ? 1 : 0}
                key={step.id}
                onClick={() => stepNodeClickHandler(step.number - 1)}
            >{`Step ${step.number}`}
            </StepNode>
        ))
    )

    const renderStepsForStepEnding = () => (
        steps.map(step => (
            <StepNode
                isactive={1}
                iscomplete={step.status === 'Completed' ? 1 : 0}
                key={step.id}
                onClick={() => stepNodeClickHandler(step.number - 1)}
            >{`Step ${step.number}`}
            </StepNode>
        ))
    )


    return (
        <StepProgressBarButtonContainer>
            <ScrollButtonContainer onClick={() => scrollContainer(ref,-400)}>
                <img alt='scroll left' src={scrollLeft} />
            </ScrollButtonContainer>
            <StepDisplayContainer ref={ref}>
                <StepDisplayProgressBar>
                    <StepNode
                        beginningNode
                        onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)}
                    >Beginning
                    </StepNode>
                    {endingNode ? renderStepsForStepEnding() : renderSteps()}
                    <StepNode
                        endingNode={endingNode}
                        iscomplete={project.status === 'Completed' ? 1 : 0}
                        onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)}
                    >Ending
                    </StepNode>
                </StepDisplayProgressBar>
            </StepDisplayContainer>
            <ScrollButtonContainer onClick={() => scrollContainer(ref,400)}>
                <img alt='scroll right' src={scrollRight} />
            </ScrollButtonContainer>
        </StepProgressBarButtonContainer>
    )
}

export default StepDisplayFooterV2

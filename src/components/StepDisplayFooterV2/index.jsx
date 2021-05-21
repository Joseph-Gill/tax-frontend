import React from 'react'
import {useDispatch} from 'react-redux'
import {skipToSpecifiedStep} from '../../store/step/actions'
import {BEGINNING, DISPLAY_STEP, ENDING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import {StepDisplayContainer, StepDisplayProgressBar, StepNode} from './styles'


const StepDisplayFooterV2 = ({endingNode, history, indexOfStepToDisplay, project, steps}) => {
    const dispatch = useDispatch()

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
        <StepDisplayContainer>
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
    )
}

export default StepDisplayFooterV2

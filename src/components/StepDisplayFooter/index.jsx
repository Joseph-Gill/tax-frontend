import React from 'react'
import {useSpring} from 'react-spring'
import {BEGINNING, DISPLAY_STEP, ENDING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import {BeginningEndingBar, BarNodeContainer, BeginningNode, EndingLeftBar, EndingNode, NodeContainer, StepDisplayFooterContainer, StepDisplayText, StepNode, StepLeftBar} from './styles'
import {useDispatch} from 'react-redux'
import {skipToSpecifiedStep} from '../../store/step/actions'


const StepDisplayFooter = ({beginningActive, endingActive, history, indexOfStepToDisplay, steps}) => {
    const dispatch = useDispatch()
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const stepNodeClickHandler = index => {
        dispatch(skipToSpecifiedStep(index))
        history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
    }

    const renderStepNodes = () => {
        if (beginningActive) {
            return steps.slice(0, 5).map((step, index) => (
                // eslint-disable-next-line react/forbid-component-props
                <BarNodeContainer key={step.id} style={props}>
                    <StepLeftBar />
                    <NodeContainer onClick={() => stepNodeClickHandler(index)}>
                        <StepNode />
                        <StepDisplayText>Step {step.number}</StepDisplayText>
                    </NodeContainer>
                </BarNodeContainer>
            ))
        } else if (endingActive) {
            return steps.slice(-5).map(step => (
                // eslint-disable-next-line react/forbid-component-props
                <BarNodeContainer key={step.id} style={props}>
                    <StepLeftBar isactive={1} />
                    <NodeContainer onClick={() => stepNodeClickHandler(step.number - 1)}>
                        <StepNode isactive={1} />
                        <StepDisplayText>Step {step.number}</StepDisplayText>
                    </NodeContainer>
                </BarNodeContainer>
            ))
        } else {
            if(indexOfStepToDisplay === 0 || indexOfStepToDisplay === 1){
                return steps.slice(0, indexOfStepToDisplay + 1).map(step => (
                    // eslint-disable-next-line react/forbid-component-props
                    <BarNodeContainer key={step.id} style={props}>
                        <StepLeftBar isactive={1} />
                        <NodeContainer onClick={() => stepNodeClickHandler(step.number - 1)}>
                            <StepNode isactive={1} />
                            <StepDisplayText>Step {step.number}</StepDisplayText>
                        </NodeContainer>
                    </BarNodeContainer>
                )).concat(steps.slice(indexOfStepToDisplay + 1, 5).map(step => (
                    // eslint-disable-next-line react/forbid-component-props
                    <BarNodeContainer key={step.id} style={props}>
                        <StepLeftBar />
                        <NodeContainer onClick={() => stepNodeClickHandler(step.number - 1)}>
                            <StepNode />
                            <StepDisplayText>Step {step.number}</StepDisplayText>
                        </NodeContainer>
                    </BarNodeContainer>
                )))
            } else if (indexOfStepToDisplay >= steps.length - 2) {
                if (indexOfStepToDisplay === steps.length - 1) {
                    return steps.slice(-5).map(step => (
                        // eslint-disable-next-line react/forbid-component-props
                        <BarNodeContainer key={step.id} style={props}>
                            <StepLeftBar isactive={1} />
                            <NodeContainer onClick={() => stepNodeClickHandler(step.number - 1)}>
                                <StepNode isactive={1} />
                                <StepDisplayText>Step {step.number}</StepDisplayText>
                            </NodeContainer>
                        </BarNodeContainer>
                    ))
                } else {
                    return steps.slice(-5, -1).map(step => (
                        // eslint-disable-next-line react/forbid-component-props
                        <BarNodeContainer key={step.id} style={props}>
                            <StepLeftBar isactive={1} />
                            <NodeContainer onClick={() => stepNodeClickHandler(step.number - 1)}>
                                <StepNode isactive={1} />
                                <StepDisplayText>Step {step.number}</StepDisplayText>
                            </NodeContainer>
                        </BarNodeContainer>
                    )).concat(steps.slice(-1).map(step => (
                        // eslint-disable-next-line react/forbid-component-props
                        <BarNodeContainer key={step.id} style={props}>
                            <StepLeftBar />
                            <NodeContainer onClick={() => stepNodeClickHandler(step.number - 1)}>
                                <StepNode />
                                <StepDisplayText>Step {step.number}</StepDisplayText>
                            </NodeContainer>
                        </BarNodeContainer>
                    )))
                }
            } else {
                return steps.slice(indexOfStepToDisplay - 2, indexOfStepToDisplay + 1).map(step => (
                    // eslint-disable-next-line react/forbid-component-props
                    <BarNodeContainer key={step.id} style={props}>
                        <StepLeftBar isactive={1} />
                        <NodeContainer onClick={() => stepNodeClickHandler(step.number - 1)}>
                            <StepNode isactive={1} />
                            <StepDisplayText>Step {step.number}</StepDisplayText>
                        </NodeContainer>
                    </BarNodeContainer>
                )).concat(steps.slice(indexOfStepToDisplay + 1, indexOfStepToDisplay + 3).map(step => (
                    // eslint-disable-next-line react/forbid-component-props
                    <BarNodeContainer key={step.id} style={props}>
                        <StepLeftBar />
                        <NodeContainer onClick={() => stepNodeClickHandler(step.number - 1)}>
                            <StepNode />
                            <StepDisplayText>Step {step.number}</StepDisplayText>
                        </NodeContainer>
                    </BarNodeContainer>
                )))
            }
        }
    }

    return (
        <StepDisplayFooterContainer>
            <BarNodeContainer>
                <BeginningEndingBar type='beginning' />
                <NodeContainer onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)}>
                    <BeginningNode />
                    <StepDisplayText>Beginning</StepDisplayText>
                </NodeContainer>
            </BarNodeContainer>
            {renderStepNodes()}
            <BarNodeContainer>
                <EndingLeftBar endingActive={endingActive} />
                <NodeContainer onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)}>
                    <EndingNode endingActive={endingActive} />
                    <StepDisplayText>Ending</StepDisplayText>
                </NodeContainer>
                <BeginningEndingBar type='ending' />
            </BarNodeContainer>
        </StepDisplayFooterContainer>
    )
}

export default StepDisplayFooter

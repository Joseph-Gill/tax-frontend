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
            return steps.map((step, index) => (
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
            return steps.map((step, index) => (
                // eslint-disable-next-line react/forbid-component-props
                <BarNodeContainer key={step.id} style={props}>
                    <StepLeftBar isactive={1} />
                    <NodeContainer onClick={() => stepNodeClickHandler(index)}>
                        <StepNode isactive={1} />
                        <StepDisplayText>Step {step.number}</StepDisplayText>
                    </NodeContainer>
                </BarNodeContainer>
            ))
        } else {
            return steps.map((step, index) => {
                if (index <= indexOfStepToDisplay) {
                    return (
                        // eslint-disable-next-line react/forbid-component-props
                        <BarNodeContainer key={step.id} style={props}>
                            <StepLeftBar isactive={1} />
                            <NodeContainer onClick={() => stepNodeClickHandler(index)}>
                                <StepNode isactive={1} />
                                <StepDisplayText>Step {step.number}</StepDisplayText>
                            </NodeContainer>
                        </BarNodeContainer>
                    )
                } else {
                    return (
                        // eslint-disable-next-line react/forbid-component-props
                        <BarNodeContainer key={step.id} style={props}>
                            <StepLeftBar />
                            <NodeContainer onClick={() => stepNodeClickHandler(index)}>
                                <StepNode />
                                <StepDisplayText>Step {step.number}</StepDisplayText>
                            </NodeContainer>
                        </BarNodeContainer>
                    )
                }
            })
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

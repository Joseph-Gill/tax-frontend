import React from 'react'
import {useSpring} from 'react-spring'
import {BEGINNING, ENDING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import {BeginningEndingBar, BarNodeContainer, BeginningNode, EndingLeftBar, EndingNode, NodeContainer, StepDisplayFooterContainer, StepDisplayText, StepNode, StepLeftBar} from './styles'


const StepDisplayFooter = ({history, endingActive, steps}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const renderStepNodes = () => {
        if (endingActive) {
            return steps.map(step => (
                // eslint-disable-next-line react/forbid-component-props
                <BarNodeContainer key={step.id} style={props}>
                    <StepLeftBar isactive={1} />
                    <NodeContainer>
                        <StepNode isactive={1} />
                        <StepDisplayText>Step {step.number}</StepDisplayText>
                    </NodeContainer>
                </BarNodeContainer>
            ))
        } else {
            return steps.map((step, index) => (
                // eslint-disable-next-line react/forbid-component-props
                <BarNodeContainer key={step.id} style={props}>
                    <StepLeftBar />
                    <NodeContainer>
                        <StepNode />
                        <StepDisplayText>Step {step.number}</StepDisplayText>
                    </NodeContainer>
                </BarNodeContainer>
            ))
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

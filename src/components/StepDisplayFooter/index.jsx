import React from 'react'
import {BeginningNode, NodeContainer, StepDisplayFooterContainer, StepDisplayText, StepNode} from './styles'
import {useSpring} from 'react-spring'


const StepDisplayFooter = ({steps}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const renderStepNodes = () => (
        steps.map((step, index) => (
            // eslint-disable-next-line react/forbid-component-props
            <NodeContainer key={step.id} style={props}>
                <StepNode />
                <StepDisplayText>Step {index + 1}</StepDisplayText>
            </NodeContainer>
        ))
    )


    return (
        <StepDisplayFooterContainer>
            <NodeContainer>
                <BeginningNode />
                <StepDisplayText>Beginning</StepDisplayText>
            </NodeContainer>
            {renderStepNodes()}
        </StepDisplayFooterContainer>
    )
}

export default StepDisplayFooter

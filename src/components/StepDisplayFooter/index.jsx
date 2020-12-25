import React from 'react'
import styled from 'styled-components'
import {BeginningNode, EndingNode, NodeContainer, StepDisplayFooterContainer, StepDisplayText, StepNode} from './styles'
import {useSpring} from 'react-spring'

const BeginningEndingBarNodeContainer = styled.div`
    display: flex;
    align-items: center;
`

const BeginningEndingBar = styled.div`
    width: 57px;
    height: 4px;

    ${props => {
        if (props.type === 'beginning') {
            return `background: ${props.theme.greenBright};`
            }
        }
    };

    ${props => {
        if (props.type === 'ending') {
            return `background: ${props.theme.grayFour};`
            }
        }
    };
`

const EndingLeftBar = styled.div`
    width: 102px;
    height: 4px;
    background: ${props => props.theme.grayFour};

    ${props => {
        if (props.isactive) {
            return `background: ${props.theme.primaryBlue};`
            }
        }
    };
`

const StepDisplayFooter = ({isactive, steps}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const renderStepNodes = () => (
        steps.map(step => (
            // eslint-disable-next-line react/forbid-component-props
            <NodeContainer key={step.id} style={props}>
                <StepNode />
                <StepDisplayText>Step {step.number}</StepDisplayText>
            </NodeContainer>
        ))
    )


    return (
        <StepDisplayFooterContainer>
            <BeginningEndingBarNodeContainer>
                <BeginningEndingBar type='beginning' />
                <NodeContainer>
                    <BeginningNode />
                    <StepDisplayText>Beginning</StepDisplayText>
                </NodeContainer>
            </BeginningEndingBarNodeContainer>
            {renderStepNodes()}
            <BeginningEndingBarNodeContainer>
                <EndingLeftBar isactive={isactive} />
                <NodeContainer>
                    <EndingNode isactive={isactive} />
                    <StepDisplayText>Ending</StepDisplayText>
                </NodeContainer>
                <BeginningEndingBar type='ending' />
            </BeginningEndingBarNodeContainer>
        </StepDisplayFooterContainer>
    )
}

export default StepDisplayFooter

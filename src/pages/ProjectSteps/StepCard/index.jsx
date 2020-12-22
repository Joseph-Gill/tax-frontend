import React from 'react'
import {useSpring} from 'react-spring'
import {CardInfoText} from '../../../style/text'
import {DateText} from '../../Home/HomeGroup/ExpandedGroup/styles'
import {GROUPS, PROJECTS, TASKS} from '../../../routes/paths'
import {StepCardButton, StepCardContainer, StepCardRowContainer, StepCardStatusColorContainer, StepCardStatusColorStepNumberContainer, StepCardTitleText} from './styles'


const StepCard = ({history, number, project, step}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <StepCardContainer style={props}>
            <StepCardRowContainer>
                <StepCardStatusColorStepNumberContainer>
                    <StepCardStatusColorContainer status={step.status} />
                    <StepCardTitleText>Step {number}</StepCardTitleText>
                </StepCardStatusColorStepNumberContainer>
                <DateText>{step.effective_date}</DateText>
            </StepCardRowContainer>
            <StepCardRowContainer>
                <CardInfoText>{step.description}</CardInfoText>
                <StepCardButton onClick={() => history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}/`)}>Tasks</StepCardButton>
            </StepCardRowContainer>
        </StepCardContainer>
    )
}

export default StepCard

import React from 'react'
import {useSpring} from 'react-spring'
import {CardInfoText} from '../../../style/text'
import {DateText} from '../../Home/HomeGroup/ExpandedGroup/styles'
import {GROUPS, PROJECTS, TASKS} from '../../../routes/paths'
import {
    StepCardButton, StepCardButtonDateContainer,
    StepCardContainer,
    StepCardDescriptionContainer,
    StepCardRowContainer,
    StepCardStatusColorContainer,
    StepCardStatusColorStepNumberContainer,
    StepCardTitleText,
    StepCardUpperRowContainer
} from './styles'
import StepCardTaxLocations from './StepCardTaxLocations'


const StepCard = ({history, number, project, step, stepCardClickHandler}) => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <StepCardContainer style={props}>
            <StepCardUpperRowContainer onClick={() => stepCardClickHandler(step.number - 1)}>
                <StepCardStatusColorStepNumberContainer>
                    <StepCardStatusColorContainer status={step.status} />
                    <StepCardTitleText>Step {number}</StepCardTitleText>
                </StepCardStatusColorStepNumberContainer>
                <StepCardTaxLocations taxConsequences={step.tax_consequences} />
            </StepCardUpperRowContainer>
            <StepCardRowContainer>
                <StepCardDescriptionContainer onClick={() => stepCardClickHandler(step.number - 1)}>
                    <CardInfoText>{step.description.length > 170 ? step.description.slice(0, 170).concat('... ') : step.description}</CardInfoText>
                </StepCardDescriptionContainer>
                <StepCardButtonDateContainer>
                    <DateText>{step.effective_date}</DateText>
                    <StepCardButton onClick={() => history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}/`)}>Tasks</StepCardButton>
                </StepCardButtonDateContainer>
            </StepCardRowContainer>
        </StepCardContainer>
    )
}

export default StepCard

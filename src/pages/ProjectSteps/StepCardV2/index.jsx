import React from 'react'
import {useSpring} from 'react-spring'
import {setTaskFilterStepNumber} from '../../../store/task/actions'
import {createSanitizedMarkup} from '../../../helpers'
import {GROUPS, PROJECTS, TASKS} from '../../../routes/paths'
import {StatusText} from '../../../style/text'
import {TaxLocation} from '../StepCard/StepCardTaxLocations/styles'
import {StepCardButton, StepCardDateText, StepCardDescriptionContainer, StepCardLowerRowContainer, StepCardNumberText,
    StepCardRowContainer, StepCardTaxConsequenceContainer, StepCardV2Container} from './styles'


const StepCardV2 = ({dispatch, history, step, project, stepCardClickHandler}) => {

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const stepCardTasksClickHandler = e => {
        //Prevents the parent containers onClick from sending user to Step
        e.stopPropagation()
        dispatch(setTaskFilterStepNumber(step.number))
        history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}/`)
    }

    return (
        <StepCardV2Container
            onClick={() => stepCardClickHandler(step.number - 1)}
            status={step.status}
            // eslint-disable-next-line react/forbid-component-props
            style={props}
        >
            <StepCardRowContainer>
                <StepCardNumberText>{`Step #${step.number}`}</StepCardNumberText>
                <StepCardDateText>{step.effective_date}</StepCardDateText>
            </StepCardRowContainer>
            <StepCardRowContainer>
                <StepCardDescriptionContainer dangerouslySetInnerHTML={createSanitizedMarkup(step.description)} />
                <StepCardButton onClick={(e) => stepCardTasksClickHandler(e)}>Tasks</StepCardButton>
            </StepCardRowContainer>
            <StepCardLowerRowContainer>
                <StepCardTaxConsequenceContainer>
                    {step.tax_consequences.map(taxConsequnce => (
                        <TaxLocation key={taxConsequnce.id}>
                            {taxConsequnce.location}
                        </TaxLocation>))}
                </StepCardTaxConsequenceContainer>
                <StatusText status={step.status}>{step.status}</StatusText>
            </StepCardLowerRowContainer>
        </StepCardV2Container>
    )
}

export default StepCardV2

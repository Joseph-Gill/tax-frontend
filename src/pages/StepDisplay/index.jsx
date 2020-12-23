import React from 'react'
import {AuthenticatedPageContainer, StepPageTitleWithButtonContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import {AuthenticatedPageTitle} from '../../style/titles'
import DateInput from '../../components/DateInput'
import {DateInputAddStepButtonContainer, StepDisplayAddStepButton, StepInfoTaxConsequencesContainer} from './styles'
import StepInfo from './StepInfo'
import TaxInfo from './TaxInfo'


const StepDisplay = () => {
    const indexOfStepToDisplay = useSelector(state => state.stepReducer.indexOfCurrentStepToDisplay)
    const steps = useSelector(state => state.projectReducer.project.steps)
    const project = useSelector(state => state.projectReducer.project)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb
                breadCrumbArray={[
                    {display: 'GROUPS', to: GROUPS, active: false},
                    {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                    {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                    {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                    {display: 'STEPS', to: `${GROUPS}${PROJECTS}${STEPS}/${project.id}/`, active: false},
                    {display: `STEP ${indexOfStepToDisplay + 1}`, to: `${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`, active: true},
                ]}
            />
            <PreviousNextStepHeader
                indexOfStepToDisplay={indexOfStepToDisplay}
                next={steps.length > indexOfStepToDisplay + 1 ? 1 : 0}
                previous={1}
            />
            {indexOfStepToDisplay + 1 === steps.length ? (
                <StepPageTitleWithButtonContainer>
                    <AuthenticatedPageTitle>Step {indexOfStepToDisplay + 1}</AuthenticatedPageTitle>
                    <DateInputAddStepButtonContainer>
                        <DateInput label />
                        <StepDisplayAddStepButton>Add New Step</StepDisplayAddStepButton>
                    </DateInputAddStepButtonContainer>
                </StepPageTitleWithButtonContainer>) : (
                    <StepPageTitleWithButtonContainer>
                        <AuthenticatedPageTitle>Step {indexOfStepToDisplay + 1}</AuthenticatedPageTitle>
                        <DateInput label />
                    </StepPageTitleWithButtonContainer>)}
            <StepInfoTaxConsequencesContainer>
                <StepInfo />
                <TaxInfo />
            </StepInfoTaxConsequencesContainer>
        </AuthenticatedPageContainer>
    )
}

export default StepDisplay

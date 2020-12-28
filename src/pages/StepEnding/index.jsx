import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, StepPageTitleWithButtonContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {ENDING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import {useSelector} from 'react-redux'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AddNewStepButton} from '../../style/buttons'
import StepDisplayFooter from '../../components/StepDisplayFooter'

const EndingStructurePlaceholder = styled.div`
    width: 860px;
    height: 437px;
    box-shadow: ${props => props.theme.boxShadow};
    background: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 30px;
`


const StepEnding = ({history}) => {
    const project = useSelector(state => state.projectReducer.project)
    const steps = useSelector(state => state.stepReducer.steps)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb
                breadCrumbArray={[
                    {display: 'GROUPS', to: GROUPS, active: false},
                    {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                    {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                    {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                    {display: 'STEPS', to: `${GROUPS}${PROJECTS}${STEPS}/${project.id}/`, active: false},
                    {display: 'ENDING', to: `${GROUPS}${PROJECTS}${STEPS}${ENDING}`, active: true},
                ]}
            />
            <PreviousNextStepHeader
                next={0}
                previous={1}
                stepEnding
            />
            <StepPageTitleWithButtonContainer>
                <AuthenticatedPageTitle>Ending Structure</AuthenticatedPageTitle>
                <AddNewStepButton>Add New Step</AddNewStepButton>
            </StepPageTitleWithButtonContainer>
            <EndingStructurePlaceholder />
            <StepDisplayFooter
                beginningActive={0}
                endingActive={1}
                history={history}
                steps={steps}
            />
        </AuthenticatedPageContainer>
    )
}

export default StepEnding

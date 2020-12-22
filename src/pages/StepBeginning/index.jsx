import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {BEGINNING, GROUPS, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import CurrentOrgChart from '../../components/CurrentOrgChart'
import StepDisplayFooter from '../../components/StepDisplayFooter'


const StepPageTitleContainer = styled(AuthenticatedPageTitleContainer)`
    margin-top: 23px;
`

const StepBeginning = () => {
    const project = useSelector(state => state.projectReducer.project)
    const steps = useSelector(state => state.projectReducer.project.steps)
    const entities = useSelector(state => state.groupReducer.group.entities)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb
                breadCrumbArray={[
                    {display: 'GROUPS', to: GROUPS, active: false},
                    {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                    {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                    {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                    {display: 'STEPS', to: `${GROUPS}${PROJECTS}${STEPS}`, active: false},
                    {display: 'BEGINNING', to: `${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`, active: true},
                ]}
            />
            <PreviousNextStepHeader
                next={steps.length ? 1 : 0}
                previous={0}
            />
            <StepPageTitleContainer>
                <AuthenticatedPageTitle>Beginning Structure</AuthenticatedPageTitle>
            </StepPageTitleContainer>
            <CurrentOrgChart componentCalling='StepBeginning' nodes={entities} />
            <StepDisplayFooter />
        </AuthenticatedPageContainer>
    )
}

export default StepBeginning

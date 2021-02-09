import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import Spinner from '../../components/Spinner'
import BreadCrumb from '../../components/BreadCrumb'
import CompleteProjectTooltip from './CompleteProjectTooltip'
import StepDisplayFooterV2 from '../../components/StepDisplayFooterV2'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import {ENDING, GROUPS, HOME, PROJECTS, STEPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, StepPageTitleWithButtonContainer} from '../../style/containers'
import {CompleteProjectButton, EndingStructurePlaceholder} from './styles'


const StepEnding = ({history}) => {
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.steps)

    useEffect (() => {
       //Pushes to home if project or steps are not loaded due to page refresh
        if (!projectLoaded || !stepsLoaded) {
            history.push(`${HOME}`)
        }
    }, [history, projectLoaded, stepsLoaded])

    const checkIfProjectCanBeCompleted = () => {
        const completed = steps.filter(step => step.status !== 'Completed')
        return completed.length;
    }

    const completeProjectHandler = () => {
        console.log('clicked')
    }

    return (
        <AuthenticatedPageContainer>
            {!projectLoaded || !stepsLoaded ? <Spinner /> : (
                <>
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
                        <div>
                            <CompleteProjectButton
                                disabled={checkIfProjectCanBeCompleted()}
                                onClick={completeProjectHandler}
                            >Complete Project
                            </CompleteProjectButton>
                            {checkIfProjectCanBeCompleted() ? <CompleteProjectTooltip /> : null}
                        </div>
                    </StepPageTitleWithButtonContainer>
                    <EndingStructurePlaceholder />
                    <StepDisplayFooterV2
                        endingNode={1}
                        history={history}
                        steps={steps}
                    />
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default StepEnding

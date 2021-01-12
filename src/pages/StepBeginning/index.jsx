import React, {useEffect} from 'react'
import {AuthenticatedPageContainer, StepPageTitleWithButtonContainer} from '../../style/containers'
import {BEGINNING, DISPLAY_STEP, GROUPS, HOME, PROJECTS, STEPS} from '../../routes/paths'
import BreadCrumb from '../../components/BreadCrumb'
import {useDispatch, useSelector} from 'react-redux'
import {AuthenticatedPageTitle} from '../../style/titles'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import CurrentOrgChart from '../../components/CurrentOrgChart'
import StepDisplayFooter from '../../components/StepDisplayFooter'
import {AddNewStepButton} from '../../style/buttons'
import {StepPageTitleContainer} from './styles'
import {addNewStep} from '../../store/step/actions'
import Spinner from '../../components/Spinner'
import {getGroupOfProjectAction} from '../../store/group/actions'


const StepBeginning = ({history}) => {
    const dispatch = useDispatch()
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.steps)
    const entities = useSelector(state => state.groupReducer.group.entities)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)

    useEffect (() => {
        if (!projectLoaded || !stepsLoaded) {
            history.push(`${HOME}`)
        } else if (!groupLoaded) {
            dispatch(getGroupOfProjectAction(project.id))
        }
    }, [history, projectLoaded, stepsLoaded, groupLoaded, project, dispatch])


    const addNewStepHandler = () => {
        dispatch(addNewStep(1))
        history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
    }

    return (
        <AuthenticatedPageContainer>
            {!projectLoaded || !stepsLoaded || !groupLoaded ? <Spinner /> : (
                <>
                    <BreadCrumb
                        breadCrumbArray={[
                            {display: 'GROUPS', to: GROUPS, active: false},
                            {display: `GROUP ${project.group.name.toUpperCase()}`, to: `${GROUPS}/${project.group.id}`, active: false},
                            {display: 'PROJECTS', to: `${GROUPS}${PROJECTS}`, active: false},
                            {display: `PROJECT ${project.name.toUpperCase()}`, to: `${GROUPS}${PROJECTS}/${project.id}`, active: false},
                            {display: 'STEPS', to: `${GROUPS}${PROJECTS}${STEPS}/${project.id}/`, active: false},
                            {display: 'BEGINNING', to: `${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`, active: true},
                        ]}
                    />
                    <PreviousNextStepHeader
                        next={1}
                        previous={0}
                        stepBeginning
                    />
                    {steps.length ? (
                        <StepPageTitleContainer>
                            <AuthenticatedPageTitle>Beginning Structure</AuthenticatedPageTitle>
                        </StepPageTitleContainer>) : (
                            <StepPageTitleWithButtonContainer>
                                <AuthenticatedPageTitle>Beginning Structure</AuthenticatedPageTitle>
                                <AddNewStepButton onClick={addNewStepHandler}>Add New Step</AddNewStepButton>
                            </StepPageTitleWithButtonContainer>)}
                    <CurrentOrgChart
                        componentCalling='StepBeginning'
                        nodes={entities}
                    />
                    <StepDisplayFooter
                        beginningActive={1}
                        endingActive={0}
                        history={history}
                        steps={steps}
                    />
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default StepBeginning

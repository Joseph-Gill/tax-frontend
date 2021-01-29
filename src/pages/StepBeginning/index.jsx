import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import Spinner from '../../components/Spinner'
import CurrentOrgChartV2 from '../../components/CurrentOrgChartV2'
import StepDisplayFooterV2 from '../../components/StepDisplayFooterV2'
import {addNewStep} from '../../store/step/actions'
import {getGroupOfProjectAction} from '../../store/group/actions'
import {getEntitiesWithTags} from '../../helpers'
import {BEGINNING, DISPLAY_STEP, GROUPS, HOME, PROJECTS, STEPS} from '../../routes/paths'
import {AddNewStepButton} from '../../style/buttons'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, StepPageTitleWithButtonContainer} from '../../style/containers'
import {StepPageTitleContainer} from './styles'


const StepBeginning = ({history}) => {
    const dispatch = useDispatch()
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.steps)
    const entities = useSelector(state => state.groupReducer.group.entities)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const [entitiesToRender, setEntitiesToRender] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const getGroupForProject = async () => {
            await dispatch(getGroupOfProjectAction(project.id))
        }
        if (!projectLoaded || !stepsLoaded) {
            history.push(`${HOME}`)
        } else if (!groupLoaded) {
            getGroupForProject()
                .then(() => {
                    setEntitiesToRender([...getEntitiesWithTags(entities)])
                    setLoading(false)
                })
        } else {
            setEntitiesToRender([...getEntitiesWithTags(entities)])
            setLoading(false)
        }
    }, [history, projectLoaded, stepsLoaded, groupLoaded, project, dispatch, entities])


    const addNewStepHandler = () => {
        dispatch(addNewStep(1))
        history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
    }

    return (
        <AuthenticatedPageContainer>
            {!projectLoaded || !stepsLoaded || !groupLoaded || loading ? <Spinner /> : (
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
                    <CurrentOrgChartV2
                        componentCalling='StepBeginning'
                        nodes={entitiesToRender}
                    />
                    <StepDisplayFooterV2
                        endingNode={0}
                        history={history}
                        steps={steps}
                    />
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default StepBeginning

import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import CurrentOrgChartV2 from '../../components/CurrentOrgChartV2'
import StepDisplayFooterV2 from '../../components/StepDisplayFooterV2'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import CompleteProjectModal from '../../components/Modals/CompleteProjectModal'
import CompleteProjectTooltip from '../../components/Tooltips/CompleteProjectTooltip'
import LogoLoading from '../../components/LogoLoading'
import {getChartForStepAction} from '../../store/chart/actions'
import {checkIfArrayContainsStatus} from '../../helpers'
import {ENDING, GROUPS, HOME, PROJECTS, STEPS} from '../../routes/paths'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, NoChartToDisplay, StepPageTitleWithButtonContainer} from '../../style/containers'
import {CompleteProjectButton, EndingStructurePlaceholder} from './styles'


const StepEnding = ({history}) => {
    const dispatch = useDispatch()
    const project = useSelector(state => state.projectReducer.project)
    const projectLoaded = useSelector(state => state.projectReducer.loaded)
    const steps = useSelector(state => state.stepReducer.steps)
    const stepsLoaded = useSelector(state => state.stepReducer.steps)
    const [showCompleteProject, setShowCompleteProject] = useState(false)
    const [finalStepChartNodes, setFinalStepChartNodes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        const getFinalStepChart = async () => {
            const response = await dispatch(getChartForStepAction(project.id, steps.length))
            if (response.status === 200) {
                setFinalStepChartNodes([...JSON.parse(response.data.nodes)])
            }
        }
       //Pushes to home if project or steps are not loaded due to page refresh
        if (!projectLoaded || !stepsLoaded) {
            history.push(`${HOME}`)
        } else {
            setLoading(true)
            getFinalStepChart()
                .then(() => setLoading(false))
        }
    }, [history, projectLoaded, stepsLoaded, dispatch, project.id, steps.length])

    const renderStepChart = () => {
        if (finalStepChartNodes.length) {
            return (
                <CurrentOrgChartV2
                    componentCalling='StepEnding'
                    nodes={finalStepChartNodes}
                />
            )
        } else {
            return (
                <EndingStructurePlaceholder>
                    <NoChartToDisplay>
                        <p>The final step of the project has no saved organization chart.</p>
                        <p>Please create one, update it, and save it so it will appear here.</p>
                    </NoChartToDisplay>
                </EndingStructurePlaceholder>
            )
        }
    }

    const completeProjectHandler = () => {
        //need to add logic to edit Group entities to reflect entities from final step
        setShowCompleteProject(false)
    }

    return (
        <AuthenticatedPageContainer>
            {showCompleteProject &&
                <CompleteProjectModal
                    completeProjectHandler={completeProjectHandler}
                    setShowCompleteProject={setShowCompleteProject}
                />}
            {!projectLoaded || !stepsLoaded || loading ? <LogoLoading /> : (
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
                                disabled={checkIfArrayContainsStatus(steps, 'Completed')}
                                onClick={() => setShowCompleteProject(true)}
                            >Complete Project
                            </CompleteProjectButton>
                            {checkIfArrayContainsStatus(steps, 'Completed') ? <CompleteProjectTooltip /> : null}
                        </div>
                    </StepPageTitleWithButtonContainer>
                    {renderStepChart()}
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

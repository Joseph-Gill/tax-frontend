import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactTooltip from 'react-tooltip'
import BreadCrumb from '../../components/BreadCrumb'
import LogoLoading from '../../components/LogoLoading'
import CurrentOrgChartV2 from '../../components/CurrentOrgChartV2'
import StepDisplayFooterV2 from '../../components/StepDisplayFooterV2'
import PreviousNextStepHeader from '../../components/PreviousNextStepHeader'
import CompleteProjectModal from '../../components/Modals/CompleteProjectModal'
import TooltipAnchorText from '../../components/Tooltips/TooltipComponents/TooltipAnchorText'
import {getChartForStepAction} from '../../store/chart/actions'
import {completeProjectAction} from '../../store/project/actions'
import {checkIfProjectCanBeCompleted, getEntitiesWithTags} from '../../helpers'
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
            // If the final step of a project does not have a step, StepEnding will look through
            // the previous steps, as long as the step status is completed
            for (let i = steps.length; i > 0; i--) {
                const response = await dispatch(getChartForStepAction(project.id, i))
                if (response.status === 200) {
                    setFinalStepChartNodes([...getEntitiesWithTags(JSON.parse(response.data.nodes), false)])
                    return
                } else if (steps[i - 1].status !== 'Completed') {
                    setFinalStepChartNodes([])
                    return
                }
            // If no previous charts were found, set the entities to an empty array
            setFinalStepChartNodes([])
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
    }, [history, projectLoaded, stepsLoaded, dispatch, project.id, steps])

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
                        <p>All steps of your project must have updated organization charts and / or be completed status</p>
                        <p>before the final structure can be shown here and the project can be completed.</p>
                    </NoChartToDisplay>
                </EndingStructurePlaceholder>
            )
        }
    }

    const completeProjectHandler = async () => {
        const projectInfo = {
            start_date: steps[0].effective_date,
            end_date: steps[steps.length - 1].effective_date
        }
        const response = await dispatch(completeProjectAction(project.id, projectInfo))
        if (response.status === 200) {
            history.push(`${GROUPS}${PROJECTS}/${project.id}`)
        }
    }

    const cantBeCompleted = checkIfProjectCanBeCompleted(steps)

    return (
        <AuthenticatedPageContainer>
            {showCompleteProject &&
                <CompleteProjectModal
                    completeProjectHandler={completeProjectHandler}
                    setShowCompleteProject={setShowCompleteProject}
                    showCompleteProject={showCompleteProject}
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
                        {project.status === 'Completed' || !steps.length ? <div /> : (
                            <div data-for='completeProject' data-tip>
                                <CompleteProjectButton
                                    disabled={cantBeCompleted}
                                    onClick={() => setShowCompleteProject(true)}
                                >Complete Project
                                </CompleteProjectButton>
                                {cantBeCompleted &&
                                    <ReactTooltip
                                        backgroundColor='#FFDB99'
                                        effect="solid"
                                        id='completeProject'
                                        place="bottom"
                                    >
                                        <TooltipAnchorText
                                            displayEllipse={false}
                                            tooltipText='You must mark all steps as Completed before you can complete this project.'
                                        />
                                    </ReactTooltip>}
                            </div>)}
                    </StepPageTitleWithButtonContainer>
                    {renderStepChart()}
                    <StepDisplayFooterV2
                        endingNode={1}
                        history={history}
                        project={project}
                        steps={steps}
                    />
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default StepEnding

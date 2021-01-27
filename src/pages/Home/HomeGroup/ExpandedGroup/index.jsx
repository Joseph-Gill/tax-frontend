import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import PendingTasks from './PendingTasks'
import PendingTaxConsequences from './PendingTaxConsequences'
import Loading from '../../../../components/Loading'
import {getStepsForProjectAction, skipToSpecifiedStep} from '../../../../store/step/actions'
import {getProjectAction, getProjectTaxConsequencesUnreviewedSameLocationAsUserAction} from '../../../../store/project/actions'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS, TASKS} from '../../../../routes/paths'
import {AuthenticatedText} from '../../../../style/text'
import {TableButton} from '../../../../style/buttons'
import {AccountInfoContainer, CommentsContainer, ExpandedGroupContainer, GroupExpandedDateText, GroupSectionTitle, NextStepContainer, ProjectStepsButton,
    StepDateTextContainer, TaskButtonContainer, TaskContainer, TaskTableButton} from './styles'


const ExpandedGroup = ({firstUncompletedStep, groupId, history, project, tasksToRender, setHomeLoading, user, userRole}) => {
    const dispatch = useDispatch()
    const [taxConsequencesToRender, setTaxConsequencesToRender] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //Fetches tax consequences for project that are same location as user's counry
        const getUserTaxConsequences = async () => {
            const taxResponse = await dispatch(getProjectTaxConsequencesUnreviewedSameLocationAsUserAction(project.id))
            if (taxResponse){
                setTaxConsequencesToRender(taxResponse)
            }
        }
        setLoading(true)
        getUserTaxConsequences()
            .then(() => setLoading(false))
    }, [project, dispatch, setHomeLoading])

    //Used to push to DisplayStep, fetching specified project, project's steps first, and setting indexOfStepToDisplay
    const goToSpecificStepHandler = async (stepNumber) => {
        setHomeLoading(true)
        const response = await dispatch(getProjectAction(project.id))
        if (response) {
            const response = await dispatch(getStepsForProjectAction(project.id))
            if (response) {
                dispatch(skipToSpecifiedStep(stepNumber - 1))
                history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
            }
        }
    }

    return (
        <ExpandedGroupContainer>
            {loading ? <Loading /> : (
                <>
                    <NextStepContainer>
                        <GroupSectionTitle>Next Step</GroupSectionTitle>
                        <AccountInfoContainer>
                            {firstUncompletedStep ? (
                                <>
                                    <StepDateTextContainer>
                                        <AuthenticatedText>{`Step ${firstUncompletedStep.number} -`}</AuthenticatedText>
                                        <GroupExpandedDateText>{firstUncompletedStep.effective_date}</GroupExpandedDateText>
                                    </StepDateTextContainer>
                                    <TableButton onClick={() => goToSpecificStepHandler(firstUncompletedStep.number)}>Go to Step</TableButton>
                                </>) : (
                                    <>
                                        <AuthenticatedText>This project has no uncompleted Steps</AuthenticatedText>
                                        <ProjectStepsButton onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}/${project.id}/`)}>Go to project steps</ProjectStepsButton>
                                    </>)}
                        </AccountInfoContainer>
                    </NextStepContainer>
                    <CommentsContainer>
                        <GroupSectionTitle>Pending Comments</GroupSectionTitle>
                        <PendingTaxConsequences
                            goToSpecificStepHandler={goToSpecificStepHandler}
                            groupId={groupId}
                            taxConsequencesToRender={taxConsequencesToRender}
                        />
                    </CommentsContainer>
                    <TaskContainer>
                        <GroupSectionTitle>Upcoming Tasks</GroupSectionTitle>
                        <PendingTasks
                            tasksToRender={tasksToRender}
                            user={user}
                            userRole={userRole}
                        />
                        <TaskButtonContainer>
                            <TaskTableButton onClick={() => history.push(`${GROUPS}${PROJECTS}${TASKS}/${project.id}/`)}>Go to tasklist</TaskTableButton>
                        </TaskButtonContainer>
                    </TaskContainer>
                </>)}
        </ExpandedGroupContainer>
    )
}

export default ExpandedGroup

import React from 'react'
import {AuthenticatedText} from '../../../../style/text'
import {AccountInfoContainer, CommentsContainer, ExpandedGroupContainer, GroupExpandedDateText, GroupSectionTitle, NextStepContainer, StepDateTextContainer, TaskButtonContainer, TaskContainer, TaskTableButton} from './styles'
import {TableButton} from '../../../../style/buttons'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS, TASKS} from '../../../../routes/paths'
import PendingTasks from './PendingTasks'
import {useDispatch} from 'react-redux'
import {getStepsForProjectAction, skipToSpecifiedStep} from '../../../../store/step/actions'
import {getProjectAction} from '../../../../store/project/actions'
import PendingTaxConsequences from './PendingTaxConsequences'


const ExpandedGroup = ({firstUncompletedStep, history, project, tasksToRender, taxConsequencesToRender, setHomeLoading, user, userRole}) => {
    const dispatch = useDispatch()

    const goToUncompletedStepHandler = async () => {
        setHomeLoading(true)
        const response = await dispatch(getProjectAction(project.id))
        if (response) {
            const response = await dispatch(getStepsForProjectAction(project.id))
            if (response) {
                dispatch(skipToSpecifiedStep(firstUncompletedStep.number - 1))
                history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
                setHomeLoading(false)
            }
        }
    }

    return (
        <ExpandedGroupContainer>
            <NextStepContainer>
                <GroupSectionTitle>Next Step</GroupSectionTitle>
                <AccountInfoContainer>
                    {firstUncompletedStep ? (
                        <>
                            <StepDateTextContainer>
                                <AuthenticatedText>{`Step ${firstUncompletedStep.number} -`}</AuthenticatedText>
                                <GroupExpandedDateText>{firstUncompletedStep.effective_date}</GroupExpandedDateText>
                            </StepDateTextContainer>
                            <TableButton onClick={goToUncompletedStepHandler}>Go to Step</TableButton>
                        </>) : (
                            <>
                                <AuthenticatedText>This project has no uncompleted Steps</AuthenticatedText>
                                <TableButton onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}/${project.id}/`)}>Go to Steps</TableButton>
                            </>)}
                </AccountInfoContainer>
            </NextStepContainer>
            <CommentsContainer>
                <GroupSectionTitle>Pending Comments</GroupSectionTitle>
                <PendingTaxConsequences
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
        </ExpandedGroupContainer>
    )
}

export default ExpandedGroup

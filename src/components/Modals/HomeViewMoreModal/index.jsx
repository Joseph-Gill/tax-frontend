import React, {useState, useEffect} from 'react'
import ModalExternalContainer from '../ModalComponents/ModalExternalContainer'
import Draggable from 'react-draggable'
import styled from 'styled-components/macro'
import Loading from '../../Loading'
import PendingTasks from './PendingTasks'
import ViewMoreButtons from './ViewMoreButtons'
import PendingTaxConsequences from './PendingTaxConsequences'
import {getProjectAction, getProjectTaxConsequencesUnreviewedSameLocationAsUserAction} from '../../../store/project/actions'
import {getStepsForProjectAction, skipToSpecifiedStep} from '../../../store/step/actions'
import {DISPLAY_STEP, GROUPS, PROJECTS, STEPS, TASKS} from '../../../routes/paths'
import {TableButton} from '../../../style/buttons'
import {AuthenticatedText} from '../../../style/text'
import {AccountInfoContainer, CommentsContainer, ExpandedGroupContainer, GroupExpandedDateText, GroupSectionTitle, HomeViewMoreInternalContainer,
    NextStepContainer, ProjectStepsButton, StepDateTextContainer, TaskButtonContainer, TaskContainer, TaskTableButton} from './styles'


const HomeViewMoreModal = ({dispatch, goToProjectClickHandler, history, pair, setShowViewMoreModal, showViewMoreModal, tasksToRender, user}) => {
    const [taxConsequencesToRender, setTaxConsequencesToRender] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //Fetches tax consequences for project that are same location as user's counry
        const getUserTaxConsequences = async () => {
            const taxResponse = await dispatch(getProjectTaxConsequencesUnreviewedSameLocationAsUserAction(pair.project.id))
            if (taxResponse){
                setTaxConsequencesToRender(taxResponse)
            }
        }
        setLoading(true)
        getUserTaxConsequences()
            .then(() => setLoading(false))
    }, [pair, dispatch])

    //Used to push to DisplayStep, fetching specified project, project's steps first, and setting indexOfStepToDisplay
    const goToSpecificStepHandler = async (stepNumber) => {
        const response = await dispatch(getProjectAction(pair.project.id))
        if (response) {
            const response = await dispatch(getStepsForProjectAction(pair.project.id))
            if (response) {
                dispatch(skipToSpecifiedStep(stepNumber - 1))
                history.push(`${GROUPS}${PROJECTS}${STEPS}${DISPLAY_STEP}`)
            }
        }
    }

    return (
        <ModalExternalContainer
            setModalView={setShowViewMoreModal}
            showModalView={showViewMoreModal}
        >
            <Draggable>
                <HomeViewMoreInternalContainer>
                    {loading ? <Loading /> : (
                        <ExpandedGroupContainer>
                            <NextStepContainer>
                                <GroupSectionTitle>Next Step</GroupSectionTitle>
                                <AccountInfoContainer>
                                    {pair.firstUncompletedStep ? (
                                        <>
                                            <StepDateTextContainer>
                                                <AuthenticatedText>{`Step ${pair.firstUncompletedStep.number} -`}</AuthenticatedText>
                                                <GroupExpandedDateText>{pair.firstUncompletedStep.effective_date}</GroupExpandedDateText>
                                            </StepDateTextContainer>
                                            <TableButton onClick={() => goToSpecificStepHandler(pair.firstUncompletedStep.number)}>Go to Step</TableButton>
                                        </>) : (
                                            <>
                                                <AuthenticatedText>This project has no uncompleted Steps</AuthenticatedText>
                                                <ProjectStepsButton onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}/${pair.project.id}/`)}>Go to project steps</ProjectStepsButton>
                                            </>)}
                                </AccountInfoContainer>
                            </NextStepContainer>
                            <CommentsContainer>
                                <GroupSectionTitle>Pending Comments</GroupSectionTitle>
                                <PendingTaxConsequences
                                    goToSpecificStepHandler={goToSpecificStepHandler}
                                    groupId={pair.groupId}
                                    taxConsequencesToRender={taxConsequencesToRender}
                                />
                            </CommentsContainer>
                            <TaskContainer>
                                <GroupSectionTitle>Upcoming Tasks</GroupSectionTitle>
                                <PendingTasks
                                    tasksToRender={tasksToRender}
                                    user={user}
                                    userRole={pair.userRole}
                                />
                                <TaskButtonContainer>
                                    <TaskTableButton onClick={() => history.push(`${GROUPS}${PROJECTS}${TASKS}/${pair.project.id}/`)}>Go to tasklist</TaskTableButton>
                                </TaskButtonContainer>
                            </TaskContainer>
                        </ExpandedGroupContainer>)}
                    <ViewMoreButtons
                        goToProjectClickHandler={goToProjectClickHandler}
                        setShowViewMoreModal={setShowViewMoreModal}
                        showViewMoreModal={showViewMoreModal}
                    />
                </HomeViewMoreInternalContainer>
            </Draggable>
        </ModalExternalContainer>
    )
}

export default HomeViewMoreModal

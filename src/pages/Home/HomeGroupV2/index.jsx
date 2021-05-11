import React, {useEffect, useState} from 'react'
import {useSpring} from 'react-spring'
import OpenComments from './OpenComments'
import OverdueTasks from './OverdueTasks'
import ReviewComments from './ReviewComments'
import Loading from '../../../components/Loading'
import ToggleFavorite from '../../../components/FavoriteToggle'
import HomeViewMoreModal from '../../../components/Modals/HomeViewMoreModal'
import {getGroupOfProjectAction} from '../../../store/group/actions'
import {toggleFavoriteProjectStatusAction} from '../../../store/projectRole/actions'
import {getProjectOpenAndToReviewCommentNumbersSameLocationAsUserAction} from '../../../store/project/actions'
import {getPastDueNumberAndUncompletedTasksAction, getTaskNumberForTaskOfStepAction} from '../../../store/task/actions'
import {GROUPS, PROJECTS} from '../../../routes/paths'
import {HomeGroupButton, HomeGroupFavStatsContainer, HomeGroupV2Container, HomeGroupViewMoreProjectButtonContainer,
    ProjectTitle, StatsContainer, TitlesContainer, TitlesGroupImageContainer, ViewMoreText} from './styles'
import {GroupImage} from '../../../style/images'
import {GroupTitle} from '../../../style/titles'


const HomeGroupV2 = ({dispatch, history, pair, pairingsToDisplay, setHomeLoading, user}) => {
    const [openComments, setOpenComments] = useState(0)
    const [reviewComments, setReviewComments] = useState(0)
    const [overDueTasks, setOverDueTasks] = useState(0)
    const [loading, setLoading] = useState(true)
    const [tasksToRender, setTasksToRender] = useState([])
    const [showViewMoreModal, setShowViewMoreModal] = useState(false)
    const [favoriteProject, setFavoriteProject] = useState(false)

    useEffect(() => {
        const getPastDueNumberUncompletedTasksCommentsOpenAndReviewed = async () => {
            //Fetches past due and uncompleted Tasks of project assigned to the user
            const taskResponse = await dispatch(getPastDueNumberAndUncompletedTasksAction(pair.project.id))
            if (taskResponse) {
                const userTasks = []
                setOverDueTasks(taskResponse.past_due_tasks)
                for (let i = 0; i < taskResponse.user_uncompleted_tasks.length; i++) {
                    //Assigns task number to task, matches task number that would display on ProjectTasks
                    const response = await dispatch(getTaskNumberForTaskOfStepAction(taskResponse.user_uncompleted_tasks[i].id, taskResponse.user_uncompleted_tasks[i].step.id))
                    if (response.status === 200) {
                        userTasks.push({
                            ...taskResponse.user_uncompleted_tasks[i],
                            taskNumber: response.data
                        })
                    }
                setTasksToRender(userTasks)
                }
            }
            //Fetches tax consequences for Project from same location as user's country, giving "open" and "not reviewed" numbers
            const commentResponse = await dispatch(getProjectOpenAndToReviewCommentNumbersSameLocationAsUserAction(pair.project.id))
            if (commentResponse) {
                setOpenComments(commentResponse.comments_open)
                setReviewComments(commentResponse.comments_to_review)
            }
        }
        setFavoriteProject(pair.favorite)
        getPastDueNumberUncompletedTasksCommentsOpenAndReviewed()
            .then(() => setLoading(false))
    }, [pair, dispatch])

    //From react-spring, causes to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    const goToProjectClickHandler = () => {
        setLoading(true)
        const response = dispatch(getGroupOfProjectAction(pair.project.id))
        if (response) {
            setLoading(false)
            history.push(`${GROUPS}${PROJECTS}/${pair.project.id}/`)
        }
    }

    const toggleFavoriteClickHandler = async () => {
        const response = await dispatch(toggleFavoriteProjectStatusAction(user.user_profile.id, pair.project.id))
        if (response) {
            const targetPairIndex = pairingsToDisplay.findIndex(pair => pair.id === response.data.project.id)
            pairingsToDisplay[targetPairIndex].favorite = response.data.favorite
            setFavoriteProject(!favoriteProject)
        }
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <HomeGroupV2Container style={props}>
            {showViewMoreModal &&
                <HomeViewMoreModal
                    dispatch={dispatch}
                    goToProjectClickHandler={goToProjectClickHandler}
                    history={history}
                    pair={pair}
                    setHomeLoading={setHomeLoading}
                    setShowViewMoreModal={setShowViewMoreModal}
                    showViewMoreModal={showViewMoreModal}
                    tasksToRender={tasksToRender}
                    user={user}
                />}
            {loading ? <Loading /> : (
                <>
                    <TitlesGroupImageContainer>
                        <TitlesContainer>
                            <GroupTitle>{pair.groupName}</GroupTitle>
                            <ProjectTitle>{pair.project.name}</ProjectTitle>
                        </TitlesContainer>
                        {pair.groupImage ? <GroupImage alt='group image' src={pair.groupImage} /> : <div />}
                    </TitlesGroupImageContainer>
                    <HomeGroupFavStatsContainer>
                        <ToggleFavorite
                            favorite={favoriteProject}
                            toggleFavoriteClickHandler={toggleFavoriteClickHandler}
                            tooltipText='Mark this as a favorite Project'
                        />
                        <StatsContainer>
                            {openComments ?
                                <OpenComments
                                    number={openComments}
                                    setShowViewMoreModal={setShowViewMoreModal}
                                /> : null}
                            {reviewComments ?
                                <ReviewComments
                                    number={reviewComments}
                                    setShowViewMoreModal={setShowViewMoreModal}
                                /> : null}
                            {overDueTasks ?
                                <OverdueTasks
                                    number={overDueTasks}
                                    setShowViewMoreModal={setShowViewMoreModal}
                                /> : null}
                        </StatsContainer>
                    </HomeGroupFavStatsContainer>
                    <HomeGroupViewMoreProjectButtonContainer>
                        <ViewMoreText onClick={() => setShowViewMoreModal(true)}>View More</ViewMoreText>
                        <HomeGroupButton onClick={goToProjectClickHandler}>Go to Project</HomeGroupButton>
                    </HomeGroupViewMoreProjectButtonContainer>
                </>)}
        </HomeGroupV2Container>
    )
}

export default HomeGroupV2

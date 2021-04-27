import React, {useEffect, useState} from 'react'
import {useSpring} from 'react-spring'
import OpenComments from './OpenComments'
import OverdueTasks from './OverdueTasks'
import FavoriteToggle from './FavoriteToggle'
import ReviewComments from './ReviewComments'
import Loading from '../../../components/Loading'
import HomeViewMoreModal from '../../../components/Modals/HomeViewMoreModal'
import {getGroupOfProjectAction} from '../../../store/group/actions'
import {getProjectOpenAndToReviewCommentNumbersSameLocationAsUserAction} from '../../../store/project/actions'
import {getPastDueNumberAndUncompletedTasksAction, getTaskNumberForTaskOfStepAction} from '../../../store/task/actions'
import {GROUPS, PROJECTS} from '../../../routes/paths'
import {GroupImage, GroupTitle, HomeGroupButton, HomeGroupFavStatsContainer, HomeGroupV2Container, HomeGroupViewMoreProjectButtonContainer,
    ProjectTitle, StatsContainer, TitlesContainer, TitlesGroupImageContainer, ViewMoreText} from './styles'
import {toggleFavoriteProjectStatusAction} from '../../../store/projectRole/actions'


const HomeGroupV2 = ({dispatch, history, pair, user}) => {
    const [openComments, setOpenComments] = useState(0)
    const [reviewComments, setReviewComments] = useState(0)
    const [pastDueTasks, setPastDueTasks] = useState(0)
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
                setPastDueTasks(taskResponse.past_due_tasks)
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
    }, [pair, dispatch, setLoading])

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

    const toggleFavoriteClickHandler = () => {
        dispatch(toggleFavoriteProjectStatusAction(user.user_profile.id, pair.project.id))
        setFavoriteProject(!favoriteProject)
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
                        <FavoriteToggle
                            favoriteProject={favoriteProject}
                            toggleFavoriteClickHandler={toggleFavoriteClickHandler}
                        />
                        <StatsContainer>
                            <OpenComments number={openComments} />
                            <ReviewComments number={reviewComments} />
                            <OverdueTasks number={pastDueTasks} />
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

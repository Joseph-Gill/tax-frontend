import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useSpring} from 'react-spring'
import OpenComments from './OpenComments'
import ReviewComments from './ReviewComments'
import TasksOverdue from './OverdueTasks'
import ExpandedGroup from './ExpandedGroup'
import Loading from '../../../components/Loading'
import {getPastDueNumberAndUncompletedTasksAction, getTaskNumberForTaskOfStepAction} from '../../../store/task/actions'
import {getProjectOpenAndToReviewCommentNumbersSameLocationAsUserAction} from '../../../store/project/actions'
import {getGroupOfProjectAction} from '../../../store/group/actions'
import {GROUPS, PROJECTS} from '../../../routes/paths'
import expandCollapse from '../../../assets/icons/stark_group_expand.svg'
import {CollapseImage, ExpandImage} from '../../../style/images'
import {HomeExpandCollapseContainer} from '../../../style/containers'
import {ExpandCollapseText} from '../../../style/text'
import {BottomRowContainer, GroupTitle, HomeGroupButton, HomeGroupContainer, MiddleRowContainer, ProjectTitle, UpperRowContainer} from './styles'


const HomeGroup = ({firstUncompletedStep, groupId, groupName, history, project, setHomeLoading, user, userRole}) => {
    const dispatch = useDispatch()
    const [expandStatus, setExpandStatus] = useState(false)
    const [pastDueTasks, setPastDueTasks] = useState(0)
    const [tasksToRender, setTasksToRender] = useState([])
    const [loading, setLoading] = useState(false)
    const [openComments, setOpenComments] = useState(0)
    const [reviewComments, setReviewComments] = useState(0)

    useEffect(() => {
        const getPastDueNumberUncompletedTasksCommentsOpenAndReviewed = async () => {
            //Fetches past due and uncompleted Tasks of project assigned to the user
            const taskResponse = await dispatch(getPastDueNumberAndUncompletedTasksAction(project.id))
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
            const commentResponse = await dispatch(getProjectOpenAndToReviewCommentNumbersSameLocationAsUserAction(project.id))
            if (commentResponse) {
                setOpenComments(commentResponse.comments_open)
                setReviewComments(commentResponse.comments_to_review)
            }
        }
        setLoading(true)
        getPastDueNumberUncompletedTasksCommentsOpenAndReviewed()
            .then(() => setLoading(false))
    }, [project, dispatch, setLoading])

    //From react-spring, causes Modal to fade in
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    //Defines which project onClick pushes
    const goToProjectClickHandler = async () => {
        setLoading(true)
        const response = dispatch(getGroupOfProjectAction(project.id))
        if (response) {
            setLoading(false)
            history.push(`${GROUPS}${PROJECTS}/${project.id}/`)
        }
    }

    return (
        // eslint-disable-next-line react/forbid-component-props
        <HomeGroupContainer expanded={expandStatus ? 1 : 0} style={props}>
            {loading ? <Loading /> : (
                <>
                    <UpperRowContainer>
                        <GroupTitle>{groupName}</GroupTitle>
                        <TasksOverdue number={pastDueTasks} />
                    </UpperRowContainer>
                    <MiddleRowContainer>
                        <ProjectTitle>{project.name}</ProjectTitle>
                    </MiddleRowContainer>
                    {expandStatus ?
                        <ExpandedGroup
                            firstUncompletedStep={firstUncompletedStep}
                            groupId={groupId}
                            history={history}
                            project={project}
                            setHomeLoading={setHomeLoading}
                            tasksToRender={tasksToRender}
                            user={user}
                            userRole={userRole}
                        /> : null}
                    <BottomRowContainer>
                        <HomeGroupButton onClick={goToProjectClickHandler}>Go to Project</HomeGroupButton>
                        <OpenComments number={openComments} />
                        <ReviewComments number={reviewComments} />
                        {expandStatus ? (
                            <HomeExpandCollapseContainer onClick={() => setExpandStatus(false)}>
                                <ExpandCollapseText>Collapse</ExpandCollapseText>
                                <CollapseImage alt='expand' src={expandCollapse} />
                            </HomeExpandCollapseContainer> ) : (
                                <HomeExpandCollapseContainer onClick={() => setExpandStatus(true)}>
                                    <ExpandCollapseText>View More</ExpandCollapseText>
                                    <ExpandImage alt='expand' src={expandCollapse} />
                                </HomeExpandCollapseContainer> )}
                    </BottomRowContainer>
                </>)}
        </HomeGroupContainer>
    )
}

export default HomeGroup

import React, {useState, useEffect} from 'react'
import OpenComments from './OpenComments'
import ReviewComments from './ReviewComments'
import TasksOverdue from './OverdueTasks'
import expandCollapse from '../../../assets/icons/stark_group_expand.svg'
import {BottomRowContainer, GroupTitle, HomeGroupButton, HomeGroupContainer, MiddleRowContainer, ProjectTitle, UpperRowContainer} from './styles'
import {CollapseImage, ExpandImage} from '../../../style/images'
import ExpandedGroup from './ExpandedGroup'
import {HomeExpandCollapseContainer} from '../../../style/containers'
import {ExpandCollapseText} from '../../../style/text'
import {useSpring} from 'react-spring'
import {GROUPS, PROJECTS} from '../../../routes/paths'
import {useDispatch} from 'react-redux'
import {getPastDueNumberAndUncompletedTasksAction} from '../../../store/task/actions'
import {getProjectOpenAndToReviewCommentNumbersSameLocationAsUserAction} from '../../../store/project/actions'
import {getGroupOfProjectAction} from '../../../store/group/actions'
import Loading from '../../../components/Loading'


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
            const taskResponse = await dispatch(getPastDueNumberAndUncompletedTasksAction(project.id))
            if (taskResponse) {
                setPastDueTasks(taskResponse.past_due_tasks)
                setTasksToRender(taskResponse.user_uncompleted_tasks)
            }
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

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

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
                        <GroupTitle>{`Group: ${groupName}`}</GroupTitle>
                        <TasksOverdue number={pastDueTasks} />
                    </UpperRowContainer>
                    <MiddleRowContainer>
                        <ProjectTitle>{`Project: ${project.name}`}</ProjectTitle>
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

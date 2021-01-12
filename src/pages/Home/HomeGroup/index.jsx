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
import Spinner from '../../../components/Spinner'


const HomeGroup = ({groupName, history, project, user, userRole}) => {
    const dispatch = useDispatch()
    const [expandStatus, setExpandStatus] = useState(false)
    const [pastDueTasks, setPastDueTasks] = useState(0)
    const [tasksToRender, setTasksToRender] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const pastDueNumberUncompletedTasks = async () => {
            const response = await dispatch(getPastDueNumberAndUncompletedTasksAction(project.id))
            if (response) {
                setPastDueTasks(response.past_due_tasks)
                setTasksToRender(response.user_uncompleted_tasks)
            }
        }
        setLoading(true)
        pastDueNumberUncompletedTasks()
            .then(() => setLoading(false))
    }, [project.id, dispatch])

    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return (
        // eslint-disable-next-line react/forbid-component-props
        <HomeGroupContainer style={props}>
            {loading ? <Spinner /> : null}
            <UpperRowContainer>
                <GroupTitle>{`Group: ${groupName}`}</GroupTitle>
                <TasksOverdue number={pastDueTasks} />
            </UpperRowContainer>
            <MiddleRowContainer>
                <ProjectTitle>{`Project: ${project.name}`}</ProjectTitle>
            </MiddleRowContainer>
            {expandStatus ?
                <ExpandedGroup
                    history={history}
                    project={project}
                    tasksToRender={tasksToRender}
                    user={user}
                    userRole={userRole}
                /> : null}
            <BottomRowContainer>
                <HomeGroupButton onClick={() => history.push(`${GROUPS}${PROJECTS}/${project.id}/`)}>Go to Project</HomeGroupButton>
                <OpenComments number={2} />
                <ReviewComments number={3} />
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
        </HomeGroupContainer>
    )
}

export default HomeGroup

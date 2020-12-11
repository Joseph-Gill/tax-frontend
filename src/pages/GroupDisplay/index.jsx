import React, {useEffect} from 'react'
import {useHistory, useRouteMatch} from 'react-router-dom'
import {AuthenticatedPageContainer, DisplayGroupTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {useDispatch, useSelector} from 'react-redux'
import {getGroupAction} from '../../store/group/actions'
import Spinner from '../../components/Spinner'
import {AuthenticatedPageTitle} from '../../style/titles'
import DisplayCard from './DisplayCard'
import organizationChartImage from '../../assets/icons/stark_group_display_org_card_image.png'
import projectImage from '../../assets/icons/stark_group_display_project_card_image.png'
import membersImage from '../../assets/icons/stark_group_display_members_card_image.png'
import {GROUPS, MEMBERS, ORG_CHART, PROJECTS} from '../../routes/paths'
import {DisplayCardsContaner, EditGroupButton} from './styling'


const GroupDisplay = () => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const history = useHistory()
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)

    useEffect(() => {
        dispatch(getGroupAction(match.params.groupId))
    }, [dispatch, match.params.groupId])

    const redirectOnClickHandler = (type) => {
        switch (type) {
            case 'Organization Chart': {
                history.push(`${GROUPS}${ORG_CHART}`)
                break
            }
            case 'Projects': {
                history.push(`${GROUPS}${PROJECTS}`)
                break
            }
            default:
                history.push(`${GROUPS}${MEMBERS}`)
        }
    }

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> :
            <>
                <BreadCrumb
                    breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: true}]}
                />
                <DisplayGroupTitleContainer>
                    <AuthenticatedPageTitle>Group {group.name}</AuthenticatedPageTitle>
                    <EditGroupButton>Edit Group</EditGroupButton>
                </DisplayGroupTitleContainer>
                <DisplayCardsContaner>
                    <DisplayCard content={group.entities} image={organizationChartImage} redirectOnClickHandler={redirectOnClickHandler} type='Organization Chart' />
                    <DisplayCard content={group.projects} image={projectImage} redirectOnClickHandler={redirectOnClickHandler} type='Projects' />
                    <DisplayCard content={group.users} image={membersImage} redirectOnClickHandler={redirectOnClickHandler} type='Members' />
                </DisplayCardsContaner>
            </>}
        </AuthenticatedPageContainer>
    )
}

export default GroupDisplay

import React, {useEffect, useState} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import Spinner from '../../components/Spinner'
import DisplayCard from './DisplayCard'
import {getGroupAction} from '../../store/group/actions'
import {resetProject} from '../../store/project/actions'
import {resetMemberFilterProjectId} from '../../store/member/actions'
import {EDIT_GROUP, GROUPS, MEMBERS, ORG_CHART, PROJECTS} from '../../routes/paths'
import organizationChartImage from '../../assets/icons/stark_group_display_org_card_image.png'
import projectImage from '../../assets/icons/stark_group_display_project_card_image.png'
import membersImage from '../../assets/icons/stark_group_display_members_card_image.png'
import {AuthenticatedPageTitle} from '../../style/titles'
import {AuthenticatedPageContainer, DisplayTitleWithButtonContainer} from '../../style/containers'
import {DisplayCardsContaner, EditGroupButton} from './styling'


const GroupDisplay = ({history}) => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //Fetches Group from the url groupId
        const getGroupForPage = async () => {
            await dispatch(getGroupAction(match.params.groupId))
        }
        setLoading(true)
        getGroupForPage()
            .then(() => {
                //Resets project in redux state
                dispatch(resetProject())
                //Resets the project filter of GroupMembers
                dispatch(resetMemberFilterProjectId())
                setLoading(false)
            })
    }, [dispatch, match.params.groupId])

    //Used by cards of GroupDisplay to define where onClick should push
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

    //prop "type" is used in styling the cards
    return (
        <AuthenticatedPageContainer>
            {!loaded || loading ? <Spinner /> :
            <>
                <BreadCrumb
                    breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: true}]}
                />
                <DisplayTitleWithButtonContainer>
                    <AuthenticatedPageTitle>Group {group.name}</AuthenticatedPageTitle>
                    <EditGroupButton onClick={() => history.push(`${GROUPS}${EDIT_GROUP}`)}>Edit Group</EditGroupButton>
                </DisplayTitleWithButtonContainer>
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

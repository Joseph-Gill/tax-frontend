import React, {useEffect, useState} from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import DisplayCard from './DisplayCard'
import LogoLoading from '../../components/LogoLoading'
import {getGroupAction} from '../../store/group/actions'
import {resetProject} from '../../store/project/actions'
import {resetMemberFilterProjectId} from '../../store/member/actions'
import {EDIT_GROUP, GROUPS, MEMBERS, ORG_CHART, PROJECTS} from '../../routes/paths'
import blueOrgChart from '../../assets/icons/stark_group_display_org_card_image_blue.svg'
import blueProjectImage from '../../assets/icons/stark_group_display_project_card_blue.svg'
import blueMembersImage from '../../assets/icons/stark_group_display_members_card_blue.svg'
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
            {!loaded || loading ? <LogoLoading /> :
            <>
                <BreadCrumb
                    breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: true}]}
                />
                <DisplayTitleWithButtonContainer>
                    <AuthenticatedPageTitle>{group.name}</AuthenticatedPageTitle>
                    <EditGroupButton onClick={() => history.push(`${GROUPS}${EDIT_GROUP}`)}>Edit Group</EditGroupButton>
                </DisplayTitleWithButtonContainer>
                <DisplayCardsContaner>
                    <DisplayCard content={group.entities} image={blueOrgChart} redirectOnClickHandler={redirectOnClickHandler} type='Organization Chart' />
                    <DisplayCard content={group.projects} image={blueProjectImage} redirectOnClickHandler={redirectOnClickHandler} type='Projects' />
                    <DisplayCard content={group.users} image={blueMembersImage} redirectOnClickHandler={redirectOnClickHandler} type='Members' />
                </DisplayCardsContaner>
            </>}
        </AuthenticatedPageContainer>
    )
}

export default GroupDisplay

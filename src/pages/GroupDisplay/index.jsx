import React, {useEffect} from 'react'
import {useRouteMatch} from "react-router-dom";
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {useDispatch, useSelector} from 'react-redux'
import {getGroupAction} from '../../store/group/actions'
import Spinner from '../../components/Spinner'
import {AuthenticatedPageTitle} from '../../style/titles'
import DisplayCard from './DisplayCard'
import organizationChartImage from '../../assets/icons/stark_group_display_org_card_image.png'
import projectImage from '../../assets/icons/stark_group_display_project_card_image.png'
import membersImage from '../../assets/icons/stark_group_display_members_card_image.png'


const DisplayCardsContaner = styled.div`
    width: 860px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`


const GroupDisplay = () => {
    const dispatch = useDispatch()
    const match = useRouteMatch();
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)

    useEffect(() => {
        dispatch(getGroupAction(match.params.groupId))
    }, [dispatch])

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> :
            <>
                <BreadCrumb breadCrumbArray={[{display:'GROUPS', to:'/groups'}, {display:`GROUP ${group.name.toUpperCase()}`, to:`/groups/${group.id}`}]} />
                <AuthenticatedPageTitleContainer>
                    <AuthenticatedPageTitle>Group {group.name}</AuthenticatedPageTitle>
                </AuthenticatedPageTitleContainer>
                <DisplayCardsContaner>
                    <DisplayCard content={group.entities} image={organizationChartImage} type='Organization Chart' />
                    <DisplayCard content={group.projects} image={projectImage} type='Projects' />
                    <DisplayCard content={group.users} image={membersImage} type='Members' />
                </DisplayCardsContaner>
            </>}
        </AuthenticatedPageContainer>
    )
}

export default GroupDisplay

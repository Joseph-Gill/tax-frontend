import React, {useEffect} from 'react'
import {useRouteMatch} from "react-router-dom";
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import BreadCrumb from '../../components/BreadCrumb'
import {useDispatch, useSelector} from 'react-redux'
import {getGroupAction} from '../../store/group/actions'
import Spinner from '../../components/Spinner'
import {AuthenticatedPageTitle} from '../../style/titles'


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
            </>}
        </AuthenticatedPageContainer>
    )
}

export default GroupDisplay

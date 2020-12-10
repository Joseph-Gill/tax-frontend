import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {GROUPS, ORG_CHART} from '../../routes/paths'


const GroupOrgChart = () => {
    const group = useSelector(state => state.groupReducer.group)
    const entities = useSelector(state => state.groupReducer.group.entities)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display:'GROUPS', to:GROUPS},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`},
                {display: 'ORGANIZATION CHART', to:`${GROUPS}${ORG_CHART}`}]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Organization Chart</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
        </AuthenticatedPageContainer>
    )
}

export default GroupOrgChart

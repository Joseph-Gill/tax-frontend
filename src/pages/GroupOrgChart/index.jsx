import React from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {GROUPS, ORG_CHART} from '../../routes/paths'
import CurrentOrgChart from '../../components/CurrentOrgChart'


const GroupOrgChart = () => {
    const group = useSelector(state => state.groupReducer.group)
    const entities = useSelector(state => state.groupReducer.group.entities)

    return (
        <AuthenticatedPageContainer>
            <BreadCrumb breadCrumbArray={[
                {display: 'GROUPS', to: GROUPS, active: false},
                {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                {display: 'ORGANIZATION CHART', to:`${GROUPS}${ORG_CHART}`, active: true}]}
            />
            <AuthenticatedPageTitleContainer>
                <AuthenticatedPageTitle>Organization Chart</AuthenticatedPageTitle>
            </AuthenticatedPageTitleContainer>
            <CurrentOrgChart nodes={entities} />
        </AuthenticatedPageContainer>
    )
}

export default GroupOrgChart

import React, {useEffect} from 'react'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import {AuthenticatedPageTitle} from '../../style/titles'
import {GROUPS, HOME, ORG_CHART} from '../../routes/paths'
import CurrentOrgChart from '../../components/CurrentOrgChart'
import Spinner from '../../components/Spinner'


const GroupOrgChart = ({history}) => {
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const entities = useSelector(state => state.groupReducer.group.entities)

    useEffect(() => {
        if (!loaded) {
            history.push(`${HOME}`)
        }
    }, [loaded, history])

    return (
        <AuthenticatedPageContainer>
            {!loaded ? <Spinner /> : (
                <>
                    <BreadCrumb breadCrumbArray={[
                        {display: 'GROUPS', to: GROUPS, active: false},
                        {display: `GROUP ${group.name.toUpperCase()}`, to: `${GROUPS}/${group.id}`, active: false},
                        {display: 'ORGANIZATION CHART', to:`${GROUPS}${ORG_CHART}`, active: true}]}
                    />
                    <AuthenticatedPageTitleContainer>
                        <AuthenticatedPageTitle>Organization Chart</AuthenticatedPageTitle>
                    </AuthenticatedPageTitleContainer>
                    <CurrentOrgChart nodes={entities} />
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default GroupOrgChart

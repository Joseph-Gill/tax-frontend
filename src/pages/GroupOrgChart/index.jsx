import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import CurrentOrgChart from '../../components/CurrentOrgChart'
import Spinner from '../../components/Spinner'
import {getEntitiesWithTags} from '../../helpers'
import {GROUPS, HOME, ORG_CHART} from '../../routes/paths'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'
import {AuthenticatedPageTitle} from '../../style/titles'


const GroupOrgChart = ({history}) => {
    const group = useSelector(state => state.groupReducer.group)
    const loaded = useSelector(state => state.groupReducer.loaded)
    const entities = useSelector(state => state.groupReducer.group.entities)
    const [entitiesToRender, setEntitiesToRender] = useState([])

    useEffect(() => {
        if (!loaded) {
            history.push(`${HOME}`)
        }
        setEntitiesToRender([...getEntitiesWithTags(entities)])
    }, [loaded, history, entities])

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
                    <CurrentOrgChart
                        componentCalling='GroupOrgChart'
                        nodes={entitiesToRender}
                    />
                </>)}
        </AuthenticatedPageContainer>
    )
}

export default GroupOrgChart

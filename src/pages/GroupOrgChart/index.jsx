import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import BreadCrumb from '../../components/BreadCrumb'
import CurrentOrgChart from '../../components/CurrentOrgChart'
import Spinner from '../../components/Spinner'
import {getEntitiesWithTags} from '../../helpers'
import {AuthenticatedPageTitle} from '../../style/titles'
import {GROUPS, HOME, ORG_CHART} from '../../routes/paths'
import {AuthenticatedPageContainer, AuthenticatedPageTitleContainer} from '../../style/containers'


const GroupOrgChart = ({history}) => {
    const group = useSelector(state => state.groupReducer.group)
    const groupLoaded = useSelector(state => state.groupReducer.loaded)
    const entities = useSelector(state => state.groupReducer.group.entities)
    const [entitiesToRender, setEntitiesToRender] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //If chosen group is not in redux state due to reload, push Home to prevent crash
        if (!groupLoaded) {
            history.push(`${HOME}`)
        //Takes entities from backend and attaches tags needed to change which clip-path
        //is used to display the node
        } else {
            setEntitiesToRender([...getEntitiesWithTags(entities)])
            setLoading(false)
        }
    }, [groupLoaded, history, entities])

    return (
        <AuthenticatedPageContainer>
            {loading? <Spinner /> : (
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

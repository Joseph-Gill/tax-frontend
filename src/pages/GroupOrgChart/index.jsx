import React from 'react'
import styled from 'styled-components/macro'
import {AuthenticatedPageContainer} from '../../style/containers'
import {useSelector} from 'react-redux'


const GroupOrgChart = () => {
    const entities = useSelector(state => state.groupReducer.group.entities)


    return (
        <AuthenticatedPageContainer>
            Group Org Chart
        </AuthenticatedPageContainer>
    )
}

export default GroupOrgChart

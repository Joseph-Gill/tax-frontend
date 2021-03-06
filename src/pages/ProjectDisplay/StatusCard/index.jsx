import React from 'react'
import {StatusText} from '../../../style/text'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {StatusBox} from './styles'
import {ProjectDisplayInfoBoxSmaller} from '../styles'


const StatusCard = ({status}) => {
    return (
        <ProjectDisplayInfoBoxSmaller>
            <AddEditProjectSectionTitles>Project Status</AddEditProjectSectionTitles>
            <StatusBox status={status}>
                <StatusText status={status}>{status}</StatusText>
            </StatusBox>
        </ProjectDisplayInfoBoxSmaller>
    )
}

export default StatusCard

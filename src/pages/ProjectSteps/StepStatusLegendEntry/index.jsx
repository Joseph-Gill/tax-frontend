import React from 'react'
import {StatusEntryContainer} from '../../../style/containers'
import {StepStatusEntryColor} from './styles'
import {StatusEntryText} from '../../../style/text'


const StepStatusLegendEntry = ({status}) => {
    return (
        <StatusEntryContainer>
            <StepStatusEntryColor status={status} />
            <StatusEntryText>{status}</StatusEntryText>
        </StatusEntryContainer>
    )
}

export default StepStatusLegendEntry

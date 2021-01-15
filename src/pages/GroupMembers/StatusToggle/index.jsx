import React from 'react'
import StatusToggleChoices from './StatusToggleChoices'
import {StatusToggleContainer, StatusToggleLabel, ToggleContainer} from './styles'


const StatusToggle = ({filterMemberStatus, resetAllCheckedChangeFilterMemberStatus}) => {
    return (
        <StatusToggleContainer>
            <StatusToggleLabel>Member Status</StatusToggleLabel>
            <ToggleContainer>
                <input
                    checked={filterMemberStatus}
                    onChange={resetAllCheckedChangeFilterMemberStatus}
                    type='checkbox'
                />
                <span>
                    <StatusToggleChoices />
                </span>
                <i />
            </ToggleContainer>
        </StatusToggleContainer>
    )
}

export default StatusToggle

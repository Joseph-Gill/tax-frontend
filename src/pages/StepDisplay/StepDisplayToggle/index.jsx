import React from 'react'
import {DisplayToggleContainer, ToggleContainer} from './styles'


const StepDisplayToggle = ({stepDetailStatus, setStepDetailStatus}) => {
    return (
        <DisplayToggleContainer>
            <ToggleContainer>
                <input
                    checked={stepDetailStatus}
                    onChange={() => setStepDetailStatus(!stepDetailStatus)}
                    type='checkbox'
                />
                <span />
                <i />
            </ToggleContainer>
        </DisplayToggleContainer>
    )
}

export default StepDisplayToggle

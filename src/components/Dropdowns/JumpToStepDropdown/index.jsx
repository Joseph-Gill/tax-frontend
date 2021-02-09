import React, {useState} from 'react'
import JumpToStepImage from './JumpToStepImage'
import jumpTo from '../../../assets/icons/tax_cheetah_jump_to_icon.svg'
import {BEGINNING, ENDING, GROUPS, PROJECTS, STEPS} from '../../../routes/paths'
import {DropdownContainer, DropdownContent, DropdownContentText} from '../styles'
import {JumpToButtonContainer, JumpToIconContainer, JumpToStepContentContainer} from './styles'


const JumpToStepDropdown = ({history, stepCardClickHandler, steps}) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const renderStepOptions = () => (
        steps.map(step => (
            <DropdownContent key={step.id} onClick={() => stepCardClickHandler(step.number - 1)}>
                <DropdownContentText>{`Step ${step.number}`}</DropdownContentText>
                <JumpToStepImage />
            </DropdownContent>
        ))
    )

    return (
        <DropdownContainer>
            <JumpToButtonContainer onClick={() => setShowDropdown(!showDropdown)}>
                <span>Go to...</span>
                <JumpToIconContainer>
                    <img alt='redirect' src={jumpTo} />
                </JumpToIconContainer>
            </JumpToButtonContainer>
            <JumpToStepContentContainer show={showDropdown ? 1 : 0}>
                <DropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)}>
                    <DropdownContentText>Beginning</DropdownContentText>
                    <JumpToStepImage />
                </DropdownContent>
                {renderStepOptions()}
                <DropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)}>
                    <DropdownContentText>Ending</DropdownContentText>
                    <JumpToStepImage />
                </DropdownContent>
            </JumpToStepContentContainer>
        </DropdownContainer>
    )
}

export default JumpToStepDropdown

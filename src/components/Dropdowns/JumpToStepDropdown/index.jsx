import React from 'react'
import JumpToStepImage from './JumpToStepImage'
import jumpTo from '../../../assets/icons/tax_cheetah_jump_to_icon.svg'
import {BEGINNING, ENDING, GROUPS, PROJECTS, STEPS} from '../../../routes/paths'
import {DropdownContentText} from '../styles'
import {JumpToButtonContainer, JumpToDropdownContent, JumpToIconContainer, JumpToStepContentContainer} from './styles'
import {DropdownContainer} from '../../../style/dropdowns'


const JumpToStepDropdown = ({history, showGoToDropdown, stepCardClickHandler, steps, toggleGoToCloseFilterSearch}) => {

    const renderStepOptions = () => (
        steps.map(step => (
            <JumpToDropdownContent key={step.id} onClick={() => stepCardClickHandler(step.number - 1)}>
                <DropdownContentText>{`Step ${step.number}`}</DropdownContentText>
                <JumpToStepImage />
            </JumpToDropdownContent>
        ))
    )

    return (
        <DropdownContainer>
            <JumpToButtonContainer onClick={toggleGoToCloseFilterSearch}>
                <span>Go to...</span>
                <JumpToIconContainer>
                    <img alt='redirect' src={jumpTo} />
                </JumpToIconContainer>
            </JumpToButtonContainer>
            <JumpToStepContentContainer show={showGoToDropdown ? 1 : 0}>
                <JumpToDropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)}>
                    <DropdownContentText>Beginning</DropdownContentText>
                    <JumpToStepImage />
                </JumpToDropdownContent>
                {renderStepOptions()}
                <JumpToDropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)}>
                    <DropdownContentText>Ending</DropdownContentText>
                    <JumpToStepImage />
                </JumpToDropdownContent>
            </JumpToStepContentContainer>
        </DropdownContainer>
    )
}

export default JumpToStepDropdown

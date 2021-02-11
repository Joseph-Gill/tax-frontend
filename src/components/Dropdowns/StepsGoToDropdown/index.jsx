import React from 'react'
import GoToImage from '../DropdownComponents/GoToImage'
import GoToButton from '../DropdownComponents/GoToButton'
import {DropdownContainer} from '../../../style/dropdowns'
import {BEGINNING, ENDING, GROUPS, PROJECTS, STEPS} from '../../../routes/paths'
import {DropdownContentText, GoToContentContainer, GoToDropdownContent} from '../styles'


const StepsGoToDropdown = ({history, showGoToDropdown, stepCardClickHandler, steps, toggleGoToCloseFilterSearch}) => {

    const renderStepOptions = () => (
        steps.map(step => (
            <GoToDropdownContent key={step.id} onClick={() => stepCardClickHandler(step.number - 1)}>
                <DropdownContentText>{`Step ${step.number}`}</DropdownContentText>
                <GoToImage />
            </GoToDropdownContent>
        ))
    )

    return (
        <DropdownContainer>
            <GoToButton clickHandler={toggleGoToCloseFilterSearch} />
            <GoToContentContainer show={showGoToDropdown ? 1 : 0}>
                <GoToDropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)}>
                    <DropdownContentText>Beginning</DropdownContentText>
                    <GoToImage />
                </GoToDropdownContent>
                {renderStepOptions()}
                <GoToDropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)}>
                    <DropdownContentText>Ending</DropdownContentText>
                    <GoToImage />
                </GoToDropdownContent>
            </GoToContentContainer>
        </DropdownContainer>
    )
}

export default StepsGoToDropdown

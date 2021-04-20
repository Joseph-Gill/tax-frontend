import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {ModalDropdownContent} from '../styles'
import {StepFilterContentContainer, StepFilterDropdownButton} from './styles'


const ProjectTasksStepFilterDropdown = ({filterStepNumber, setShowTaskStepFilter, showTaskStepFilter, steps,
                                            taskStepFilterChangeHandler}) => {

    const renderTaskStepFilterChoices = () => (
        steps.map(step => (
            <ModalDropdownContent
                key={step.id}
                onClick={() => taskStepFilterChangeHandler(step.number)}
            >
                <span>{`Step #${step.number}`}</span>
            </ModalDropdownContent>
        ))
    )

    return (
        <DropdownInternalContainer
            setDropdownView={setShowTaskStepFilter}
            showDropdownView={showTaskStepFilter}
        >
            <StepFilterDropdownButton
                onClick={() => setShowTaskStepFilter(!showTaskStepFilter)}
            >
                {!filterStepNumber ? 'All' : `Step #${filterStepNumber}`}
            </StepFilterDropdownButton>
            <StepFilterContentContainer show={showTaskStepFilter ? 1 : 0}>
                <ModalDropdownContent
                    onClick={() => taskStepFilterChangeHandler('')}
                >
                    <span>All</span>
                </ModalDropdownContent>
                {renderTaskStepFilterChoices()}
            </StepFilterContentContainer>
        </DropdownInternalContainer>
    )
}

export default ProjectTasksStepFilterDropdown

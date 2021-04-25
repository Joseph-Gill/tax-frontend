import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorText from '../../Tooltips/TooltipComponents/TooltipAnchorText'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {DisabledModalDropdownContent, ModalDropdownContent} from '../styles'
import {StepStatusDropdownButton, StepStatusDropdownContentContainer} from './styles'



const StepDetailsStatusDropdown = ({ableToComplete, disabled, handleStepStatusSelectChange, setShowStepStatusSelect,
                                       showStepStatusSelect, stepStatus}) => {

    const displayCompletedChoice = () => {
        if (ableToComplete) {
            return (
                <ModalDropdownContent
                    onClick={() => handleStepStatusSelectChange('Completed')}
                >
                    <span>Completed</span>
                </ModalDropdownContent>
            )
        } else {
            return (
                <>
                    <DisabledModalDropdownContent data-for='completeStepChoice' data-tip>
                        <span>Completed</span>
                    </DisabledModalDropdownContent>
                    <ReactTooltip
                        backgroundColor='#FFDB99'
                        effect="float"
                        id='completeStepChoice'
                        place="top"
                    >
                        <TooltipAnchorText
                            displayEllipse={false}
                            tooltipText='You must mark all prior steps as Completed before you can Complete this step.'
                        />
                    </ReactTooltip>
                </>
            )
        }
    }

    return (
        <DropdownInternalContainer
            setDropdownView={setShowStepStatusSelect}
            showDropdownView={showStepStatusSelect}
        >
            <StepStatusDropdownButton
                disabled={disabled}
                onClick={() => setShowStepStatusSelect(!showStepStatusSelect)}
            >
                {!stepStatus ? 'Select status' : stepStatus}
            </StepStatusDropdownButton>
            <StepStatusDropdownContentContainer show={showStepStatusSelect ? 1 : 0}>
                <ModalDropdownContent
                    onClick={() => handleStepStatusSelectChange('Not Started')}
                >
                    <span>Not Started</span>
                </ModalDropdownContent>
                <ModalDropdownContent
                    onClick={() => handleStepStatusSelectChange('Ongoing')}
                >
                    <span>Ongoing</span>
                </ModalDropdownContent>
                {displayCompletedChoice()}
            </StepStatusDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default StepDetailsStatusDropdown

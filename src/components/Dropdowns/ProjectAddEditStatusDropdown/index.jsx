import React from 'react'
import TooltipAnchorText from '../../Tooltips/TooltipComponents/TooltipAnchorText'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {DisabledModalDropdownContent, ModalDropdownContent} from '../styles'
import {CustomDropdownButton, CustomDropdownContentContainer} from '../../Modals/styles'
import ReactTooltip from 'react-tooltip'


const ProjectAddEditStatusDropdown = ({disabled, editProject, handleSelectProjectStatusChange, projectCantBeCompleted,
                                       projectCantBeOngoing, projectStatus, setShowProjectStatus, showProjectStatus}) => {

    const displayCompletedChoice = () => {
        if (projectCantBeCompleted) {
            return (
                <>
                    <DisabledModalDropdownContent data-for='completeProjectChoice' data-tip>
                        <span>Completed</span>
                    </DisabledModalDropdownContent>
                    <ReactTooltip
                        backgroundColor='#FFDB99'
                        effect="float"
                        id='completeProjectChoice'
                        place="top"
                    >
                        <TooltipAnchorText
                            tooltipText='You must mark all steps as Completed before you can complete this project.'
                        />
                    </ReactTooltip>
                </>
            )
        } else {
            return (
                <ModalDropdownContent
                    onClick={() => handleSelectProjectStatusChange('Completed')}
                >
                    <span>Completed</span>
                </ModalDropdownContent>
            )
        }
    }

    const displayOngoingChoice = () => {
        if (projectCantBeOngoing) {
            return (
                <>
                    <DisabledModalDropdownContent data-for='ongoingProjectChoice' data-tip>
                        <span>Ongoing</span>
                    </DisabledModalDropdownContent>
                    <ReactTooltip
                        backgroundColor='#FFDB99'
                        effect="float"
                        id='ongoingProjectChoice'
                        place="top"
                    >
                        <TooltipAnchorText
                            tooltipText='A group can only have one Ongoing project at any time.'
                        />
                    </ReactTooltip>
                </>
            )
        } else {
            return (
                <ModalDropdownContent
                    onClick={() => handleSelectProjectStatusChange('Ongoing')}
                >
                    <span>Ongoing</span>
                </ModalDropdownContent>
            )
        }
    }


    return (
        <DropdownInternalContainer
            setDropdownView={setShowProjectStatus}
            showDropdownView={showProjectStatus}
        >
            <CustomDropdownButton
                disabled={disabled}
                onClick={() => setShowProjectStatus(!showProjectStatus)}
            >
                {!projectStatus ? 'Select a status' : projectStatus}
            </CustomDropdownButton>
            <CustomDropdownContentContainer show={showProjectStatus ? 1 : 0}>
                <ModalDropdownContent
                    onClick={() => handleSelectProjectStatusChange('Not Started')}
                >
                    <span>Not Started</span>
                </ModalDropdownContent>
                {editProject && (
                    <ModalDropdownContent
                        onClick={() => handleSelectProjectStatusChange('Not Implemented')}
                    >
                        <span>Not Implemented</span>
                    </ModalDropdownContent>
                )}
                {displayOngoingChoice()}
                {editProject && displayCompletedChoice()}
            </CustomDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default ProjectAddEditStatusDropdown

import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorText from '../../Tooltips/TooltipComponents/TooltipAnchorText'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {DisabledModalDropdownContent, ModalDropdownContent} from '../styles'
import {CustomDropdownButton, CustomDropdownContentContainer} from '../../Modals/styles'


const ProjectAddEditStatusDropdown = ({disabled, editProject, handleSelectProjectStatusChange, projectCantBeOngoing,
                                          projectStatus, setShowProjectStatus, showProjectStatus}) => {

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
                            displayEllipse={false}
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
                    </ModalDropdownContent>)}
                {displayOngoingChoice()}
            </CustomDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default ProjectAddEditStatusDropdown

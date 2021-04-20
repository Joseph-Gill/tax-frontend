import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {ModalDropdownContent} from '../styles'
import {CustomDropdownButton, CustomDropdownContentContainer} from '../../Modals/styles'


const ProjectAddStatusDropdown = ({handleSelectProjectStatusChange, projectStatus, setShowProjectStatus,
                                      showProjectStatus}) => {
    return (
        <DropdownInternalContainer
            setDropdownView={setShowProjectStatus}
            showDropdownView={showProjectStatus}
        >
            <CustomDropdownButton
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
                <ModalDropdownContent
                    onClick={() => handleSelectProjectStatusChange('Ongoing')}
                >
                    <span>Ongoing</span>
                </ModalDropdownContent>
            </CustomDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default ProjectAddStatusDropdown

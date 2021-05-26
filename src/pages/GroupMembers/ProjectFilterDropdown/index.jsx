import React from 'react'
import {StepFilterInputLabel} from '../../../style/labels'
import DropdownInternalContainer from '../../../components/Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ModalDropdownContent} from '../../../components/Dropdowns/styles'
import {ProjectFilterDropdownButton, ProjectFilterDropdownContentContainer} from './styles'


const ProjectFilterDropdown = ({filterProjectId, group, projectFilterChangeHandler, renderProjectFilterOptions,
                                   setShowProjectFilterDropdown, showProjectFilterDropdown}) => {
    return (
        <div>
            <StepFilterInputLabel>Project Access Filter</StepFilterInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowProjectFilterDropdown}
                showDropdownView={showProjectFilterDropdown}
            >
                <ProjectFilterDropdownButton
                    onClick={() => setShowProjectFilterDropdown(!showProjectFilterDropdown)}
                >
                    {!filterProjectId ? 'None' : group.projects.find(project => project.id === filterProjectId).name}
                </ProjectFilterDropdownButton>
                <ProjectFilterDropdownContentContainer show={showProjectFilterDropdown ? 1 : 0}>
                    <ModalDropdownContent
                        onClick={() => projectFilterChangeHandler('')}
                    >
                        {/* eslint-disable-next-line react/jsx-max-depth */}
                        <span>None</span>
                    </ModalDropdownContent>
                    {renderProjectFilterOptions()}
                </ProjectFilterDropdownContentContainer>
            </DropdownInternalContainer>
        </div>
    )
}

export default ProjectFilterDropdown

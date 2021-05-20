import React from 'react'
import DeleteProjectTooltip from '../../../components/Tooltips/DeleteProjectTooltip'
import {EDIT_PROJECT, GROUPS, PROJECTS} from '../../../routes/paths'
import {DeleteButton, EditGroupButton} from '../../../style/buttons'
import {ProjectDisplayButtonContainer} from './styles'



const ProjectDisplayButtons = ({checkCantBeDeleted, history}) => {
    return (
        <ProjectDisplayButtonContainer>
            <EditGroupButton onClick={() => {history.push(`${GROUPS}${PROJECTS}${EDIT_PROJECT}`)}}>Edit Project</EditGroupButton>
            <div>
                <DeleteButton
                    disabled={checkCantBeDeleted}
                >
                    Delete
                </DeleteButton>
                {checkCantBeDeleted && <DeleteProjectTooltip />}
            </div>
        </ProjectDisplayButtonContainer>
    )
}

export default ProjectDisplayButtons

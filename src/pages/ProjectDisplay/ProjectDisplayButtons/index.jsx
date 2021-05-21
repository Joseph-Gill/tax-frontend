import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorText from '../../../components/Tooltips/TooltipComponents/TooltipAnchorText'
import {EDIT_PROJECT, GROUPS, PROJECTS} from '../../../routes/paths'
import {DeleteButton, EditGroupButton} from '../../../style/buttons'
import {ProjectDisplayButtonContainer} from './styles'



const ProjectDisplayButtons = ({checkCantBeDeleted, checkCantBeEdited, history, setShowDeleteConfirmation}) => {
    return (
        <ProjectDisplayButtonContainer>
            <div data-for='editProject' data-tip>
                <EditGroupButton
                    disabled={checkCantBeEdited}
                    onClick={() => {history.push(`${GROUPS}${PROJECTS}${EDIT_PROJECT}`)}}
                >
                    Edit Project
                </EditGroupButton>
            </div>
            <div data-for='deleteProject' data-tip>
                <DeleteButton
                    disabled={checkCantBeDeleted}
                    onClick={() => setShowDeleteConfirmation(true)}
                >
                    Delete
                </DeleteButton>
            </div>
            {checkCantBeDeleted &&
                <ReactTooltip
                    backgroundColor='#FFDB99'
                    effect="solid"
                    id='deleteProject'
                    place="bottom"
                >
                    <TooltipAnchorText
                        displayEllipse={false}
                        tooltipText='A project with completed steps cannot be deleted.'
                    />
                </ReactTooltip>}
            {checkCantBeEdited &&
                <ReactTooltip
                    backgroundColor='#FFDB99'
                    effect="solid"
                    id='editProject'
                    place="bottom"
                >
                    <TooltipAnchorText
                        displayEllipse={false}
                        tooltipText='A completed project cannot be edited.'
                    />
                </ReactTooltip>}
        </ProjectDisplayButtonContainer>
    )
}

export default ProjectDisplayButtons

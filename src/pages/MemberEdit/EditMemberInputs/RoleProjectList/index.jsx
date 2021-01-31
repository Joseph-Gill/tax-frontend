import React from 'react'
import RoleTooltip from './RoleTooltip'
import tooltipAnchor from '../../../../assets/icons/stark_tooltip_anchor.png'
import {CustomCheckbox} from '../../../../style/checkbox'
import {AccessProjectRoleLabel} from '../../../../style/labels'
import {CheckBoxRoleContainer, ProjectRolesContainer, TooltipAnchor} from './styles'


const RoleProjectList = ({group, roleChecked, setRoleChecked}) => {

    //Used to only allow one Role checkbox to be checked at a time
    const roleCheckBoxChangeHandler = e => {
        setRoleChecked({
            Core: false,
            Legal: false,
            Tax: false,
            Other: false
            , [e.target.value]: !roleChecked[e.target.value]})
        }

    return (
        <ProjectRolesContainer>
            <CheckBoxRoleContainer>
                <CustomCheckbox>
                    <input
                        checked={roleChecked.Core}
                        disabled={!group.projects.length}
                        id='Core'
                        onChange={(e) => roleCheckBoxChangeHandler(e)}
                        type='checkbox'
                        value='Core'
                    />
                    <span className='checkmark' />
                    <AccessProjectRoleLabel htmlFor='Core'>Core</AccessProjectRoleLabel>
                </CustomCheckbox>
                <TooltipAnchor data-for='core' data-tip>
                    <img alt='tooltip' src={tooltipAnchor} />
                </TooltipAnchor>
                <RoleTooltip
                    anchorId='core'
                    bottomRowText='Can invite other users in core team.'
                    topRowText='Has viewing and editing rights.'
                />
            </CheckBoxRoleContainer>
            <CheckBoxRoleContainer>
                <CustomCheckbox>
                    <input
                        checked={roleChecked.Legal}
                        disabled={!group.projects.length}
                        id='Legal'
                        onChange={(e) => roleCheckBoxChangeHandler(e)}
                        type='checkbox'
                        value='Legal'
                    />
                    <span className='checkmark' />
                    <AccessProjectRoleLabel htmlFor='Legal'>Legal</AccessProjectRoleLabel>
                </CustomCheckbox>
                <TooltipAnchor data-for='legal' data-tip>
                    <img alt='tooltip' src={tooltipAnchor} />
                </TooltipAnchor>
                <RoleTooltip
                    anchorId='legal'
                    bottomRowText='Can invite other users in tax, legal, and other role.'
                    topRowText='Can add tax comments and tasks for country of the user.'
                />
            </CheckBoxRoleContainer>
            <CheckBoxRoleContainer>
                <CustomCheckbox>
                    <input
                        checked={roleChecked.Tax}
                        disabled={!group.projects.length}
                        id='Tax'
                        onChange={(e) => roleCheckBoxChangeHandler(e)}
                        type='checkbox'
                        value='Tax'
                    />
                    <span className='checkmark' />
                    <AccessProjectRoleLabel htmlFor='Tax'>Tax</AccessProjectRoleLabel>
                </CustomCheckbox>
                <TooltipAnchor data-for='legal' data-tip>
                    <img alt='tooltip' src={tooltipAnchor} />
                </TooltipAnchor>
                <RoleTooltip
                    anchorId='tax'
                    bottomRowText='Can invite other users in tax, legal, and other role.'
                    topRowText='Can add legal comments and tasks for country of the user.'
                />
            </CheckBoxRoleContainer>
            <CheckBoxRoleContainer>
                <CustomCheckbox>
                    <input
                        checked={roleChecked.Other}
                        disabled={!group.projects.length}
                        id='Other'
                        onChange={(e) => roleCheckBoxChangeHandler(e)}
                        type='checkbox'
                        value='Other'
                    />
                    <span className='checkmark' />
                    <AccessProjectRoleLabel htmlFor='Other'>Other (View Only)</AccessProjectRoleLabel>
                </CustomCheckbox>
                <TooltipAnchor data-for='other' data-tip>
                    <img alt='tooltip' src={tooltipAnchor} />
                </TooltipAnchor>
                <RoleTooltip
                    anchorId='other'
                    bottomRowText='Can invite other users in the other role.'
                    topRowText='Has only viewing rights.'
                />
            </CheckBoxRoleContainer>
        </ProjectRolesContainer>
    )
}

export default RoleProjectList

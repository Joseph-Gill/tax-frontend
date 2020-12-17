import React from 'react'
import {CheckBox} from '../../../../style/inputs'
import {AuthenticatedText} from '../../../../style/text'
import tooltipAnchor from '../../../../assets/icons/stark_tooltip_anchor.png'
import {allowOnlyOneCheckedBox} from '../../../../helpers'
import RoleTooltip from './RoleTooltip'
import {CheckBoxRoleContainer, ProjectRolesContainer, TooltipAnchor} from './styles'


const RoleProjectList = ({roleChecked, setRoleChecked}) => {
    return (
        <ProjectRolesContainer>
            <CheckBoxRoleContainer>
                <CheckBox
                    checked={roleChecked[0].isChecked}
                    onChange={(e) => allowOnlyOneCheckedBox(e, roleChecked, setRoleChecked)}
                    type='checkbox'
                    value={0}
                />
                <AuthenticatedText>Core</AuthenticatedText>
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
                <CheckBox
                    checked={roleChecked[1].isChecked}
                    onChange={(e) => allowOnlyOneCheckedBox(e, roleChecked, setRoleChecked)}
                    type='checkbox'
                    value={1}
                />
                <AuthenticatedText>Legal</AuthenticatedText>
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
                <CheckBox
                    checked={roleChecked[2].isChecked}
                    onChange={(e) => allowOnlyOneCheckedBox(e, roleChecked, setRoleChecked)}
                    type='checkbox'
                    value={2}
                />
                <AuthenticatedText>Tax</AuthenticatedText>
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
                <CheckBox
                    checked={roleChecked[3].isChecked}
                    onChange={(e) => allowOnlyOneCheckedBox(e, roleChecked, setRoleChecked)}
                    type='checkbox'
                    value={3}
                />
                <AuthenticatedText>Other (View Only)</AuthenticatedText>
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

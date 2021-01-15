import React from 'react'
import RoleTooltip from './RoleTooltip'
import tooltipAnchor from '../../../../assets/icons/stark_tooltip_anchor.png'
import {CheckBox} from '../../../../style/inputs'
import {AuthenticatedText} from '../../../../style/text'
import {CheckBoxRoleContainer, ProjectRolesContainer, TooltipAnchor} from './styles'


const RoleProjectList = ({roleChecked, setRoleChecked}) => {
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
                <CheckBox
                    checked={roleChecked.Core}
                    onChange={(e) => roleCheckBoxChangeHandler(e)}
                    type='checkbox'
                    value='Core'
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
                    checked={roleChecked.Legal}
                    onChange={(e) => roleCheckBoxChangeHandler(e)}
                    type='checkbox'
                    value='Legal'
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
                    checked={roleChecked.Tax}
                    onChange={(e) => roleCheckBoxChangeHandler(e)}
                    type='checkbox'
                    value='Tax'
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
                    checked={roleChecked.Other}
                    onChange={(e) => roleCheckBoxChangeHandler(e)}
                    type='checkbox'
                    value='Other'
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

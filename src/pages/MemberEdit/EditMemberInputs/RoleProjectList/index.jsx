import React from 'react'
import styled from 'styled-components/macro'
import {CheckBox} from '../../../../style/inputs'
import {AuthenticatedText} from '../../../../style/text'
import tooltipAnchor from '../../../../assets/icons/stark_tooltip_anchor.png'
import {allowOnlyOneCheckedBox} from '../../../../helpers'

const ProjectRolesContainer = styled.div`
    width: 626px;
    display: flex;
    justify-content: space-between;
`

const CheckBoxRoleContainer = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-right: 14px;
    }

    p {
        margin-right: 9px;
    }
`

const TooltipAnchor = styled.a`
    margin-top: 5px;
`


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
                <TooltipAnchor>
                    <img alt='tooltip' src={tooltipAnchor} />
                </TooltipAnchor>
            </CheckBoxRoleContainer>
            <CheckBoxRoleContainer>
                <CheckBox
                    checked={roleChecked[1].isChecked}
                    onChange={(e) => allowOnlyOneCheckedBox(e, roleChecked, setRoleChecked)}
                    type='checkbox'
                    value={1}
                />
                <AuthenticatedText>Legal</AuthenticatedText>
                <TooltipAnchor>
                    <img alt='tooltip' src={tooltipAnchor} />
                </TooltipAnchor>
            </CheckBoxRoleContainer>
            <CheckBoxRoleContainer>
                <CheckBox
                    checked={roleChecked[2].isChecked}
                    onChange={(e) => allowOnlyOneCheckedBox(e, roleChecked, setRoleChecked)}
                    type='checkbox'
                    value={2}
                />
                <AuthenticatedText>Tax</AuthenticatedText>
                <TooltipAnchor>
                    <img alt='tooltip' src={tooltipAnchor} />
                </TooltipAnchor>
            </CheckBoxRoleContainer>
            <CheckBoxRoleContainer>
                <CheckBox
                    checked={roleChecked[3].isChecked}
                    onChange={(e) => allowOnlyOneCheckedBox(e, roleChecked, setRoleChecked)}
                    type='checkbox'
                    value={3}
                />
                <AuthenticatedText>Other (View Only)</AuthenticatedText>
                <TooltipAnchor>
                    <img alt='tooltip' src={tooltipAnchor} />
                </TooltipAnchor>
            </CheckBoxRoleContainer>
        </ProjectRolesContainer>
    )
}

export default RoleProjectList

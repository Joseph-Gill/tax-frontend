import React from 'react'
import groupIcon from '../../../assets/icons/stark_display_project_member_icon.svg'
import rightArrow from '../../../assets/icons/stark_right_facing_arrow.svg'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {MemberBox, MemberImage, MemberText} from './styles'
import {ArrowImageContainer, ProjectDisplayInfoBoxSmaller, ViewItemLink, ViewItemLinkContainer} from '../styles'


const MembersCard = ({members, setProjectFilterGoToMembersHandler}) => {
    return (
        <ProjectDisplayInfoBoxSmaller>
            <AddEditProjectSectionTitles>Team</AddEditProjectSectionTitles>
            <MemberBox>
                <MemberImage alt='members' src={groupIcon} />
                <MemberText>{members.length}</MemberText>
            </MemberBox>
            <ViewItemLinkContainer onClick={setProjectFilterGoToMembersHandler}>
                <ViewItemLink>View Members</ViewItemLink>
                <ArrowImageContainer>
                    <img alt="members" src={rightArrow} />
                </ArrowImageContainer>
            </ViewItemLinkContainer>
        </ProjectDisplayInfoBoxSmaller>
    )
}

export default MembersCard

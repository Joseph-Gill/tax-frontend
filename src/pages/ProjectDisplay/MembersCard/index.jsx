import React from 'react'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import groupIcon from '../../../assets/icons/stark_display_project_member_icon.svg'
import rightArrow from '../../../assets/icons/stark_right_facing_arrow.svg'
import {ProjectDisplayInfoBoxSmaller, ViewItemLink, ViewItemLinkContainer} from '../styles'
import {MemberBox, MemberImage, MemberText} from './styles'


const MembersCard = ({members}) => {
    return (
        <ProjectDisplayInfoBoxSmaller>
            <AddEditProjectSectionTitles>Team</AddEditProjectSectionTitles>
            <MemberBox>
                <MemberImage alt='members' src={groupIcon} />
                <MemberText>{members.length}</MemberText>
            </MemberBox>
            <ViewItemLinkContainer>
                <ViewItemLink>View Members</ViewItemLink>
                <img alt="members" src={rightArrow} />
            </ViewItemLinkContainer>
        </ProjectDisplayInfoBoxSmaller>
    )
}

export default MembersCard

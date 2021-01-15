import React from 'react'
import {GROUPS, MEMBERS} from '../../../routes/paths'
import groupIcon from '../../../assets/icons/stark_display_project_member_icon.svg'
import rightArrow from '../../../assets/icons/stark_right_facing_arrow.svg'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {MemberBox, MemberImage, MemberText} from './styles'
import {ProjectDisplayInfoBoxSmaller, ViewItemLink, ViewItemLinkContainer} from '../styles'


const MembersCard = ({history, members}) => {
    return (
        <ProjectDisplayInfoBoxSmaller>
            <AddEditProjectSectionTitles>Team</AddEditProjectSectionTitles>
            <MemberBox>
                <MemberImage alt='members' src={groupIcon} />
                <MemberText>{members.length}</MemberText>
            </MemberBox>
            <ViewItemLinkContainer onClick={() => history.push(`${GROUPS}${MEMBERS}`)}>
                <ViewItemLink>View Members</ViewItemLink>
                <img alt="members" src={rightArrow} />
            </ViewItemLinkContainer>
        </ProjectDisplayInfoBoxSmaller>
    )
}

export default MembersCard

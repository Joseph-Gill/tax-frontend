import React from 'react'
import {AddEditProjectSectionTitles} from '../../../style/titles'
import {ProjectDisplayColorText, ProjectDisplayColorTextBackground, ProjectDisplayColorTextContainer, ProjectDisplayInfoBox, ProjectDisplayStatusesContainer, ViewItemLink, ViewItemLinkContainer} from '../styles'
import rightArrow from '../../../assets/icons/stark_right_facing_arrow.svg'


const StepsCard = ({steps}) => {
    return (
        <ProjectDisplayInfoBox>
            <AddEditProjectSectionTitles>Steps</AddEditProjectSectionTitles>
            <ProjectDisplayStatusesContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Ongoing / Planned'>5</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Ongoing / Planned'>Ongoing / Planned</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Completed'>2</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Completed'>Completed</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
                <ProjectDisplayColorTextContainer>
                    <ProjectDisplayColorTextBackground status='Not Started'>2</ProjectDisplayColorTextBackground>
                    <ProjectDisplayColorText status='Not Started'>Not Started</ProjectDisplayColorText>
                </ProjectDisplayColorTextContainer>
            </ProjectDisplayStatusesContainer>
            <ViewItemLinkContainer>
                <ViewItemLink>View Steps</ViewItemLink>
                <img alt="tasks" src={rightArrow} />
            </ViewItemLinkContainer>
        </ProjectDisplayInfoBox>
    )
}

export default StepsCard

import React from 'react'
import ReactTooltip from 'react-tooltip'
import ellipse from '../../assets/icons/stark_tooltip_ellipse.png'
import tooltipAnchor from '../../assets/icons/stark_tooltip_anchor.png'
import {StepTooltipAnchor} from '../../style/anchors'
import {TooltipRowImage} from '../../style/images'
import {TooltipRowText} from '../../style/text'
import {TooltipRowContainer} from '../../style/containers'


const CompletedProjectTooltip = () => {
    return (
        <>
            <StepTooltipAnchor>
                <img alt='tooltip' data-for='completedProject' data-tip src={tooltipAnchor} />
            </StepTooltipAnchor>
            <ReactTooltip
                backgroundColor='#FFDB99'
                effect="float"
                id='completedProject'
                place="top"
            >
                <TooltipRowContainer>
                    <TooltipRowImage alt='ellipse' src={ellipse} />
                    <TooltipRowText>A project with status Completed cannot be changed.</TooltipRowText>
                </TooltipRowContainer>
            </ReactTooltip>
        </>
    )
}

export default CompletedProjectTooltip

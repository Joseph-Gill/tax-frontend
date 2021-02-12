import React from 'react'
import ReactTooltip from 'react-tooltip'
import tooltipAnchor from '../../assets/icons/stark_tooltip_anchor.png'
import ellipse from '../../assets/icons/stark_tooltip_ellipse.png'
import {StepTooltipAnchor} from '../../style/anchors'
import {TooltipRowContainer} from '../../style/containers'
import {TooltipRowImage} from '../../style/images'
import {TooltipRowText} from '../../style/text'



const CompleteProjectTooltip = () => {
    return (
        <>
            <StepTooltipAnchor>
                <img alt='tooltip' data-for='completeProject' data-tip src={tooltipAnchor} />
            </StepTooltipAnchor>
            <ReactTooltip
                backgroundColor='#FFDB99'
                effect="float"
                id='completeProject'
                place="top"
            >
                <TooltipRowContainer>
                    <TooltipRowImage alt='ellipse' src={ellipse} />
                    <TooltipRowText>You must mark all steps as Completed before you can complete this project.</TooltipRowText>
                </TooltipRowContainer>
            </ReactTooltip>
        </>
    )
}

export default CompleteProjectTooltip

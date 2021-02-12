import React from 'react'
import tooltipAnchor from '../../../../assets/icons/stark_tooltip_anchor.png'
import {StepTooltipAnchor} from '../../../../style/anchors'


const TooltipAnchorImage = ({dataFor}) => {
    return (
        <StepTooltipAnchor>
            <img alt='tooltip' data-for={dataFor} data-tip src={tooltipAnchor} />
        </StepTooltipAnchor>
    )
}

export default TooltipAnchorImage

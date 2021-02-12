import React from 'react'
import {TooltipRowImage} from '../../../../style/images'
import ellipse from '../../../../assets/icons/stark_tooltip_ellipse.png'
import {TooltipRowText} from '../../../../style/text'
import {TooltipRowContainer} from '../../../../style/containers'


const TooltipAnchorText = ({tooltipText}) => {
    return (
        <TooltipRowContainer>
            <TooltipRowImage alt='ellipse' src={ellipse} />
            <TooltipRowText>{tooltipText}</TooltipRowText>
        </TooltipRowContainer>
    )
}

export default TooltipAnchorText

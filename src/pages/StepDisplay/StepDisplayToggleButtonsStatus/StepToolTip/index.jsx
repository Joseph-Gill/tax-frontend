import React from 'react'
import ReactTooltip from 'react-tooltip'
import ellipse from '../../../../assets/icons/stark_tooltip_ellipse.png'
import {TooltipRowContainer} from '../../../../style/containers'
import {TooltipRowImage} from '../../../../style/images'
import {TooltipRowText} from '../../../../style/text'


const StepToolTip = ({anchorId}) => {
    return (
        <ReactTooltip
            backgroundColor='#FFDB99'
            effect="float"
            id={anchorId}
            place="top"
        >
            <TooltipRowContainer>
                <TooltipRowImage alt='ellipse' src={ellipse} />
                <TooltipRowText>You must mark all prior steps as Completed before you can Complete this step.</TooltipRowText>
            </TooltipRowContainer>
        </ReactTooltip>
    )
}

export default StepToolTip

import React from 'react'
import ReactTooltip from 'react-tooltip'
import ellipse from '../../../../../assets/icons/stark_tooltip_ellipse.png'
import {TooltipRowImage} from '../../../../../style/images'
import {TooltipRowText} from '../../../../../style/text'
import {TooltipRowContainer} from '../../../../../style/containers'


const PredefinedToolTip = ({anchorId}) => {
    return (
        <ReactTooltip
            backgroundColor='#FFDB99'
            effect="solid"
            id={anchorId}
            place="left"
        >
            <TooltipRowContainer>
                <TooltipRowImage alt='ellipse' src={ellipse} />
                <TooltipRowText>Add a predefined step</TooltipRowText>
            </TooltipRowContainer>
        </ReactTooltip>
    )
}

export default PredefinedToolTip

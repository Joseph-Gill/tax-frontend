import React from 'react'
import ReactTooltip from 'react-tooltip'
import ellipse from '../../../../../assets/icons/stark_tooltip_ellipse.png'
import {TooltipRowContainer, TooltipRowImage, TooltipRowText} from './styles'


const RoleTooltip = ({anchorId, topRowText, bottomRowText}) => {
    return (
        <ReactTooltip
            backgroundColor='#FFDB99'
            effect="float"
            id={anchorId}
            place="top"
        >
            <TooltipRowContainer>
                <TooltipRowImage alt='ellipse' src={ellipse} />
                <TooltipRowText>{topRowText}</TooltipRowText>
            </TooltipRowContainer>
            <TooltipRowContainer>
                <TooltipRowImage alt='ellipse' src={ellipse} />
                <TooltipRowText>{bottomRowText}</TooltipRowText>
            </TooltipRowContainer>
        </ReactTooltip>
    )
}

export default RoleTooltip

import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorImage from '../TooltipComponents/TooltipAnchorImage'
import TooltipAnchorText from '../TooltipComponents/TooltipAnchorText'


const OngoingProjectTooltip = () => {
    return (
        <>
            <TooltipAnchorImage dataFor='ongoingProject' />
            <ReactTooltip
                backgroundColor='#FFDB99'
                effect="float"
                id='ongoingProject'
                place="top"
            >
                <TooltipAnchorText
                    tooltipText='A group can only have one Ongoing project at any time.'
                />
            </ReactTooltip>
        </>
    )
}

export default OngoingProjectTooltip

import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorImage from '../TooltipComponents/TooltipAnchorImage'
import TooltipAnchorText from '../TooltipComponents/TooltipAnchorText'


const CompletedProjectTooltip = () => {
    return (
        <>
            <TooltipAnchorImage dataFor='completedProject' />
            <ReactTooltip
                backgroundColor='#FFDB99'
                effect="float"
                id='completedProject'
                place="top"
            >
                <TooltipAnchorText
                    tooltipText='A project with status Completed cannot be changed.'
                />
            </ReactTooltip>
        </>
    )
}

export default CompletedProjectTooltip

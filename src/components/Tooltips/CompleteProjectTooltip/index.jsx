import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorImage from '../TooltipComponents/TooltipAnchorImage'
import TooltipAnchorText from '../TooltipComponents/TooltipAnchorText'



const CompleteProjectTooltip = () => {
    return (
        <>
            <TooltipAnchorImage dataFor='completeProject' />
            <ReactTooltip
                backgroundColor='#FFDB99'
                effect="float"
                id='completeProject'
                place="top"
            >
                <TooltipAnchorText
                    tooltipText='You must mark all steps as Completed before you can complete this project.'
                />
            </ReactTooltip>
        </>
    )
}

export default CompleteProjectTooltip

import React from 'react'
import TooltipAnchorImage from '../TooltipComponents/TooltipAnchorImage'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorText from '../TooltipComponents/TooltipAnchorText'


const DeleteProjectTooltip = () => {
    return (
        <>
            <TooltipAnchorImage dataFor='deleteProject' />
                <ReactTooltip
                    backgroundColor='#FFDB99'
                    effect="float"
                    id='deleteProject'
                    place="top"
                >
                    <TooltipAnchorText
                        tooltipText='A project with completed steps cannot be deleted.'
                    />
                </ReactTooltip>
        </>
    )
}

export default DeleteProjectTooltip

import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorText from '../../../../components/Tooltips/TooltipComponents/TooltipAnchorText'
import {FavoriteContainer, FavoriteToggleControl} from './styles'


const FavoriteToggle = ({favoriteProject, toggleFavoriteClickHandler}) => {
    return (
        <FavoriteContainer>
            <FavoriteToggleControl data-for='favoriteProject' data-tip>
                <input
                    checked={favoriteProject}
                    onChange={toggleFavoriteClickHandler}
                    type='checkbox'
                />
                <span className='control' />
            </FavoriteToggleControl>
            <ReactTooltip
                backgroundColor='#FFDB99'
                effect="float"
                id='favoriteProject'
                place="bottom"
            >
                <TooltipAnchorText
                    displayEllipse={false}
                    tooltipText='Mark this as a favorite Project'
                />
            </ReactTooltip>
        </FavoriteContainer>
    )
}

export default FavoriteToggle

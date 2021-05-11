import React from 'react'
import ReactTooltip from 'react-tooltip'
import TooltipAnchorText from '../Tooltips/TooltipComponents/TooltipAnchorText'
import {FavoriteContainer, FavoriteToggleControl} from './styles'


const ToggleFavorite = ({favorite, toggleFavoriteClickHandler, tooltipText}) => {
    return (
        <FavoriteContainer>
            <FavoriteToggleControl data-for='favoriteProjectGroup' data-tip>
                <input
                    checked={favorite}
                    onChange={toggleFavoriteClickHandler}
                    type='checkbox'
                />
                <span className='control' />
            </FavoriteToggleControl>
            <ReactTooltip
                backgroundColor='#FFDB99'
                effect="float"
                id='favoriteProjectGroup'
                place="bottom"
            >
                <TooltipAnchorText
                    displayEllipse={false}
                    tooltipText={tooltipText}
                />
            </ReactTooltip>
        </FavoriteContainer>
    )
}

export default ToggleFavorite

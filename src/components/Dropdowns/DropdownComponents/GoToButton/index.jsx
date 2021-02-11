import React from 'react'
import jumpTo from '../../../../assets/icons/tax_cheetah_jump_to_icon.svg'
import {GoToButtonContainer, GoToIconContainer} from '../../styles'


const GoToButton = ({clickHandler}) => {
    return (
        <GoToButtonContainer onClick={clickHandler}>
            <span>Go to...</span>
            <GoToIconContainer>
                <img alt='redirect' src={jumpTo} />
            </GoToIconContainer>
        </GoToButtonContainer>
    )
}

export default GoToButton

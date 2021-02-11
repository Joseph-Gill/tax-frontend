import React from 'react'
import jumpToGray from '../../../../assets/icons/tax_cheetah_jump_to_gray_icon.svg'
import {DropdownContentImgContainer} from '../../styles'


const GoToImage = () => {
    return (
        <DropdownContentImgContainer>
            <img alt='redirect' src={jumpToGray} />
        </DropdownContentImgContainer>
    )
}

export default GoToImage

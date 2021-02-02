import React from 'react'
import grayPlusSign from '../../../assets/icons/tax_cheetah_plus_icon_gray_18px.svg'
import {DropdownContentImgContainer} from '../styles'


const DropdownContentImage = () => {
    return (
        <DropdownContentImgContainer>
            <img alt='add sign' src={grayPlusSign} />
        </DropdownContentImgContainer>
    )
}

export default DropdownContentImage

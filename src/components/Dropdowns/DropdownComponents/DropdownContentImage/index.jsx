import React from 'react'
import grayPlusSign from '../../../../assets/icons/tax_cheetah_plus_icon_gray_18px.svg'
import grayMinusSign from '../../../../assets/icons/tax_cheetah_minus-icon_gray_18px.svg'
import grayEditIcon from '../../../../assets/icons/tax_cheetah_edit_icon_gray_18px.svg'
import grayRobot from '../../../../assets/icons/tax_cheetah_robot_icon_gray_18px.svg'
import {DropdownContentImgContainer} from '../../styles'


const DropdownContentImage = ({dropdownCalling}) => {
    return (
        <DropdownContentImgContainer>
            <img
                alt='add sign'
                src={dropdownCalling === 'Add' ? grayPlusSign : dropdownCalling === 'Remove' ? grayMinusSign : dropdownCalling === 'Edit' ? grayEditIcon : grayRobot}
            />
        </DropdownContentImgContainer>
    )
}

export default DropdownContentImage

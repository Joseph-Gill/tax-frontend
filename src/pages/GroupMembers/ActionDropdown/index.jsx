import React from 'react'
import emailIcon from '../../../assets/icons/stark_send_email.svg'
import {BlueDropdownText, RedDropdownText} from '../../../style/text'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'
import deleteIcon from '../../../assets/icons/stark_delete_icon.svg'
import {Dropdown, DropdownButton, DropdownOptions} from '../../../style/dropdowns'
import {DropdownImage} from '../../../style/images'


const ActionDropdown = () => {
    return(
        <Dropdown>
            <DropdownButton>Action</DropdownButton>
            <DropdownOptions>
                <DropDownChoiceWithBorder>
                    <DropdownImage alt='email' src={emailIcon} />
                    <BlueDropdownText>Send Email</BlueDropdownText>
                </DropDownChoiceWithBorder>
                <DropdownChoiceContainer>
                    <DropdownImage alt='delete' src={deleteIcon} />
                    <RedDropdownText>Remove Members</RedDropdownText>
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default ActionDropdown

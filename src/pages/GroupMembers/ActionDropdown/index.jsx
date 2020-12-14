import React from 'react'
import emailIcon from '../../../assets/icons/stark_send_email.svg'
import {BlueDropdownText, RedDropdownText} from '../../../style/text'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'
import deleteIcon from '../../../assets/icons/stark_delete_icon.svg'
import {Dropdown, DropdownButton, DropdownOptions} from '../../../style/dropdowns'


const ActionDropdown = () => {
    return(
        <Dropdown>
            <DropdownButton>Action</DropdownButton>
            <DropdownOptions>
                <DropDownChoiceWithBorder>
                    <img alt='email' src={emailIcon} />
                    <BlueDropdownText>Send Email</BlueDropdownText>
                </DropDownChoiceWithBorder>
                <DropdownChoiceContainer>
                    <img alt='delete' src={deleteIcon} />
                    <RedDropdownText>Delete Members</RedDropdownText>
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default ActionDropdown

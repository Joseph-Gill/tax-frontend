import React from 'react'
import emailIcon from '../../../assets/icons/stark_send_email.svg'
import {BlueDropdownText, RedDropdownText} from '../../../style/text'
import {ActionDropDownChoice, ActionDropdownChoiceWithBorder} from '../../../style/containers'
import deleteIcon from '../../../assets/icons/stark_delete_icon.svg'
import {Dropdown, DropdownButton, DropdownOptions} from '../../../style/dropdowns'
import {DropdownImage} from '../../../style/images'


const ActionDropdown = ({sendEmailClickHandler, setShowConfirmation}) => {
    return(
        <Dropdown>
            <DropdownButton>Action</DropdownButton>
            <DropdownOptions>
                <ActionDropdownChoiceWithBorder onClick={sendEmailClickHandler}>
                    <DropdownImage alt='email' src={emailIcon} />
                    <BlueDropdownText>Send Email</BlueDropdownText>
                </ActionDropdownChoiceWithBorder>
                <ActionDropDownChoice onClick={() => setShowConfirmation(true)}>
                    <DropdownImage alt='delete' src={deleteIcon} />
                    <RedDropdownText>Remove Members</RedDropdownText>
                </ActionDropDownChoice>
            </DropdownOptions>
        </Dropdown>
    )
}

export default ActionDropdown

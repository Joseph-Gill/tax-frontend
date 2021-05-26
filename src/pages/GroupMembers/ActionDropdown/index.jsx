import React from 'react'
import DropdownInternalContainer from '../../../components/Dropdowns/DropdownComponents/DropdownInternalContainer'
import emailIcon from '../../../assets/icons/stark_send_email.svg'
import deleteIcon from '../../../assets/icons/stark_delete_icon.svg'
import actionImage from '../../../assets/icons/stark_action.svg'
import {DropdownImage} from '../../../style/images'
import {BlueDropdownText, RedDropdownText} from '../../../style/text'
import {ActionDropdownContent, ActionDropdownContentContainer, ActionImageButton} from './styles'


const ActionDropdown = ({sendEmailClickHandler, setShowActionDropdown, setShowConfirmation,
                            showActionDropdown, toggleActionCloseFilterSearch}) => {
    return (
        <DropdownInternalContainer
            setDropdownView={setShowActionDropdown}
            showDropdownView={showActionDropdown}
        >
            <ActionImageButton onClick={toggleActionCloseFilterSearch}>
                <img alt='actions' src={actionImage} />
            </ActionImageButton>
            <ActionDropdownContentContainer show={showActionDropdown ? 1 : 0}>
                <ActionDropdownContent onClick={sendEmailClickHandler}>
                    <DropdownImage alt='email' src={emailIcon} />
                    <BlueDropdownText>Send Email</BlueDropdownText>
                </ActionDropdownContent>
                <ActionDropdownContent onClick={() => setShowConfirmation(true)}>
                    <DropdownImage alt='delete' src={deleteIcon} />
                    <RedDropdownText>Remove Members</RedDropdownText>
                </ActionDropdownContent>
            </ActionDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default ActionDropdown

import React from 'react'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'
import emailIcon from '../../../assets/icons/stark_send_email.svg'
import {BlueDropdownText, RedDropdownText} from '../../../style/text'
import deleteIcon from '../../../assets/icons/stark_delete_icon.svg'


const FilterDropdown = () => {
    return (
        <Dropdown>
            <FilterDropdownButton>Filter</FilterDropdownButton>
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

export default FilterDropdown

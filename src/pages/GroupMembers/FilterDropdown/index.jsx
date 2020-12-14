import React from 'react'
import {Dropdown, DropdownOptions, FilterDropdownButton} from '../../../style/dropdowns'
import {DropdownChoiceContainer, DropDownChoiceWithBorder} from '../../../style/containers'
import emailIcon from '../../../assets/icons/stark_send_email.svg'
import {BlueDropdownText, RedDropdownText} from '../../../style/text'
import deleteIcon from '../../../assets/icons/stark_delete_icon.svg'
import {FilterInput} from '../../../style/inputs'
import {DropdownImage} from '../../../style/images'


const FilterDropdown = ({filterString}) => {

    return (
        <Dropdown>
            <FilterDropdownButton>Filter</FilterDropdownButton>
            <DropdownOptions>
                <DropDownChoiceWithBorder>
                    <FilterInput
                        placeholder='Search and select'
                        ref={filterString}
                        type='text'
                    />
                </DropDownChoiceWithBorder>
                <DropDownChoiceWithBorder>
                    <DropdownImage alt='email' src={emailIcon} />
                    <BlueDropdownText>Send Email</BlueDropdownText>
                </DropDownChoiceWithBorder>
                <DropdownChoiceContainer>
                    <DropdownImage alt='delete' src={deleteIcon} />
                    <RedDropdownText>Delete Members</RedDropdownText>
                </DropdownChoiceContainer>
            </DropdownOptions>
        </Dropdown>
    )
}

export default FilterDropdown

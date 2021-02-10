import React from 'react'
import {FilterCustomCheckbox} from '../../../../style/labels'
import {DefaultDropdownText} from '../../../../style/text'
import {FilterDropdownContentContainer} from '../styles'
import {DropdownContent} from '../../../../style/dropdowns'


const StepsFilterSearchChoices = ({filterOption, filterOptionChangeHandler, showFilterDropdown}) => {
    return (
        <FilterDropdownContentContainer show={showFilterDropdown ? 1 : 0}>
            <DropdownContent onClick={() => filterOptionChangeHandler(0)}>
                <FilterCustomCheckbox>
                    <input
                        checked={filterOption[0].isChecked}
                        id='status'
                        onChange={() => filterOptionChangeHandler(0)}
                        type='checkbox'
                        value={0}
                    />
                    <span className='checkmark' />
                    <DefaultDropdownText htmlFor='status'>Status</DefaultDropdownText>
                </FilterCustomCheckbox>
            </DropdownContent>
            <DropdownContent onClick={() => filterOptionChangeHandler(1)}>
                <FilterCustomCheckbox>
                    <input
                        checked={filterOption[1].isChecked}
                        id='consequenceLocation'
                        onChange={() => filterOptionChangeHandler(1)}
                        type='checkbox'
                        value={1}
                    />
                    <span className='checkmark' />
                    <DefaultDropdownText htmlFor='consequenceLocation'>Tax Consequence Location</DefaultDropdownText>
                </FilterCustomCheckbox>
            </DropdownContent>
            <DropdownContent onClick={() => filterOptionChangeHandler(2)}>
                <FilterCustomCheckbox>
                    <input
                        checked={filterOption[2].isChecked}
                        id='description'
                        onChange={() => filterOptionChangeHandler(2)}
                        type='checkbox'
                        value={2}
                    />
                    <span className='checkmark' />
                    <DefaultDropdownText htmlFor='description'>Description</DefaultDropdownText>
                </FilterCustomCheckbox>
            </DropdownContent>
        </FilterDropdownContentContainer>
    )
}

export default StepsFilterSearchChoices

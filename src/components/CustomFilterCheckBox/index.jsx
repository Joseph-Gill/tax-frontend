import React from 'react'
import {allowOnlyOneCheckedBox} from '../../helpers'
import {DefaultDropdownText} from '../../style/text'
import {FilterCustomCheckbox} from '../../style/labels'


const CustomFilterCheckBox = ({id, filterOption, setFilterOption, value, label}) => {
    return (
        <FilterCustomCheckbox>
            <input
                checked={filterOption[value].isChecked}
                id={id}
                onChange={(e) => allowOnlyOneCheckedBox(e, filterOption, setFilterOption)}
                type='checkbox'
                value={value}
            />
            <span className='checkmark' />
            <DefaultDropdownText htmlFor={id}>{label}</DefaultDropdownText>
        </FilterCustomCheckbox>
    )
}

export default CustomFilterCheckBox

import React from 'react'
import {DefaultDropdownText} from '../../../../style/text'
import {FilterCustomCheckbox} from '../../../../style/labels'
import {DropdownContent, DropdownContentContainer} from '../../../../style/dropdowns'


const MemberFilterSearchChoices = ({filterMemberStatus, filterOption, filterOptionChangeHandler, showFilterDropdown}) => {
    return (
        <DropdownContentContainer show={showFilterDropdown ? 1 : 0}>
            <DropdownContent onClick={() => filterOptionChangeHandler(0)}>
                <FilterCustomCheckbox>
                    <input
                        checked={filterOption[0].isChecked}
                        id='email'
                        onChange={() => filterOptionChangeHandler(0)}
                        type='checkbox'
                        value={0}
                    />
                    <span className='checkmark' />
                    <DefaultDropdownText htmlFor='email'>Email</DefaultDropdownText>
                </FilterCustomCheckbox>
            </DropdownContent>
            {!filterMemberStatus && (
                <>
                    <DropdownContent onClick={() => filterOptionChangeHandler(1)}>
                        <FilterCustomCheckbox>
                            <input
                                checked={filterOption[1].isChecked}
                                id='name'
                                onChange={() => filterOptionChangeHandler(1)}
                                type='checkbox'
                                value={1}
                            />
                            <span className='checkmark' />
                            <DefaultDropdownText htmlFor='name'>Name</DefaultDropdownText>
                        </FilterCustomCheckbox>
                    </DropdownContent>
                    <DropdownContent onClick={() => filterOptionChangeHandler(2)}>
                        <FilterCustomCheckbox>
                            <input
                                checked={filterOption[2].isChecked}
                                id='organization'
                                onChange={() => filterOptionChangeHandler(2)}
                                type='checkbox'
                                value={2}
                            />
                            <span className='checkmark' />
                            <DefaultDropdownText htmlFor='organization'>Organization</DefaultDropdownText>
                        </FilterCustomCheckbox>
                    </DropdownContent>
                    <DropdownContent onClick={() => filterOptionChangeHandler(3)}>
                        <FilterCustomCheckbox>
                            <input
                                checked={filterOption[3].isChecked}
                                id='projectAccess'
                                onChange={() => filterOptionChangeHandler(3)}
                                type='checkbox'
                                value={3}
                            />
                            <span className='checkmark' />
                            <DefaultDropdownText htmlFor='projectAccess'>Project Access</DefaultDropdownText>
                        </FilterCustomCheckbox>
                    </DropdownContent>
                    <DropdownContent onClick={() => filterOptionChangeHandler(4)}>
                        <FilterCustomCheckbox>
                            <input
                                checked={filterOption[4].isChecked}
                                id='country'
                                onChange={() => filterOptionChangeHandler(4)}
                                type='checkbox'
                                value={4}
                            />
                            <span className='checkmark' />
                            <DefaultDropdownText htmlFor='country'>Country</DefaultDropdownText>
                        </FilterCustomCheckbox>
                    </DropdownContent>
                    <DropdownContent onClick={() => filterOptionChangeHandler(5)}>
                        <FilterCustomCheckbox>
                            <input
                                checked={filterOption[5].isChecked}
                                id='role'
                                onChange={() => filterOptionChangeHandler(5)}
                                type='checkbox'
                                value={5}
                            />
                            <span className='checkmark' />
                            <DefaultDropdownText htmlFor='role'>Role</DefaultDropdownText>
                        </FilterCustomCheckbox>
                    </DropdownContent>
                </>
            )}
        </DropdownContentContainer>
    )
}

export default MemberFilterSearchChoices

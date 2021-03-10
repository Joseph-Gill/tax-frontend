import React from 'react'
import reset from '../../../../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../../../../assets/icons/stark_search_bar_icon.svg'
import {FilterSpacer} from '../../../../../../style/spans'
import {FilterImgContainer, FilterResetImgContainer} from '../../../../../../style/containers'
import {ModalDropdownSearchContainer, ModalDropdownSearchInput} from '../../../../../Dropdowns/styles'


const EditEntitySearchInput = ({handleFilterEntitiesToEdit, handleResetFilterEntitiesToEdit, handleSelectEditEntityInputPressEnter,
                                   searchEntityTerm}) => {
    return (
        <ModalDropdownSearchContainer>
            <ModalDropdownSearchInput
                name='edit_entity_search'
                onKeyPress={(e) => {handleSelectEditEntityInputPressEnter(e)}}
                placeholder='Search for entity name'
                ref={searchEntityTerm}
                type='text'
            />
            <FilterResetImgContainer onClick={() => handleResetFilterEntitiesToEdit()}>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer onClick={() => handleFilterEntitiesToEdit()}>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </ModalDropdownSearchContainer>
    )
}

export default EditEntitySearchInput

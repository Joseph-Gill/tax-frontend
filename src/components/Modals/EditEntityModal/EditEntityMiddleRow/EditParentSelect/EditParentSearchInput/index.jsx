import React from 'react'
import reset from '../../../../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../../../../assets/icons/stark_search_bar_icon.svg'
import {FilterSpacer} from '../../../../../../style/spans'
import {ModalDropdownSearchContainer, ModalDropdownSearchInput} from '../../../../../Dropdowns/styles'
import {FilterImgContainer, FilterResetImgContainer} from '../../../../../../style/containers'


const EditParentSearchInput = ({handleFilterParents, handleResetFilterParents,
                                   handleSelectParentEntityInputPressEnter, searchParentTerm }) => {
    return (
        <ModalDropdownSearchContainer>
            <ModalDropdownSearchInput
                name='parent_entity_search'
                onKeyPress={(e) => {handleSelectParentEntityInputPressEnter(e)}}
                placeholder='Search for parent name'
                ref={searchParentTerm}
                type='text'
            />
            <FilterResetImgContainer onClick={() => handleResetFilterParents()}>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer onClick={() => handleFilterParents()}>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </ModalDropdownSearchContainer>
    )
}

export default EditParentSearchInput

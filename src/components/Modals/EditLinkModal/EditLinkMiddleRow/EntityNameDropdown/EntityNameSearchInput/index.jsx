import React from 'react'
import reset from '../../../../../../assets/icons/stark_close_icon.svg'
import searchImage from '../../../../../../assets/icons/stark_search_bar_icon.svg'
import {FilterImgContainer, FilterResetImgContainer} from '../../../../../../style/containers'
import {ModalDropdownSearchContainer, ModalDropdownSearchInput} from '../../../../../Dropdowns/styles'
import {FilterSpacer} from '../../../../../../style/spans'


const EntityNameSearchInput = ({filteredEntities, handleFilterEntities, handleLinkEntityInputPressEnter,
                                   handleResetFilterEntities, searchEntityTerm, setFilteredEntities}) => {
    return (
        <ModalDropdownSearchContainer>
            <ModalDropdownSearchInput
                name='link_entity_search'
                onKeyPress={(e) => {handleLinkEntityInputPressEnter(e)}}
                placeholder='Search for entity name'
                ref={searchEntityTerm}
                type='text'
            />
            <FilterResetImgContainer onClick={() => handleResetFilterEntities(searchEntityTerm, setFilteredEntities)}>
                <img alt='reset filter' src={reset} />
            </FilterResetImgContainer>
            <FilterSpacer />
            <FilterImgContainer onClick={() => handleFilterEntities(filteredEntities, setFilteredEntities, searchEntityTerm)}>
                <img alt='search filter' src={searchImage} />
            </FilterImgContainer>
        </ModalDropdownSearchContainer>
    )
}

export default EntityNameSearchInput

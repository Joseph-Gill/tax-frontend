import React from 'react'
import {FilterDropDown} from '../../../style/dropdowns'
import {FilterLabel} from '../../../style/labels'
import styled from 'styled-components/macro'
import filterImage from '../../../assets/icons/stark_filter.svg'
import {FilterImage} from '../../../style/images'
import {FilterInput} from '../../../style/inputs'

const GroupFilterContainer = styled.div`

`

const GroupFilter = ({filter}) => {
    return (
        <GroupFilterContainer>
            <FilterImage alt='filter' src={filterImage} />
            <FilterLabel>Filter</FilterLabel>
            <FilterDropDown>
                <input type='text' />
            </FilterDropDown>
        </GroupFilterContainer>
    )
}

export default GroupFilter

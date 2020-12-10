import React from 'react'
import styled from 'styled-components/macro'
import filterImage from '../../../assets/icons/stark_filter.svg'
import {BaseInput} from '../../../style/inputs'



const GroupFilterContainer = styled.div`

`

const FilterInput = styled(BaseInput)`
    width: 170px;
    border: 1px solid ${props => props.theme.primaryBlue};
    background-image: url(${filterImage});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 6%;
    padding-left: 40px;

    :focus {
        background-image: none;
        padding-left: 11px;
    }

    ::placeholder {
        color: ${props => props.theme.primaryBlue};
    }
`

const GroupFilter = ({filterString, setFilterString}) => {
    return (
        <GroupFilterContainer>
            <FilterInput
                onChange={(e) => setFilterString(e.target.value)}
                placeholder='Filter'
                type='text'
                value={filterString}
            />
        </GroupFilterContainer>
    )
}

export default GroupFilter

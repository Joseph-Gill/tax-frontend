import styled from 'styled-components/macro'


export const GroupGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 26px;
    grid-row-gap: 16px;
`

export const GroupsAccessContainer = styled.div`
    width: 860px;
    margin-top: 38px;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const SearchBarPlaceholder = styled.div`
    height: 36px;
    width: 600px;
`

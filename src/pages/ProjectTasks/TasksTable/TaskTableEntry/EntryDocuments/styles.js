import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const EntryDocumentsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const EntryDocumentsTextContainer = styled.div`
    width: 130px;
    height: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const TaskExpandCollapseImage = styled.img`
    :hover {
        cursor: pointer;
    }
`

import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const DocumentDeleteIconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const TaskDocumentLink = styled(Link)`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.primaryBlue};
    text-decoration: none;
`

export const TaskDocumentDeleteImage = styled.img`
    :hover {
        cursor: pointer;
    }
`

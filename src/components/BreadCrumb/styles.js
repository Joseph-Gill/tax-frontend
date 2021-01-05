import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'


export const BreadCrumbBarContainer = styled.div`
    display: flex;
    width: 860px;
    margin-top: 36px;
`

export const BreakCrumbContainer = styled.div`
    display: flex;
    align-items: center;
`

export const BreadCrumbItemActive = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    line-height: 16px;
    font-weight: 900;
    letter-spacing: 0.01em;
    color: ${props => props.theme.primaryBlue};
    padding-top: 1px;
    margin-right: 4px;
`

export const BreadCrumbItem = styled(BreadCrumbItemActive)`
    color: ${props => props.theme.grayOne};
    font-weight: 600;

    :hover {
        text-decoration: underline;
    }
`

export const BreadCrumbImage = styled.img`
    margin-right: 4px;
`

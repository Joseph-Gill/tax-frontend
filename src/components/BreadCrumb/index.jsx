import React from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import rightChevron from '../../assets/icons/stark_right_chevron.png'
import { v4 as uuidv4 } from 'uuid';

const BreadCrumbBarContainer = styled.div`
    display: flex;
    width: 860px;
    margin-top: 36px;
`

const BreakCrumbContainer = styled.div`
    display: flex;
    align-items: center;
`

const BreadCrumbItem = styled(Link)`
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

const BreadCrumbImage = styled.img`
    margin-right: 4px;
`

const BreadCrumb = ({breadCrumbArray}) => {

    const breadCrumbPath = (array) => {
        return array.map(item => (
            <BreakCrumbContainer key={uuidv4()}>
                <BreadCrumbImage alt='breadcrumb' src={rightChevron} />
                <BreadCrumbItem to={item.to}>{item.display}</BreadCrumbItem>
            </BreakCrumbContainer>
            )
        )}

    return (
        <BreadCrumbBarContainer>
            {breadCrumbPath(breadCrumbArray)}
        </BreadCrumbBarContainer>
    )
}

export default BreadCrumb

import React from 'react'
import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'
import rightChevron from '../../assets/icons/stark_right_chevron.png'


const BreadCrumbContainer = styled.div`
    display: flex;
    align-items: center;
    width: 860px;
    margin-top: 36px;
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
            <>
                <BreadCrumbImage alt='breadcrumb' src={rightChevron} />
                <BreadCrumbItem key={Object.values(item)[0]} to={Object.values(item)[0]}>{Object.keys(item)[0]}</BreadCrumbItem>
            </>
            )
        )}

    return (
        <BreadCrumbContainer>
            {breadCrumbPath(breadCrumbArray)}
        </BreadCrumbContainer>
    )
}

export default BreadCrumb

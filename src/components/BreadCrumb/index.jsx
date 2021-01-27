import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import rightChevron from '../../assets/icons/stark_right_chevron.png'
import {BreadCrumbBarContainer, BreadCrumbImage, BreadCrumbItem, BreadCrumbItemActive, BreakCrumbContainer} from './styles'


const BreadCrumb = ({breadCrumbArray}) => {
    const breadCrumbPath = (array) => {
        // Creates each component for the breadcrumb, active determines the styling of the text
        return array.map(item =>
            item.active ? (
                <BreakCrumbContainer key={uuidv4()}>
                    <BreadCrumbImage alt='breadcrumb' src={rightChevron} />
                    <BreadCrumbItemActive to={item.to}>{item.display}</BreadCrumbItemActive>
                </BreakCrumbContainer>
                ) : (
                    <BreakCrumbContainer key={uuidv4()}>
                        <BreadCrumbImage alt='breadcrumb' src={rightChevron} />
                        <BreadCrumbItem to={item.to}>{item.display}</BreadCrumbItem>
                    </BreakCrumbContainer>))}
    return (
        <BreadCrumbBarContainer>
            {breadCrumbPath(breadCrumbArray)}
        </BreadCrumbBarContainer>
    )
}

export default BreadCrumb

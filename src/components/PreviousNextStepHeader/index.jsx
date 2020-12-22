import React from 'react'
import styled from 'styled-components/macro'
import previousActive from '../../assets/icons/stark_step_header_left_active.png'
import nextActive from '../../assets/icons/stark_step_header_right_active.png'
import previousInactive from '../../assets/icons/stark_step_header_left_inactive.png'
import nextInactive from '../../assets/icons/stark_step_header_right_inactive.png'



const PreviousNextStepHeaderContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: space-between;
    margin-top: 23px;
`

const ImageTextStepHeaderContainer = styled.div`
    display: flex;
`

const PreviousNextArrowLeft = styled.img`
    margin-right: 20px;
`

const PreviousNextArrowRight = styled.img`
    margin-left: 20px;
`



const PreviousNextActiveText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.grayFour};

    ${props => {
        if (props.active) {
            return `color: ${props.theme.primaryBlue}`
            }
        }
    };
`

const PreviousNextStepHeader = ({previous, next}) => {
    return (
        <PreviousNextStepHeaderContainer>
            <ImageTextStepHeaderContainer>
                {previous ? <PreviousNextArrowLeft alt='previous step' src={previousActive} /> : <PreviousNextArrowLeft alt='previous step' src={previousInactive} />}
                <PreviousNextActiveText active={previous}>Previous Step</PreviousNextActiveText>
            </ImageTextStepHeaderContainer>
            <ImageTextStepHeaderContainer>
                <PreviousNextActiveText active={next}>Next Step</PreviousNextActiveText>
                {next ? <PreviousNextArrowRight alt='next step' src={nextActive} /> : <PreviousNextArrowRight alt='next step' src={nextInactive} />}
            </ImageTextStepHeaderContainer>
        </PreviousNextStepHeaderContainer>
    )
}

export default PreviousNextStepHeader

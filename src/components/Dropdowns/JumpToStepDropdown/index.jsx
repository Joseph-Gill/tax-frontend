import React, {useState} from 'react'
import styled from 'styled-components/macro'
import jumpTo from '../../../assets/icons/tax_cheetah_jump_to_icon.svg'
import jumpToGray from '../../../assets/icons/tax_cheetah_jump_to_gray_icon.svg'
import {BEGINNING, ENDING, GROUPS, PROJECTS, STEPS} from '../../../routes/paths'
import {DropdownContainer, DropdownContent, DropdownContentContainer, DropdownContentImgContainer,
    DropdownContentText} from '../styles'


const JumpToButtonContainer = styled.div`
    width: 110px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${props => props.theme.buttonBorderRadius};
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;

    :hover {
        text-decoration: underline;
        transition: 167ms;
    }

    span {
        color: ${props => props.theme.primaryBlue};
        margin-left: 20px;
    }
`

const JumpToIconContainer = styled.div`
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;

    :hover {
        background-color: ${props => props.theme.iconHoverBackground};
    }
`

const JumpToStepContentContainer = styled(DropdownContentContainer)`
    width: 140px;
    max-height: 320px;
    overflow: auto;
    overflow-x: hidden;
`


const JumpToStepDropdown = ({history, stepCardClickHandler, steps}) => {
    const [showDropdown, setShowDropdown] = useState(false)

    const renderStepOptions = () => (
        steps.map(step => (
            <DropdownContent key={step.id} onClick={() => stepCardClickHandler(step.number - 1)}>
                <DropdownContentText>{`Step ${step.number}`}</DropdownContentText>
                <DropdownContentImgContainer>
                    <img alt='redirect' src={jumpToGray} />
                </DropdownContentImgContainer>
            </DropdownContent>
        ))
    )

    return (
        <DropdownContainer>
            <JumpToButtonContainer onClick={() => setShowDropdown(!showDropdown)}>
                <span>Go to...</span>
                <JumpToIconContainer>
                    <img alt='redirect' src={jumpTo} />
                </JumpToIconContainer>
            </JumpToButtonContainer>
            <JumpToStepContentContainer show={showDropdown ? 1 : 0}>
                <DropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${BEGINNING}`)}>
                    <DropdownContentText>Beginning</DropdownContentText>
                    <DropdownContentImgContainer>
                        <img alt='redirect' src={jumpToGray} />
                    </DropdownContentImgContainer>
                </DropdownContent>
                {renderStepOptions()}
                <DropdownContent onClick={() => history.push(`${GROUPS}${PROJECTS}${STEPS}${ENDING}`)}>
                    <DropdownContentText>Ending</DropdownContentText>
                    <DropdownContentImgContainer>
                        <img alt='redirect' src={jumpToGray} />
                    </DropdownContentImgContainer>
                </DropdownContent>
            </JumpToStepContentContainer>
        </DropdownContainer>
    )
}

export default JumpToStepDropdown

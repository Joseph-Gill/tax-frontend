import styled from 'styled-components/macro'
import greyDropdownArrow from '../../../../assets/icons/stark_dropdown_arrow_grey.png'
import {BaseInput} from '../../../../style/inputs'
import {AuthenticatedText} from '../../../../style/text'
import {DropDownChoiceWithBorder} from '../../../../style/containers'
import {DropdownContent, DropdownContentContainer} from '../../../../components/Dropdowns/styles'


export const OrgDropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`

export const OrgDropdownContentContainer = styled(DropdownContentContainer)`
    width: 302px;
    max-height: 144px;
    overflow: auto;
    overflow-x: hidden;
`

export const OrgDropdownButton = styled.button`
    width: 302px;
    height: 42px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.buttonBorderRadius};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 13px;
    border: 1px solid ${props => props.theme.grayFour};
    background-image: url(${greyDropdownArrow});
    background-position: 94%;
    background-repeat: no-repeat;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 167ms;
        color: ${props => props.theme.primaryBlue};
    }

    :focus {
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 1s;
        color: ${props => props.theme.primaryBlue};
    }

`

export const OrgDropdownChoiceContainer = styled(DropDownChoiceWithBorder)`
    padding-left: 13px;
`

export const OrgInputDropdownChoiceContainer = styled(OrgDropdownChoiceContainer)`
    padding-left: 0;
`

export const AddNewOrgText = styled(AuthenticatedText)`
    font-weight: bold;
    color: ${props => props.theme.primaryBlue};
    padding-left: 14px;

    :hover {
            cursor: pointer;
            text-decoration: underline;
    }
`

export const NewOrgInput = styled(BaseInput)`
    height: 42.8px;
    width: 100%;
`

export const OrgDowndownText = styled(AuthenticatedText)`
    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const AddOrgImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    :hover {
        cursor: pointer;
        background-color: ${props => props.theme.iconHoverBackground};
    }
`

export const OrgDropdownContent = styled(DropdownContent)`
    justify-content: flex-start;
`

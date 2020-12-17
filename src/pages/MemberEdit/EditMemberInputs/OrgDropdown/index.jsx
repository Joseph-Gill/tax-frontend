import React from 'react'
import styled from 'styled-components/macro'
import {Dropdown, DropdownOptions} from '../../../../style/dropdowns'
import greyDropdownArrow from '../../../../assets/icons/stark_dropdown_arrow_grey.png'
import blueDropdownArrow from '../../../../assets/icons/stark_dropdown_arrow_blue.svg'
import bluePlusSign from '../../../../assets/icons/stark_add_org_icon.svg'
import {DropDownChoiceWithBorder} from '../../../../style/containers'
import {AuthenticatedText} from '../../../../style/text'
import {BaseInput} from '../../../../style/inputs'


const OrganizationDropdown = styled(Dropdown)`
    margin-left: 0;
`

const OrgDropdownButton = styled.button`
    width: 302px;
    height: 42px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
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
        transition: 1s;
        color: ${props => props.theme.primaryBlue};
    }

    :focus {
        border: 1px solid ${props => props.theme.primaryBlue};
        outline: none;
        transition: 1s;
        color: ${props => props.theme.primaryBlue};
    }

`

const OrgDropdownOptions = styled(DropdownOptions)`
    min-width: 302px;
    max-height: 144px;
    overflow: scroll;
    overflow-x: hidden;

      /* width */
    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.grayFive};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.grayTwo};
    }

`

const OrgDropdownChoiceContainer = styled(DropDownChoiceWithBorder)`
    padding-left: 13px;
`

const OrgInputDropdownChoiceContainer = styled(OrgDropdownChoiceContainer)`
    padding-left: 0;
`

const AddNewOrgText = styled(AuthenticatedText)`
    font-weight: bold;
    color: ${props => props.theme.primaryBlue};
    padding-left: 14px;
`

const NewOrgInput = styled(BaseInput)`
    height: 41px;
    width: 100%;
`


const OrgDropdown = ({newOrg, groupOrganizations, handleCreateNewOrganization, selectNewOrgStatus, selectOrgName, setSelectNewOrgStatus, setSelectOrgName}) => {
    const handleNewOrgInputPressEnter = (e) => {
        if (e.key === 'Enter') {
            handleCreateNewOrganization()
        }
    }

    return (
        <OrganizationDropdown>
            <OrgDropdownButton>{selectOrgName ? selectOrgName : 'Select a organization'}</OrgDropdownButton>
            <OrgDropdownOptions>
                {!selectNewOrgStatus ? (
                    <OrgDropdownChoiceContainer onClick={() => setSelectNewOrgStatus(!selectNewOrgStatus)}>
                        <img alt='add organization' src={bluePlusSign} />
                        <AddNewOrgText>Add new organization</AddNewOrgText>
                    </OrgDropdownChoiceContainer>) : (
                        <OrgInputDropdownChoiceContainer>
                            <NewOrgInput
                                name='new_organization'
                                onKeyPress={(e) => handleNewOrgInputPressEnter(e)}
                                placeholder='Enter the organization name'
                                ref={newOrg}
                                type='text'
                            />
                        </OrgInputDropdownChoiceContainer>)}
                {groupOrganizations.map(org => (
                    <OrgDropdownChoiceContainer
                        key={org.id}
                        onClick={() => setSelectOrgName(org.name)}
                    >
                        <AuthenticatedText>{org.name}</AuthenticatedText>
                    </OrgDropdownChoiceContainer>
                ))}
            </OrgDropdownOptions>
        </OrganizationDropdown>
    )
}

export default OrgDropdown

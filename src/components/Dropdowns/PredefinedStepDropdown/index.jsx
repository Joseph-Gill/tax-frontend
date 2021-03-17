import React from 'react'
import styled from 'styled-components'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import DropdownContentImage from '../DropdownComponents/DropdownContentImage'
import robot from '../../../assets/icons/tax_cheetah_robot_icon_blue_24px.svg'
import {DropdownButtonContainer, DropdownContentText} from '../styles'
import {DropdownContent, DropdownContentContainer} from '../../../style/dropdowns'


const PredefinedDropdownContentContainer = styled(DropdownContentContainer)`
    width: 210px;
`


const PredefinedStepDropdown = ({setShowPredefinedStepsDropdown, showPredefinedStepsDropdown}) => {
    return (
        <DropdownInternalContainer
            setDropdownView={setShowPredefinedStepsDropdown}
            showDropdownView={showPredefinedStepsDropdown}
        >
            <DropdownButtonContainer onClick={() => setShowPredefinedStepsDropdown(!showPredefinedStepsDropdown)}>
                <img alt='Predefined Step' data-for='predefined' data-tip src={robot} />
            </DropdownButtonContainer>
            <PredefinedDropdownContentContainer show={showPredefinedStepsDropdown ? 1 : 0}>
                <DropdownContent>
                    <DropdownContentText>Merger</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent>
                    <DropdownContentText>Contribution</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent>
                    <DropdownContentText>Distribution</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent>
                    <DropdownContentText>Sale of Participation</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent>
                    <DropdownContentText>Sale of Assets</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent>
                    <DropdownContentText>Liquidation</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent>
                    <DropdownContentText>Incorporation</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent>
                    <DropdownContentText>Change of Legal Form</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
            </PredefinedDropdownContentContainer>
        </DropdownInternalContainer>
    )
}

export default PredefinedStepDropdown

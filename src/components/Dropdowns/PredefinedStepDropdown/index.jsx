import React from 'react'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import DropdownContentImage from '../DropdownComponents/DropdownContentImage'
import robot from '../../../assets/icons/tax_cheetah_robot_icon_blue_24px.svg'
import {DropdownButtonContainer, DropdownContentText} from '../styles'
import {DropdownContent} from '../../../style/dropdowns'
import {PredefinedDropdownContentContainer} from './styles'


const PredefinedStepDropdown = ({setShowPredefinedContribution, setShowPredefinedDistribution, setShowPredefinedStepsDropdown,
                                    showPredefinedStepsDropdown}) => {

    const handlePredefinedClick = (setShow) => {
        setShow(true)
        setShowPredefinedStepsDropdown(false)
    }

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
                <DropdownContent
                    onClick={() => handlePredefinedClick(setShowPredefinedContribution)}
                >
                    <DropdownContentText>Contribution</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent
                    onClick={() => handlePredefinedClick(setShowPredefinedDistribution)}
                >
                    <DropdownContentText>Distribution</DropdownContentText>
                    <DropdownContentImage dropdownCalling='Predefined' />
                </DropdownContent>
                <DropdownContent>
                    <DropdownContentText>Intercompany Sale</DropdownContentText>
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

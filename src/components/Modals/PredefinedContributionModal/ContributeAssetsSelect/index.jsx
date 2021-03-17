import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton, ModalDropdownContent, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
import {EntityErrorContainer} from '../../styles'


const ContributeAssetsSelect = ({contributedAssets, error, handleSelectAssetsContributedChange, setShowAssetsDropdown,
                                    showAssetsDropdown, targetContributor}) => {
    return (
        <div>
            <ActiveInputLabel
                disabled={!targetContributor}
            >
                Assets to be contributed
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowAssetsDropdown}
                showDropdownView={showAssetsDropdown}
            >
                <ModalDropdownButton
                    disabled={!targetContributor}
                    onClick={() => setShowAssetsDropdown(!showAssetsDropdown)}
                >
                    {!contributedAssets ? 'Select assets to contribute' : contributedAssets === 'participation' ? 'Participation' : 'Other Assets'}
                </ModalDropdownButton>
                <ModalDropdownContentContainer show={showAssetsDropdown ? 1 : 0}>
                    <ModalDropdownContent
                        onClick={() => handleSelectAssetsContributedChange('participation')}
                    >
                        <span>Participation</span>
                    </ModalDropdownContent>
                    <ModalDropdownContent
                        onClick={() => handleSelectAssetsContributedChange('other assets')}
                    >
                        <span>Other Assets</span>
                    </ModalDropdownContent>
                </ModalDropdownContentContainer>
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.contributedAssets}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default ContributeAssetsSelect

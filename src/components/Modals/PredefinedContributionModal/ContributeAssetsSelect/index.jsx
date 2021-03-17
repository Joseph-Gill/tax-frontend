import React from 'react'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import ContributeAssetsChoices from './ContributeAssetsChoices'
import {ErrorMessage} from '../../../../style/messages'
import {ActiveInputLabel} from '../../../../style/labels'
import {ModalDropdownButton} from '../../../Dropdowns/styles'
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
                <ContributeAssetsChoices
                    handleSelectAssetsContributedChange={handleSelectAssetsContributedChange}
                    showAssetsDropdown={showAssetsDropdown}
                />
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.contributedAssets}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default ContributeAssetsSelect

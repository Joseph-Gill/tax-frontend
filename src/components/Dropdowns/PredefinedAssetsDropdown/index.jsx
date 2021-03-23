import React from 'react'
import PredefinedAssetsChoices from './PredefinedAssetsChoices'
import DropdownInternalContainer from '../DropdownComponents/DropdownInternalContainer'
import {ErrorMessage} from '../../../style/messages'
import {ActiveInputLabel} from '../../../style/labels'
import {EntityErrorContainer} from '../../Modals/styles'
import {ModalDropdownButton} from '../styles'


const PredefinedAssetsDropdown = ({assetsChoice, disabled, error, handleSelectAssetsChange,
                                      setShowAssetsDropdown, showAssetsDropdown}) => {
    return (
        <div>
            <ActiveInputLabel
                disabled={disabled}
            >
                Assets to be distributed
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowAssetsDropdown}
                showDropdownView={showAssetsDropdown}
            >
                <ModalDropdownButton
                    disabled={disabled}
                    onClick={() => setShowAssetsDropdown(!showAssetsDropdown)}
                >
                    {!assetsChoice ? 'Select assets to distribute' : assetsChoice === 'participation' ? 'Participation' : assetsChoice === 'business' ? 'Business or business related assets' : 'Other Assets' }
                </ModalDropdownButton>
                <PredefinedAssetsChoices
                    handleSelectAssetsChange={handleSelectAssetsChange}
                    showAssetsDropdown={showAssetsDropdown}
                />
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.assets}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default PredefinedAssetsDropdown

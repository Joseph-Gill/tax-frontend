import React from 'react'
import DistributeAssetsChoices from './DistributeAssetsChoices'
import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
import {ActiveInputLabel} from '../../../../style/labels'
import {ErrorMessage} from '../../../../style/messages'
import {ModalDropdownButton} from '../../../Dropdowns/styles'
import {EntityErrorContainer} from '../../styles'


const DistributeAssetsSelect = ({distributedAssets, error, handleSelectAssetsDistributedChange, setShowAssetsDropdown,
                                    showAssetsDropdown, targetDistributor}) => {
    return (
        <div>
            <ActiveInputLabel
                disabled={!targetDistributor}
            >
                Assets to be distributed
            </ActiveInputLabel>
            <DropdownInternalContainer
                setDropdownView={setShowAssetsDropdown}
                showDropdownView={showAssetsDropdown}
            >
                <ModalDropdownButton
                    disabled={!targetDistributor}
                    onClick={() => setShowAssetsDropdown(!showAssetsDropdown)}
                >
                    {!distributedAssets ? 'Select assets to distribute' : distributedAssets === 'participation' ? 'Participation' : distributedAssets === 'business' ? 'Business or business related assets' : 'Other Assets' }
                </ModalDropdownButton>
                <DistributeAssetsChoices
                    handleSelectAssetsDistributedChange={handleSelectAssetsDistributedChange}
                    showAssetsDropdown={showAssetsDropdown}
                />
            </DropdownInternalContainer>
            <EntityErrorContainer>
                {error && <ErrorMessage>{error.distributedAssets}</ErrorMessage>}
            </EntityErrorContainer>
        </div>
    )
}

export default DistributeAssetsSelect

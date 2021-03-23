import React from 'react'
import {CustomCheckbox} from '../../../../style/checkbox'
import {PredefinedCheckboxCheckmarkContainer, PredefinedCheckboxCheckmarkLabel,
    PredefinedCheckboxContainer, PredefinedCheckboxTextContainer} from '../../styles'


const ContributionIssuanceSelect = ({issuanceNewShares, setIssuanceNewShares}) => {
    return (
        <PredefinedCheckboxContainer>
            <PredefinedCheckboxTextContainer>
                <span>Is this contribution against</span>
                <span>issuance of new shares?</span>
            </PredefinedCheckboxTextContainer>
            <PredefinedCheckboxCheckmarkContainer>
                <CustomCheckbox>
                    <input
                        checked={issuanceNewShares}
                        id='yes'
                        onChange={() => setIssuanceNewShares(!issuanceNewShares)}
                        type='checkbox'
                        value='yes'
                    />
                    <span className='checkmark' />
                    <PredefinedCheckboxCheckmarkLabel htmlFor='yes'>Yes</PredefinedCheckboxCheckmarkLabel>
                </CustomCheckbox>
                <CustomCheckbox>
                    <input
                        checked={!issuanceNewShares}
                        id='no'
                        onChange={() => setIssuanceNewShares(!issuanceNewShares)}
                        type='checkbox'
                        value='no'
                    />
                    <span className='checkmark' />
                    <PredefinedCheckboxCheckmarkLabel htmlFor='no'>No</PredefinedCheckboxCheckmarkLabel>
                </CustomCheckbox>
            </PredefinedCheckboxCheckmarkContainer>
        </PredefinedCheckboxContainer>
    )
}

export default ContributionIssuanceSelect

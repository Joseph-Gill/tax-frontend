import React from 'react'
import {CustomCheckbox} from '../../../../style/checkbox'
import {IssuanceCheckmarkContainer, IssuanceCheckmarkLabel, IssuanceContainer, IssuanceTextContainer} from './styles'


const ContributionIssuanceSelect = ({issuanceNewShares, setIssuanceNewShares}) => {
    return (
        <IssuanceContainer>
            <IssuanceTextContainer>
                <span>Is this contribution against</span>
                <span>issuance of new shares?</span>
            </IssuanceTextContainer>
            <IssuanceCheckmarkContainer>
                <CustomCheckbox>
                    <input
                        checked={issuanceNewShares}
                        id='yes'
                        onChange={() => setIssuanceNewShares(!issuanceNewShares)}
                        type='checkbox'
                        value='yes'
                    />
                    <span className='checkmark' />
                    <IssuanceCheckmarkLabel htmlFor='yes'>Yes</IssuanceCheckmarkLabel>
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
                    <IssuanceCheckmarkLabel htmlFor='no'>No</IssuanceCheckmarkLabel>
                </CustomCheckbox>
            </IssuanceCheckmarkContainer>
        </IssuanceContainer>
    )
}

export default ContributionIssuanceSelect

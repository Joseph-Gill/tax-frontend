import React from 'react'
import {PredefinedCheckboxCheckmarkContainer, PredefinedCheckboxCheckmarkLabel, PredefinedCheckboxContainer,
    PredefinedCheckboxTextContainer} from '../../styles'
import {CustomCheckbox} from '../../../../style/checkbox'


const IntercompanySaleMarketValueSelect = ({setSoldAtFairMarketValue, soldAtFairMarketValue}) => {

    return (
        <PredefinedCheckboxContainer>
            <PredefinedCheckboxTextContainer>
                <span>Sell at Fair Market</span>
                <span>Value?</span>
            </PredefinedCheckboxTextContainer>
            <PredefinedCheckboxCheckmarkContainer>
                <CustomCheckbox>
                    <input
                        checked={soldAtFairMarketValue}
                        id='yes'
                        onChange={() => setSoldAtFairMarketValue(!soldAtFairMarketValue)}
                        type='checkbox'
                        value='yes'
                    />
                    <span className='checkmark' />
                    <PredefinedCheckboxCheckmarkLabel htmlFor='yes'>Yes</PredefinedCheckboxCheckmarkLabel>
                </CustomCheckbox>
                <CustomCheckbox>
                    <input
                        checked={!soldAtFairMarketValue}
                        id='no'
                        onChange={() => setSoldAtFairMarketValue(!soldAtFairMarketValue)}
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

export default IntercompanySaleMarketValueSelect

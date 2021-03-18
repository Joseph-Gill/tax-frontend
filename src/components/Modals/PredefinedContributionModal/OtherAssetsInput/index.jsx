import React from 'react'
import ModalInput from '../../ModalComponents/ModalInput'
import {FadeInContainer} from '../../../../style/animations'


const OtherAssetsInput = ({error, setOtherAssetsLabel, otherAssetsLabel}) => {
    return (
        <FadeInContainer>
            <ModalInput
                changeHandler={(e) => setOtherAssetsLabel(e.target.value)}
                error={error}
                errorLocation={error.otherAssets}
                label='Distributed assets'
                name='otherAssets'
                placeholder='Specify assets to distribute'
                type='text'
                value={otherAssetsLabel}
            />
        </FadeInContainer>
    )
}

export default OtherAssetsInput

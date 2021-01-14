import React from 'react'
import {imageChangeHandler, imageClickHandler} from '../../../helpers'
import {ButtonContainer, FileUploadContainer, GroupImageRemoveButton, RecommendSizeText, SizeTextAndButtonsContainer} from './styles'


const SizeTextAndButtons = ({hiddenFileInput, setGroupImage}) => {
    return (
        <SizeTextAndButtonsContainer>
            <RecommendSizeText>Recommended Size 230x180px</RecommendSizeText>
            <ButtonContainer>
                <FileUploadContainer onClick={() => imageClickHandler(hiddenFileInput)}>
                    <input
                        name='avatar'
                        onChange={(e) => imageChangeHandler(e, setGroupImage)}
                        ref={hiddenFileInput}
                        style={{ display: "none" }}
                        type='file'
                    />
                    Upload
                </FileUploadContainer>
                <GroupImageRemoveButton onClick={() => setGroupImage({avatar: null, changed: true})}>Remove</GroupImageRemoveButton>
            </ButtonContainer>
        </SizeTextAndButtonsContainer>
    )
}

export default SizeTextAndButtons

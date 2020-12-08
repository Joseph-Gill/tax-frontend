import React from 'react'
import phImage from '../../../assets/icons/stark_create_grp_ph_image.png'
import {FileUploadContainer, GroupImage, GroupImageLowerConatainer, GroupImageRemoveButton, GroupNameInput, InputGroupInfoContainer, InputLeftContainer, InputRightContainer, InputTitle} from './styles'


const GroupInfo = ({groupImage, groupName, hiddenFileInput, imageChangeHandler, imageClickHandler, setGroupImage}) => {

    return (
        <InputGroupInfoContainer>
            <InputLeftContainer>
                <div>
                    <InputTitle>Group Image</InputTitle>
                </div>
                <GroupImageLowerConatainer>
                    <GroupImage
                        alt='group'
                        src={groupImage ? URL.createObjectURL(groupImage) : phImage}
                    />
                    <FileUploadContainer onClick={imageClickHandler}>
                        <input
                            name='avatar'
                            onChange={imageChangeHandler}
                            ref={hiddenFileInput}
                            style={{ display: "none" }}
                            type='file'
                        />
                        Upload
                    </FileUploadContainer>
                    <GroupImageRemoveButton onClick={() => setGroupImage(null)}>Remove</GroupImageRemoveButton>
                </GroupImageLowerConatainer>
            </InputLeftContainer>
            <InputRightContainer>
                <InputTitle>Group Name</InputTitle>
                <GroupNameInput
                    name='group_name'
                    placeholder='Name your group'
                    ref={groupName}
                    type='text'
                />
            </InputRightContainer>
        </InputGroupInfoContainer>
    )
}

export default GroupInfo

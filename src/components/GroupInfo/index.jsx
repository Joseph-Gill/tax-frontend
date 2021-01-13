import React from 'react'
import phImage from '../../assets/icons/stark_create_grp_ph_image.png'
import {FileUploadContainer, GroupImage, GroupImageLowerConatainer, GroupImageRemoveButton, GroupInfoErrorMessageContainer, GroupNameInput, InputGroupInfoContainer, InputLeftContainer, InputRightContainer, InputTitle} from './styles'
import {imageChangeHandler, imageClickHandler} from '../../helpers'
import {useSelector} from 'react-redux'
import {ErrorMessage} from '../../style/messages'


const GroupInfo = ({groupImage, groupName, hiddenFileInput, nameDisabled, setGroupImage, setGroupName}) => {
    const error = useSelector(state => state.errorReducer.error)

    return (
        <InputGroupInfoContainer>
            <InputLeftContainer>
                <div>
                    <InputTitle>Group Image</InputTitle>
                </div>
                <GroupImageLowerConatainer>
                    <GroupImage
                        alt='group'
                        src={groupImage ? groupImage : phImage}
                    />
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
                    <GroupImageRemoveButton onClick={() => setGroupImage(null)}>Remove</GroupImageRemoveButton>
                </GroupImageLowerConatainer>
            </InputLeftContainer>
            <InputRightContainer>
                <InputTitle>Group Name</InputTitle>
                <GroupNameInput
                    disabled={nameDisabled}
                    name='group_name'
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder='Name your group'
                    type='text'
                    value={groupName}
                />
                <GroupInfoErrorMessageContainer>
                    {error && <ErrorMessage>{error.name}</ErrorMessage>}
                </GroupInfoErrorMessageContainer>
            </InputRightContainer>
        </InputGroupInfoContainer>
    )
}

export default GroupInfo

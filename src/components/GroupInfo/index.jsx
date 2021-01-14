import React from 'react'
import phImage from '../../assets/icons/stark_create_grp_ph_image.png'
import {GroupImage, GroupImageLowerContainer, GroupInfoErrorMessageContainer, GroupNameInput, InputGroupInfoContainer, InputLeftContainer, InputRightContainer, InputTitle} from './styles'
import {useSelector} from 'react-redux'
import {ErrorMessage} from '../../style/messages'
import SizeTextAndButtons from './SizeTextAndButtons'


const GroupInfo = ({fromGroupAdd, fromGroupEdit, groupImage, groupName, hiddenFileInput, nameDisabled, setGroupImage, setGroupName}) => {
    const error = useSelector(state => state.errorReducer.error)

    return (
        <InputGroupInfoContainer>
            <InputLeftContainer>
                <div>
                    <InputTitle>Group Image</InputTitle>
                </div>
                <GroupImageLowerContainer>
                    {fromGroupAdd ?
                        <GroupImage
                            alt='group'
                            src={groupImage.avatar ? URL.createObjectURL(groupImage.avatar) : phImage}
                        /> : null}
                    {fromGroupEdit ?
                        <GroupImage
                            alt='group'
                            src={!groupImage.avatar ? phImage : groupImage.changed ? URL.createObjectURL(groupImage.avatar) : groupImage.avatar}
                        /> : null}
                <SizeTextAndButtons
                    hiddenFileInput={hiddenFileInput}
                    setGroupImage={setGroupImage}
                />
                </GroupImageLowerContainer>
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

import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextYellow, OpenCommentsNumber} from './styles'


const OpenComments = ({number, setShowViewMoreModal}) => {
    return (
        <GroupCommentTaskContainer onClick={() => setShowViewMoreModal(true)}>
            <HomeGroupTextYellow>Comments Open</HomeGroupTextYellow>
            <OpenCommentsNumber>{number}</OpenCommentsNumber>
        </GroupCommentTaskContainer>
    )
}

export default OpenComments

import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextBlue, ReviewCommentsNumber} from './styles'


const ReviewComments = ({number, setShowViewMoreModal}) => {
    return (
        <GroupCommentTaskContainer onClick={() => setShowViewMoreModal(true)}>
            <HomeGroupTextBlue>Comments to Review</HomeGroupTextBlue>
            <ReviewCommentsNumber>{number}</ReviewCommentsNumber>
        </GroupCommentTaskContainer>
    )
}

export default ReviewComments

import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextBlue, ReviewCommentsNumber} from './styles'


const ReviewComments = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <ReviewCommentsNumber>{number}</ReviewCommentsNumber>
            <HomeGroupTextBlue>Comments to Review</HomeGroupTextBlue>
        </GroupCommentTaskContainer>
    )
}

export default ReviewComments

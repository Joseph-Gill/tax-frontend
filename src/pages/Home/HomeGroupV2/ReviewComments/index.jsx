import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextBlue, ReviewCommentsNumber} from './styles'


const ReviewComments = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <HomeGroupTextBlue>Comments to Review</HomeGroupTextBlue>
            <ReviewCommentsNumber>{number}</ReviewCommentsNumber>
        </GroupCommentTaskContainer>
    )
}

export default ReviewComments

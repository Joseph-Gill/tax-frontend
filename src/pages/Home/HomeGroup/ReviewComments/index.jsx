import React from 'react'
import styled from 'styled-components/macro'
import {HomeGroupText} from '../../../../style/text'
import {GroupCommentTaskContainer, GroupCommentTaskNumberContainer} from '../../../../style/containers'

const HomeGroupTextBlue = styled(HomeGroupText)`
  color: ${props => props.theme.primaryBlue};
`

const ReviewCommentsNumber = styled(GroupCommentTaskNumberContainer)`
  color: ${props => props.theme.primaryBlue};
  background: ${props => props.theme.primaryShadeTwo};
`

const ReviewComments = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <ReviewCommentsNumber>{number}</ReviewCommentsNumber>
            <HomeGroupTextBlue>Comments to Review</HomeGroupTextBlue>
        </GroupCommentTaskContainer>
    )
}

export default ReviewComments

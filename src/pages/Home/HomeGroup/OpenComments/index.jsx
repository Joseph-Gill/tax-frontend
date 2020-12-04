import React from 'react'
import styled from 'styled-components/macro'
import {HomeGroupText} from '../../../../style/text'
import {GroupCommentTaskContainer, GroupCommentTaskNumberContainer} from '../../../../style/containers'

const HomeGroupTextYellow = styled(HomeGroupText)`
  color: ${props => props.theme.yellowDark};
`

const OpenCommentsNumber = styled(GroupCommentTaskNumberContainer)`
  color: ${props => props.theme.yellowDark};
  background: ${props => props.theme.yellowLight};
`

const OpenComments = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <OpenCommentsNumber>{number}</OpenCommentsNumber>
            <HomeGroupTextYellow>Comments Open</HomeGroupTextYellow>
        </GroupCommentTaskContainer>
    )
}

export default OpenComments

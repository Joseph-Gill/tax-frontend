import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextYellow, OpenCommentsNumber} from './styles'


const OpenComments = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <HomeGroupTextYellow>Comments Open</HomeGroupTextYellow>
            <OpenCommentsNumber>{number}</OpenCommentsNumber>
        </GroupCommentTaskContainer>
    )
}

export default OpenComments

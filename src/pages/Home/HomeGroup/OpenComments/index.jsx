import React from 'react'
import {GroupCommentTaskContainer} from '../../../../style/containers'
import {HomeGroupTextYellow, OpenCommentsNumber} from './styles'


const OpenComments = ({number}) => {
    return (
        <GroupCommentTaskContainer>
            <OpenCommentsNumber>{number}</OpenCommentsNumber>
            <HomeGroupTextYellow>Comments Open</HomeGroupTextYellow>
        </GroupCommentTaskContainer>
    )
}

export default OpenComments

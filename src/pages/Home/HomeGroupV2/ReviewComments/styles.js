import styled from 'styled-components/macro'
import {HomeGroupText} from '../../../../style/text'
import {GroupCommentTaskNumberContainer} from '../../../../style/containers'


export const HomeGroupTextBlue = styled(HomeGroupText)`
  color: ${props => props.theme.primaryBlue};
`

export const ReviewCommentsNumber = styled(GroupCommentTaskNumberContainer)`
  color: ${props => props.theme.primaryBlue};
  background: ${props => props.theme.primaryShadeTwo};
`

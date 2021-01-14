import styled from 'styled-components/macro'
import {HomeGroupText} from '../../../../style/text'
import {GroupCommentTaskNumberContainer} from '../../../../style/containers'


export const HomeGroupTextYellow = styled(HomeGroupText)`
  color: ${props => props.theme.yellowDark};
`

export const OpenCommentsNumber = styled(GroupCommentTaskNumberContainer)`
  color: ${props => props.theme.yellowDark};
  background: ${props => props.theme.yellowLight};
`

import styled from 'styled-components/macro'
import {HomeGroupText} from '../../../../style/text'
import {GroupCommentTaskNumberContainer} from '../../../../style/containers'


export const HomeGroupTextRed = styled(HomeGroupText)`
  color: ${props => props.theme.redDark};
`

export const OverdueTaskNumber = styled(GroupCommentTaskNumberContainer)`
  color: ${props => props.theme.redDark};
  background: ${props => props.theme.redLight};
`

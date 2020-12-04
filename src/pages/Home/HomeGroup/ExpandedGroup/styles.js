import styled from 'styled-components/macro'
import {AuthenticatedPageSectionTitle} from '../../../../style/titles'
import {ModalText} from '../../../../style/text'


export const ExpandedGroupContainer = styled.div`
  margin-top: 20px;
  width: 820px;
  background: ${props => props.theme.grayFive};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: inset 0 2px 4px rgba(44, 33, 120, 0.1), inset 0 1px 2px rgba(44, 33, 120, 0.1);
`

export const NextStepContainer = styled.div`
  height: 82px;
  width: 820px;
  border-bottom: 1px solid ${props => props.theme.grayFour};
  padding-left: 20px;

  div {
    margin-top: 11px;
    display: flex;
  }
`

export const CommentsContainer = styled.div`
  width: 820px;
  border-bottom: 1px solid ${props => props.theme.grayFour};
  padding-left: 20px;
`

export const TaskContainer = styled.div`
  width: 820px;
  padding-left: 20px;
`

export const GroupSectionTitle = styled(AuthenticatedPageSectionTitle)`
  padding-top: 20px;
  margin-top: 0;
`

export const DateText = styled(ModalText)`
  color: ${props => props.theme.grayTwo};
`

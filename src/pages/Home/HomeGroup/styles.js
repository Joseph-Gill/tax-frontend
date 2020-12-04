import styled from 'styled-components/macro'
import {BaseButton} from '../../../style/buttons'
import {HomeGroupText} from '../../../style/text'

export const HomeGroupContainer = styled.div`
  width: 860px;
  background: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px 20px 13px 20px;
`

export const UpperRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const UpperRowRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 469px;
`

export const LowerRowContainerCollapsed = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
`

export const LowerRowRightContainer = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
`

export const GroupTitle = styled.h4`
  font-size: 16px;
  line-height: 18px;
  color: ${props => props.theme.black};
`

export const HomeGroupButton = styled(BaseButton)`
  height: 26px;
  width: 115px;
  font-size: 12px;
`

export const ExpandCollapseText = styled(HomeGroupText)`
  color: ${props => props.theme.primaryBlue};
`

export const ExpandCollapgeImage = styled.img`
  width: 20px;
  height: 20px;
  transform: rotate(-90deg);
`

import styled from 'styled-components/macro'
import {BaseButton} from '../../../style/buttons'

export const HomeGroupContainer = styled.div`
    width: 860px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px 20px 13px 20px;
    margin-bottom: 20px;
    margin-top: 30px;
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

export const MiddleRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 36px;
`

export const BottomRowContainer = styled.div`
    width: 820px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
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

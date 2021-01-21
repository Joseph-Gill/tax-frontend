import styled from 'styled-components/macro'
import {BaseButton} from '../../../style/buttons'
import {animated} from 'react-spring'

export const HomeGroupContainer = styled(animated.div)`
    width: 860px;
    border: 1px solid ${props => props.theme.grayFour};
    height: ${props => props.expanded ? '825px' : '140px'};
    background: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px 20px 0 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 20px ${props => props.theme.boxShadowColor};
    transition: height 0.5s;
`

export const UpperRowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`

export const MiddleRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BottomRowContainer = styled.div`
    width: 820px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const GroupTitle = styled.h4`
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.black};
`

export const ProjectTitle = styled(GroupTitle)`
    font-size: 12px;
`

export const HomeGroupButton = styled(BaseButton)`
    height: 26px;
    width: 115px;
    font-size: 12px;
`

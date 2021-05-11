import styled from 'styled-components/macro'
import {GroupTitle} from '../../../style/titles'
import {BaseButton} from '../../../style/buttons'


export const GroupCardContainerV2 = styled.div`
    height: 255px;
    width: 415px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    box-shadow: 0 0 20px ${props => props.theme.boxShadowColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: 16px;

    :hover {
        transition: 167ms;
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        border: 1px solid ${props => props.theme.primaryBlue};
    }
`

export const GroupCardUpperContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`

export const GroupCardUpperLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 130px;
    justify-content: space-evenly;

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        line-height: 19px;
        font-weight: 600;

        :hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const GroupCardLogo = styled.img`
    position: absolute;
    max-width: 176px;
    height: auto;
    max-height: 130px;
    top: 0;
    right: 0;
`

export const GroupToggleContainer = styled.div`
    height: 100%;
    border-bottom: 2px solid ${props => props.theme.grayFour};
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`


export const GroupName = styled(GroupTitle)`
    margin-bottom: 0;

    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const GoToGroupButton = styled(BaseButton)`
    height: 26px;
    width: 115px;
    font-size: 12px;
    margin-top: 16px;
`

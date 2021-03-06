import styled from 'styled-components/macro'
import {TableData} from '../../../style/tables'
import {CardInfoText} from '../../../style/text'


export const TableDataCheckbox = styled(TableData)`
    width: 45px;
`

export const ActiveMemberUserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const ActiveMemberUserText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    line-height: 22px;
`

export const GroupMembersTableContainer = styled.div`
    width: 860px;
    background-color: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 21px;
    max-height: 375px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
`

export const NewMemberGreenText = styled(CardInfoText)`
    color: ${props => props.theme.greenDark};
`

export const NewMemberYellowText = styled(CardInfoText)`
    color: ${props => props.theme.yellowDark};
`

export const RoleFieldText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 12px;
    line-height: 16px;
    color: ${props => props.theme.black};
`

export const RoleTextImageContainer = styled.td`
    border-right: 1px solid ${props => props.theme.grayFour};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 77px;
`

export const RoleFieldChevronContainer = styled.div`
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    :hover {
        cursor: pointer;
        background: ${props => props.theme.iconHoverBackground};
    }
`

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

    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.grayFive};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.grayFour};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme.grayTwo};
    }
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

export const RoleFieldChevron = styled.img`
    :hover {
        cursor: pointer;
        box-shadow: ${props => props.theme.boxShadow};
        background: ${props => props.theme.graySix};
        transition: 167ms;
    }
`

import styled from 'styled-components/macro'
import {TableData} from '../../../style/tables'
import {CardInfoText} from '../../../style/text'
import {BaseButton} from '../../../style/buttons'


export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
`

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
    max-height: 350px;
`

export const NewMemberGreenText = styled(CardInfoText)`
    color: ${props => props.theme.greenDark};
`

export const NewMemberYellowText = styled(CardInfoText)`
    color: ${props => props.theme.yellowDark};
`

export const NoInvitedMembersButton = styled(BaseButton)`
    width: 183px;
    height: 32px;
    margin-top: 20px;
`

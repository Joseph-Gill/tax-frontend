import styled from 'styled-components/macro'
import {NavbarTitle} from '../../../../../style/titles'
import {TableButton} from '../../../../../style/buttons'
import {StatusDropdown} from '../../../../../style/dropdowns'
import {DropdownOption} from '../../../../../style/options'


export const TaskTableEntryExpandedContainer = styled.div`
    width: 853px;
    height: 219px;
    background: ${props => props.theme.graySix};
    padding: 20px 44px 29px 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ExpandedTaskTile = styled(NavbarTitle)`

`

export const ExpandedTaskDescriptionContainer = styled.div`
    width: 772px;
    height: 92px;
    max-height: 92px;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
    margin-top: 10px;
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

export const ExpandedTaskStatusButtonContainer = styled.div`
    width: 772px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

export const ExpandedTaskStatusButtonLeftContainer = styled.div`
    width: 234px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ExpandedTaskEditLogButton = styled(TableButton)`
    width: 55px;
    height: 26px;
`

export const ExpandedTaskStatusDropdown = styled(StatusDropdown)`
    width: 102px;
    height: 26px;
    background-position-x: 84px;
    font-size: 12px;
    line-height: 16px;
`

export const ExpandedTaskStatusDropdownOption = styled(DropdownOption)`
    font-size: 12px;
    line-height: 16px;
`

import styled from 'styled-components/macro'
import {DisplayTitleWithButtonContainer} from '../../style/containers'
import {BaseButton} from '../../style/buttons'


export const MembersStatusToggleContainer = styled.div`
    width: 150px;
    height: 40px;
    background: rgba(224, 224, 224, 0.5);
    box-shadow: inset 0 2px 4px rgba(44, 33, 120, 0.1), inset 0 1px 2px rgba(44, 33, 120, 0.1);
    border-radius: 8px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
        cursor: pointer;
    }
`

export const DisplayMembersTitleContainer = styled(DisplayTitleWithButtonContainer)`
    margin-top: 0;
`

export const WhiteStatusContainer = styled.div`
    width: 66px;
    height: 30px;
    background: ${props => props.theme.white};
    box-shadow: 0 1px 2px rgba(97, 97, 97, 0.1), 0 2px 4px rgba(97, 97, 97, 0.1);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.22px;
    color: ${props => props.theme.grayOne};
`

export const GreyStatusText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.22px;
    color: ${props => props.theme.grayThree};
    margin: 0 12px;
`

export const ActionFilterDropdownContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`

export const AddMemberButtonContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: flex-end;
`

export const AddMemberButton = styled(BaseButton)`
    width: 183px;
    margin-top: 84px;
`

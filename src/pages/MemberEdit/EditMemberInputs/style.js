import styled from 'styled-components/macro'
import {BaseInput} from '../../../style/inputs'


export const EditInputsContainer = styled.div`
    width: 860px;
    height: 484px;
    background-color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0 114px 20px;
    margin-top: 30px;
`

export const EmailAccessOrgCountryInputContainer = styled.div`
    width: 471px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const RoleInputContainer = styled.div`
    width: 795px;
    display: flex;
    justify-content: space-between;
`

export const EditMemberEmailInput = styled(BaseInput)`
    width: 302px;
`

export const SelectOrgErrorMessageContainer = styled.div`
    height: 10px;
    margin-left: 179px;
`

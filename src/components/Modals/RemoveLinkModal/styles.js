import styled from 'styled-components/macro'
import {AddDeleteModalInternalContainer} from '../styles'
import {StatusDropdown} from '../../../style/dropdowns'
import {RedLargerButton} from '../../../style/buttons'


export const RemoveLinkInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 500px;
    height: 230px;
`

export const RemoveLinkDropdown = styled(StatusDropdown)`
    width: 430px;
`

export const RemoveLinkButton = styled(RedLargerButton)`
    width: 100px;
    margin-left: 23px;
`

export const RemoveLinkButtonContainer = styled.div`
    width: 430px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

import styled from 'styled-components/macro'
import {AddDeleteModalInternalContainer} from '../styles'
import {NavbarTitle} from '../../../style/titles'
import {BaseInput} from '../../../style/inputs'


export const ChooseGroupModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 600px;
    height: 456px;
    padding: 15.41px 15.41px 5px 24px;
    align-items: flex-start;
    justify-content: flex-start;
`

export const ChooseGroupModalTitleContainer = styled.div`
    margin-left: 10px;
    margin-top: 18px;
    width: 532px;
    display: flex;
    justify-content: center;
`

export const ChooseGroupTitleContainer = styled(NavbarTitle)`
    margin-top: 20px;
    margin-left: 10px;
`

export const ChooseGroupInput = styled(BaseInput)`
    width: 532px;
    height: 38px;
    margin-top: 10px;
    margin-left: 10px;
`

export const ChooseGroupCardContainer = styled.div`
    height: 200px;
    max-height: 200px;
    width: 552px;
    margin-top: 20px;
    padding: 0 10px 10px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 19.16px;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
`

export const ChooseGroupButtonContainer = styled.div`
    width: 100%;
    margin-top: 25px;
    padding-right: 18.59px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

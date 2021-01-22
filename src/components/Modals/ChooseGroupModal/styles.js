import styled from 'styled-components/macro'
import {AddDeleteModalCloseContainer, AddDeleteModalInternalContainer} from '../styles'
import {NavbarTitle} from '../../../style/titles'
import {BaseInput} from '../../../style/inputs'


export const ChooseGroupModalInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 600px;
    height: 456px;
    padding: 15.41px 15.41px 34px 24px;
    align-items: flex-start;
    justify-content: flex-start;
`

export const ChooseGroupModalCloseContainer = styled(AddDeleteModalCloseContainer)`
    width: 100%;
`

export const ChooseGroupModalTitleContainer = styled.div`
    margin-left: 10px;
    margin-top: 32px;
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
    height: 209px;
    max-height: 209px;
    width: 552px;
    padding: 20px 10px 10px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 19.16px;
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

export const ChooseGroupButtonContainer = styled.div`
    width: 100%;
    margin-top: 25px;
    padding-right: 18.59px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

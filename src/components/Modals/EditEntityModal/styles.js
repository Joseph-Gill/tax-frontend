import styled from 'styled-components/macro'
import {AddDeleteModalTitleContainer} from '../styles'


export const EditEntityInternalContainer = styled.div`
    height: 350px;
    width: 700px;
    background: ${props => props.theme.white};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15.41px 15.41px 34px 34px;
`

export const EditEntityRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 19px;
`

export const EditEntityModalTitleContainer = styled(AddDeleteModalTitleContainer)`
    justify-content: center;
    padding-left: 0;
`

export const EditEntityButtonContainer = styled.div`
    width: 100%;
    display: flex;
    padding-right: 19px;
    justify-content: flex-end;
`

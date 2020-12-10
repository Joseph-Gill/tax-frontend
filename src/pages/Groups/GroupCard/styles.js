import styled from 'styled-components/macro'
import {HomeGroupText, HomePageText} from '../../../style/text'


export const GroupCardContainer = styled.div`
    height: 245px;
    width: 256px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.primaryBlue};
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px 15px 18px 15px;

    :hover {
        cursor: pointer;
        box-shadow: ${props => props.theme.boxShadow};
    }
`

export const GroupCardInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

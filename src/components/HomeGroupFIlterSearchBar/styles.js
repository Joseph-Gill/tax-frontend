import styled from 'styled-components/macro'
import {BaseInput} from '../../style/inputs'


export const HomeFilterSearchContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 600px;
    height: 36px;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.inputBorderRadius};
    background-color: ${props => props.theme.white};

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
    }
`

export const HomeFilterSearchInput = styled(BaseInput)`
    width: 500px;
    height: 34px;
    border: none;
    background: ${props => props.theme.white};
    padding: 10px 0 10px 5px;

    :hover {
        filter: none;
    }

    :focus {
        border: none;
    }
`

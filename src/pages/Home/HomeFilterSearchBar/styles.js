import styled from 'styled-components/macro'
import {BaseInput} from '../../../style/inputs'


export const HomeFilterSearchContainer = styled.div`
    display: flex;
    align-items: flex-start;
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
    width: 505px;
    height: 34px;
    border: none;
    background: ${props => props.theme.white};

    :hover {
        filter: none;
    }

    :focus {
        border: none;
    }
`

export const HomeFilterResetImgContainer = styled.div`
    width: 13.5px;
    height: 36px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeFilterResetImg = styled.img`
    :hover {
        background: ${props => props.theme.graySix};
        box-shadow: ${props => props.theme.boxShadow};
    }
`

export const HomeFilterSpacer = styled.span`
    width: 1px;
    height: 26px;
    margin-top: 5px;
    margin-left: 15px;
    border-left: 1px solid ${props => props.theme.grayFour};
`

export const HomeFilterImgContainer = styled.div`
    width: 16px;
    height: 36px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background: ${props => props.theme.graySix};
        box-shadow: ${props => props.theme.boxShadow};
    }
`

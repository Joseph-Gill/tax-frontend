import styled from 'styled-components/macro'
import {AddDeleteModalInternalContainer} from '../styles'


export const EntityHistoryInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 800px;
    height: 500px;
    display: flex;
    justify-content: flex-start;
`

export const EntityHistoryContainer = styled.div`
    width: 769px;
    height: 124px;
    max-width: 769px;
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`

export const HistoryNode = styled.div`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
    list-style-type: none;
    width: 120px;
    position: relative;
    text-align: center;

    :before {
        content: '';
        width: 13px;
        height: 25px;
        border-radius: ${props => props.theme.borderRadius};
        background: ${props => props.theme.primaryBlue};
        display: block;
        margin: 0 auto 3px auto;
    }

    :after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${props => props.theme.primaryBlue};
        top: 12.5px;
        left: -50%;
    }

    :first-child:after {
        content: none;
    }

    :hover {
        cursor: pointer;
        transition: 167ms;
        text-decoration: underline;
    }

    div {
        display: flex;
        flex-direction: column;
        position: absolute;
    }
`

export const HistoryNodeFlipped = styled(HistoryNode)`
    div {
        top: -40px;
    }
`

export const EntityHistoryBar = styled.ul`
    display: flex;
`

export const EntityHistoryDetailsContainer = styled.div`
    width: 100%;
    height: 200px;
    background: ${props => props.theme.grayFive};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: inset 0 2px 4px rgba(44, 33, 120, 0.1), inset 0 1px 2px rgba(44, 33, 120, 0.1);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    font-weight: 600;
`

export const EntityHistoryTaxButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 29px;
`

export const TaxRateContainer = styled.div`
    display: flex;
    align-items: center;
`

export const TaxRateText = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 16px;
    font-weight: 600;
`

export const TaxRateTitle = styled.h2`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 20px;
`

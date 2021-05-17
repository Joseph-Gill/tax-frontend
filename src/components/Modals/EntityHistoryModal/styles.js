import styled from 'styled-components/macro'
import {AddDeleteModalInternalContainer} from '../styles'


export const EntityHistoryInternalContainer = styled(AddDeleteModalInternalContainer)`
    width: 860px;
    height: 520px;
    display: flex;
    justify-content: flex-start;
`

export const EntityHistoryContainer = styled.div`
    height: 150px;
    max-width: 700px;
    overflow-x: auto;
    display: flex;
    align-items: center;
    margin: 20px 0;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
`

export const HistoryNode = styled.li`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
    list-style-type: none;
    width: 120px;
    height: 13px;
    position: relative;
    text-align: center;

    :before {
        content: '';
        width: 13px;
        height: 13px;
        border-radius: 50%;
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
        top: 5px;
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
        width: 120px;
        display: flex;
        flex-direction: column;
        position: absolute;
    }
`

export const HistoryNodeFlipped = styled(HistoryNode)`
    div {
        top: -60px;
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

export const TimelineButtonDisplayContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ScrollButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;

    :hover {
        background: ${props => props.theme.iconHoverBackground};
        cursor: pointer;
    }
`

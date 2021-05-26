import styled from 'styled-components/macro'
import {AddDeleteModalInternalContainer} from '../styles'
import {BaseButton} from '../../../style/buttons'


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
    height: 20px;
    position: relative;
    text-align: center;

    :before {
        content: '';
        width: 18px;
        height: 18px;
        border: 2px solid ${props => props.theme.primaryBlue};
        border-radius: 50%;
        background: ${props => props.isactive ? props.theme.red : props.theme.primaryBlue};
        display: block;
        margin: 0 auto 3px auto;
    }

    :after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${props => props.theme.primaryBlue};
        top: 9.5px;
        left: -50%;
        z-index: -1;
    }

    :first-child:after {
        content: none;
    }

    div {
        width: 120px;
        display: flex;
        flex-direction: column;
        position: absolute;

        :hover {
            cursor: pointer;
            transition: 167ms;
            text-decoration: underline;
        }
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
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
    height: 27.33px;
    display: flex;
    align-items: flex-end;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
`

export const TaxRateTitle = styled.h2`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 20px;
    margin-right: 5px;
`

export const TimelineButtonDisplayContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HistoryInfoTitle = styled.div`
    font-weight: 600;
    font-size: 18px;
`

export const GoToStepButton = styled(BaseButton)`
    height: 32px;
    width: 98px;
`

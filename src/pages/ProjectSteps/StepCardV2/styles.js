import styled from 'styled-components/macro'
import {animated} from 'react-spring'
import {TableButton} from '../../../style/buttons'


export const StepCardNumberText = styled.span`
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.grayOne};
    font-weight: 600;
    margin-top: 0;
`

export const StepCardV2Container = styled(animated.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 415px;
    height: 300px;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    border: 1px solid ${props => props.theme.grayFour};
    padding: 16px 16px 13px 16px;

    ${props => {
        if (props.status === 'Ongoing' || props.status === 'Not Started' ){
            return `background: linear-gradient(0.4turn, ${props.theme.white}, ${props.theme.white}, ${props.theme.white}, ${props.theme.white},
                ${props.theme.white}, ${props.theme.white}, ${props.theme.yellowLight}, ${props.theme.yellow});`
            }
        }
    };

    ${props => {
        if (props.status === 'Completed'){
            return `background: linear-gradient(0.4turn, ${props.theme.white}, ${props.theme.white},${props.theme.white}, ${props.theme.white},
                ${props.theme.white}, ${props.theme.white}, ${props.theme.greenBright}, ${props.theme.green});`
            }
        }
    };

    :hover {
        cursor: pointer;
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        transition: 167ms;
        border: 1px solid ${props => props.theme.primaryBlue};

        ${StepCardNumberText}{
            text-decoration: underline;
        }
    }
`

export const StepCardRowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const StepCardLowerRowContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const StepCardDateText = styled.span`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
`

export const StepCardDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    max-height: 150px;
    width: 296px;
    max-width: 296px;
    overflow-wrap: break-word;
    overflow-y: auto;
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayOne};
    font-weight: 600;

    ul, li {
        list-style-position: inside;
    }
`

export const StepCardButton = styled(TableButton)`
    width: 65px;
    height: 26px;
`

export const StepCardTaxConsequenceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-row-gap: 5px;
    grid-column-gap: 5px;
`

export const TaxLocation = styled.div`
    display: flex;
    justify-content: center;
    background: ${props => props.theme.primaryBlueLight};
    padding: 2px 6px;
    border-radius: ${props => props.theme.borderRadius};
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 10px;
    line-height: 14px;
    color: ${props => props.theme.primaryBlue};
`

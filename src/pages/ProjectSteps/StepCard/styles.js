import styled from 'styled-components/macro'
import {CardTitleText} from '../../../style/text'
import {TableButton} from '../../../style/buttons'

export const StepCardTitleText = styled(CardTitleText)`
    margin-top: 0;
`

export const StepCardContainer = styled.div`
    width: 860px;
    height: 105px;
    border: 1px solid ${props => props.theme.grayFour};
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    :hover {
        transition: 167ms;
        box-shadow: ${props => props.theme.projectCardBoxShadow};
        border: 1px solid ${props => props.theme.primaryBlue};

        ${StepCardTitleText}{
            text-decoration: underline;
        }
    }
`

export const StepCardStatusColorStepNumberContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StepCardRowContainer = styled.div`
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    :hover {
        cursor: pointer;
    }
`

export const StepCardButton = styled(TableButton)`
    width: 65px;
    height: 26px;
    margin-left: 15px;
`

export const StepCardDescriptionContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    :hover {
        cursor: pointer;
    }
`

export const StepCardStatusColorContainer = styled.div`
    height: 11px;
    width: 11px;
    border-radius: 50%;
    margin-right: 10px;

    ${props => {
        if(props.status === 'Ongoing' || props.status === 'Not Started'){
            return `
                    background: ${props.theme.yellow};
                    `
        }
    }
    };

    ${props => {
        if(props.status === 'Completed'){
            return `
                    background: ${props.theme.green};
                    `
        }
    }
    };
`

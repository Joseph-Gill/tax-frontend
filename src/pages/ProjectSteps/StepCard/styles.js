import styled from 'styled-components/macro'
import {CardTitleText} from '../../../style/text'
import {TableButton} from '../../../style/buttons'


export const StepCardContainer = styled.div`
    width: 860px;
    height: 105px;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 19px 19px 20px;
    margin-bottom: 20px;
`

export const StepCardStatusColorStepNumberContainer = styled.div`
    display: flex;
    align-items: center;
`

export const StepCardTitleText = styled(CardTitleText)`
    margin-top: 0;
`

export const StepCardRowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StepCardUpperRowContainer = styled(StepCardRowContainer)`
    :hover {
        cursor: pointer;
    }
`

export const StepCardButton = styled(TableButton)`
    width: 65px;
    height: 26px;
`

export const StepCardDescriptionContainer = styled.div`
    width: 569px;

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

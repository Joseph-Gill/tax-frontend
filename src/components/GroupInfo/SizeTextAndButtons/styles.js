import styled from 'styled-components/macro'
import {TableButton} from '../../../style/buttons'


export const FileUploadContainer = styled.div`
    height: 26px;
    width: 79px;
    border: 1px solid ${props => props.theme.primaryBlue};
    border-radius: ${props => props.theme.buttonBorderRadius};
    color: ${props => props.theme.primaryBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props => props.theme.spartanFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 13px;
    margin-right: 20px;
    text-align: center;

    :hover {
        background: ${props => props.disabled ? '' : props.theme.grayFive};
        border: 2px solid ${props => props.theme.primaryBlue};
        cursor: pointer;
        transition: 167ms;
        font-weight: 700;
    }
`

export const GroupImageRemoveButton = styled(TableButton)`
    height: 26px;
    width: 83px;
    color: ${props => props.theme.grayTwo};
    border: 1px solid ${props => props.theme.grayTwo};

    :hover {
        border: 2px solid ${props => props.theme.grayTwo};
    }
`

export const SizeTextAndButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 43px;
`

export const ButtonContainer = styled.div`
    display: flex;
`

export const RecommendSizeText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 10px;
    line-height: 16px;
    color: ${props => props.theme.red};
    margin-bottom: 1px;
`

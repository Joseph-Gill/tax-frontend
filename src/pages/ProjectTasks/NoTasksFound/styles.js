import styled from 'styled-components/macro'
import {BaseButton} from '../../../style/buttons'


export const NoTaskFoundContainer = styled.div`
    width: 860px;
    height: 546px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-top: 20px;
`

export const NoTaskFoundImage = styled.img`
    margin-bottom: 10px;
`

export const NoTaskFoundText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.grayTwo};
`

export const AddNewTaskButton = styled(BaseButton)`
    width: 148px;
    height: 32px;
    margin-top: 10px;
`

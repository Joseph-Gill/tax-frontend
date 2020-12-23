import styled from 'styled-components/macro'

export const DateInputAndLabelContainer = styled.div`
    display: flex;
    align-items: center;
`

export const DateInputLabelText = styled.p`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: ${props => props.theme.grayOne};
    margin-right: 10px;
`


export const DateInputContainer = styled.div`
    width: 128px;
    height: 32px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    :hover {
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
        cursor: pointer;
        transition: 0.5s;
    }
`

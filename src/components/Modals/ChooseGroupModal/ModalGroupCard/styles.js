import styled from 'styled-components/macro'


export const ModalGroupCardContainer = styled.div`
    width: 256px;
    height: 84.84px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    padding: 15px;
    position: relative;

    :hover {
        cursor: pointer;
        transition: 167ms;
        box-shadow: ${props => props.theme.boxShadow};
        border: 1px solid ${props => props.theme.primaryBlue};
    }
`

export const ModalGroupCardImage = styled.img`
    position: absolute;
    max-width: 85px;
    height: auto;
    max-height: 72px;
    left: 15px;
`

export const ModalGroupCardText = styled.h2`
    font-family: ${props => props.theme.spartanFontFamily};
    font-weight: 600;
    font-size: 16px;
    max-width: 150px;
    text-align: right;
    line-height: 18px;
    color: ${props => props.theme.grayOne};
`

import styled from 'styled-components/macro'


export const ModalGroupCardContainer = styled.div`
    width: 256px;
    height: 84.84px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    padding: 15px;

    :hover {
        cursor: pointer;
        transition: 167ms;
        box-shadow: ${props => props.theme.boxShadow};
        border: 1px solid ${props => props.theme.primaryBlue};
    }
`

export const ModalGroupCardImage = styled.img`
    width: 85px;
    height: 54px;
    margin-right: 15px;
`

export const ModalGroupCardText = styled.h2`
    font-family: ${props => props.theme.spartanFontFamily};
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.grayOne};
`

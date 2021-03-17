import styled from 'styled-components/macro'

export const IssuanceContainer = styled.div`
    display: flex;
    width: 302px;
    justify-content: space-between;
`

export const IssuanceTextContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-family: ${props => props.theme.nunitoFontFamily};
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
    }
`

export const IssuanceCheckmarkContainer = styled.div`
    width: 110px;
    display: flex;
    justify-content: space-between;
`

export const IssuanceCheckmarkLabel = styled.label`
    font-family: ${props => props.theme.nunitoFontFamily};
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.01em;
    font-style: normal;
    font-weight: normal;
    color: ${props => props.theme.grayOne};
    margin-left: 8px;

    :hover {
        cursor: pointer;
        transition: 167ms;
        text-decoration: underline;
    }
`

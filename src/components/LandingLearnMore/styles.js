import styled from 'styled-components/macro'


export const LearnMoreContainer = styled.div`
    display: flex;
    align-items: center;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }

    span {
        font-family: ${props => props.theme.spartanFontFamily};
        font-size: 16px;
        font-weight: 700;
        line-height: 25.6px;
        margin-right: 5px;
    }
`

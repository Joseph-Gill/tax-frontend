import styled from 'styled-components/macro';

export const Title = styled.h1`
    font-size: 30px;
    color: rgba(0,0,0,0.76);
`;

export const InputTitle = styled.label`
    color: ${props => props.theme.accentColor};
    font-size: 14px;
`;

export const InputLabel = styled.label`
    color: ${props => props.theme.accentColor};
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: 100%;
   align-items: center;
`;

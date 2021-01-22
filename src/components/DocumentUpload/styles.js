import styled from 'styled-components/macro'


export const DocumentUploadArea = styled.div`
    width: 302px;
    height: 66px;
    background: ${props => props.theme.graySix};
    border: 1px solid ${props => props.theme.grayFour};
    border-radius: ${props => props.theme.borderRadius};
    margin-left: 139px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    :hover {
        cursor: pointer;
        transition: 167ms;
        filter: drop-shadow(0px 2px 2px rgba(148, 154, 159, 0.25));
    }

    :focus {
        outline: none;
    }
`

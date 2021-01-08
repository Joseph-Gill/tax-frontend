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
`

import styled from 'styled-components/macro'


export const TaskExpandCollapseImgContainer = styled.div`
    border-radius: 50%;
    width: 20px;
    height: 20px;

    :hover {
        cursor: pointer;
        transition: 167ms;
        background: ${props => props.theme.iconHoverBackground};
    }
`

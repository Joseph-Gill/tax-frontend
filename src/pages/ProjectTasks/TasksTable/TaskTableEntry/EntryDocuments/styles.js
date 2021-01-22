import styled from 'styled-components/macro'


export const TaskExpandCollapseImage = styled.img`
    :hover {
        cursor: pointer;
        transition: 167ms;
        box-shadow: ${props => props.theme.boxShadow};
        background: ${props => props.theme.graySix};
    }
`

export const TaskExpandCollapseImgContainer = styled.div`
    width: 20px;
    height: 20px;
`

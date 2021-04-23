import styled from 'styled-components'


export const SelectedGroupIcon = styled.img`
    background-color: ${props => props.theme.primaryShadeOne};
    padding: 8px;
    border-radius: 50%;
    margin-right: 9px;
`

export const Ellipse = styled.img`
    height: 7px;
    width: 7px;
    margin-right: 13px;
`

export const ExpandImage = styled.img`
    width: 18px;
    height: 18px;
    transform: rotate(-90deg);
    margin-left: 5px;
`

export const CollapseImage = styled(ExpandImage)`
    transform: rotate(90deg);
`

export const DropdownImage = styled.img`
    margin-left: 10px;
`

export const TooltipRowImage = styled.img`
    width: 5px;
    height: 5px;
`

export const LoginLogoImg = styled.img`
    width: 150px;
    height: 50px;

    :hover {
        cursor: pointer;
    }
`

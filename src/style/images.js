import styled from 'styled-components'


export const Avatar = styled.img`
    height: 50px;
    width: 50px;
`

export const LogOutIcon = styled.img`
    transform: rotate(-180deg);
`

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

export const CloseIcon = styled.img`
    :hover {
      cursor: pointer;
    }
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

export const FilterImage = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 8px;
    margin-left: 14px;
`

export const DropdownImage = styled.img`
    margin-left: 10px;
`

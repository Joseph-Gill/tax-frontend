import styled from 'styled-components'


export const Avatar = styled.img`
    height: 50px;
    width: 50px;
`

export const LogOutIcon = styled.img`
  transform: rotate(-180deg);
`

export const SelectedGroupIcon = styled.img`
  background-color: ${props => props.theme.navigationBarInactiveColor};
  padding: 8px;
  border-radius: 50%;
  margin-right: 9px;
`

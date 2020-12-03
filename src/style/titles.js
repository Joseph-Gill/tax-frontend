import styled from 'styled-components/macro'


export const Title = styled.h1`
    font-size: 18px;
`

export const SubTitle = styled.h2`
    color: ${props => props.theme.primaryBlue};
`
export const NavbarTitle = styled.h2`
  font-family: ${props => props.theme.nunitoFontFamily};
  font-size: 10px;
  font-style: normal;
  font-weight: bold;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.graySeven};
  width: 195px;
`

export const MenuItemTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  font-family: ${props => props.theme.nunitoFontFamily};
  line-height: 19px;
  color: ${props => props.theme.primaryShadeOne};
`

export const AuthenticatedPageTitle = styled.h1`
  font-size: 26px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: ${props => props.theme.grayOne}
`

export const AuthenticatedPageSectionTitle = styled(NavbarTitle)`
  width: 800px;
  margin-top: 30px;
`

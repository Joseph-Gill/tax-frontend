import styled from 'styled-components/macro'


export const Title = styled.h1`
    font-family: ${props => props.theme.spartanFontFamily};
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
    font-family: ${props => props.theme.spartanFontFamily};
    font-size: 26px;
    line-height: 29px;
    letter-spacing: 0.01em;
    color: ${props => props.theme.grayOne}
`

export const AuthenticatedPageSectionTitle = styled(NavbarTitle)`
    width: 800px;
    margin-top: 30px;
`

export const AddEditProjectSectionTitles = styled(AuthenticatedPageSectionTitle)`
    width: 302px;
    margin-top: 0;
`

export const EntityTitle = styled(AuthenticatedPageSectionTitle)`
    margin-top: 0;
    padding-left: 16px;
    padding-bottom: 10px;
`

export const GroupAddEntityTitle = styled(EntityTitle)`
    width: 70px;
    margin-right: 0;
    margin-top: 20px;
`

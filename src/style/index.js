import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    //@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
    * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: Spartan,serif;
    box-sizing: border-box;
    color: rgba(0,0,0,0.92);
    }
`

export const defaultTheme = {
    // this is used for default button color, active navigation link
    accentColor: '#00709F',
    buttonAccentColorGreen: '#00CA4E',
    accentColorLight: '#fc5f3a',
    // this is used for hover button color
    accentColorLighter: '#004866',
    accentColorDark: '#d74422',
    accentColorDarker: '#ac361a',
    colorSuccess: '#10a711',
    colorFail: '#d60801',
    colorDelete: '#FF605C',
    colorButtonGreen: '#00993B',
    colorButtonGreenHover: '#006627',
    white: 'rgba(255,255,255,0.1)',
    boxShadow: 'box-shadow: 0px 0px 20px #EFEFEF',
    boxShadowButton: 'box-shadow: 0px 4px 10px rgba(0, 112, 159, 0.24)',
    borderRadius: '4px',
    nunitoFontFamily: 'Nunito Sans, sans-serif',
    footerFontColor: '#999EA3',
    inputBackgroundColor: '#FAFAFA',
    inputBorderColor: '#D3D8DD',
    disabledInputBorderColor: '#999EA3',
    disabledInputBackgroundColor: '#D3D8DD',
    authenticatedSideboardBackgroundColor: '#FFFFFF',
    navigationBarInactiveColor: '#66788A',
    navigationBarTitleColor: '#8C8C8C',
    navigationBarActiveLinkBackgroundColor: '#F5FCFF',
    authenticatedPageContainerBackgroundColor: '#F6F7F8',
    authenticatedPageTitleColor: '#3A3B3F',
    authenticatedPageBorderColor: '#D3D8DD',
}

export const LogoPlaceholder = 'https://via.placeholder.com/150x50'

export const BiggerLogoPlaceholder = 'https://via.placeholder.com/200x71'

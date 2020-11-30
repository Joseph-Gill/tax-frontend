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
    // this is used for default button color
    accentColor: '#00709F',
    buttonAccentColorGreen: '#00CA4E',
    accentColorLight: '#fc5f3a',
    // this is used for hover button color
    accentColorLighter: '#004866',
    accentColorDark: '#d74422',
    accentColorDarker: '#ac361a',
    colorSuccess: '#10a711',
    colorFail: '#d60801',
    white: 'rgba(255,255,255,0.1)',
    boxShadow: '-5px 6px 15px -5px rgba(0,0,0,0.49)',
    borderRadius: '4px',
    nunitoFontFamily: 'Nunito Sans, sans-serif'
}

export const LogoPlaceholder = 'https://via.placeholder.com/150x50'

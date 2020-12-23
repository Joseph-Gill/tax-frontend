import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
    * {
        margin: 0;
        padding: 0;
        font-size: 14px;
        box-sizing: border-box;
        color: rgba(0,0,0,0.92);
    }
    // Used to Style the Options of the react-country-region-selector options
    option {
        font-family: Nunito Sans, sans-serif;
        font-weight: 600;
        font-size: 10px;
        line-height: 16px;
        color: ${props => props.theme.grayOne};
    }
`

export const defaultTheme = {
    // Template Colors ( will eventually be removed )
    buttonAccentColorGreen: '#00CA4E',
    accentColorLight: '#fc5f3a',
    accentColorLighter: '#004866',
    accentColorDark: '#d74422',
    accentColorDarker: '#ac361a',
    colorSuccess: '#10a711',
    colorFail: '#d60801',
    colorDelete: '#FF605C',
    // Figma Colors
    grayOne: '#3A3B3F',
    grayTwo: '#949A9F',
    grayThree: '#999EA3',
    grayFour: '#D3D8DD',
    grayFive: '#F6F7F8',
    graySix: '#FAFAFA',
    primaryBlue: '#00709F',
    primaryBlueLight: '#CCF0FF',
    primaryDark: '#323C47',
    primaryShadeOne: '#66788A',
    primaryShadeTwo: '#F5FCFF',
    greenDark: '#006627',
    green: '#00993B',
    greenBright: '#00CA4E',
    greenLight: '#CCFFE0',
    redDark: '#990400',
    red: '#FF605C',
    redLight: '#FF9C99',
    yellowDark: '#996300',
    yellow: '#FFBD44',
    yellowLight: '#FFDB99',
    white: '#FFFFFF',
    black: '#000000',
    // Not on Figma Styleguide, but used in design by designer
    graySeven: '#8C8C8C',
    blueHover: '#004866',
    boxShadowColor: '#EFEFEF',
    entityTableBorderColor: '#F3F4F6',
    // Box Shadows
    boxShadow: '0px 0px 20px #EFEFEF',
    buttonBoxShadow: '0 4px 10px rgba(0, 112, 159, 0.24)',
    projectCardBoxShadow: '0px 0px 20px #D9D9D9;',
    // Border Radius
    borderRadius: '4px',
    // Fonts that are not default Spartan
    nunitoFontFamily: 'Nunito Sans, sans-serif',
    spartanFontFamily: 'Spartan, serif',
}

export const LogoPlaceholder = 'https://via.placeholder.com/150x50'

export const BiggerLogoPlaceholder = 'https://via.placeholder.com/200x71'

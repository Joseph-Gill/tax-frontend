import { createGlobalStyle } from "styled-components";


export const GlobalStyle =  createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
    * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: Roboto,serif;
    box-sizing: border-box;
    }
`;

export const defaultTheme = {
    accentColor: '#ff4f26',
    colorSuccess: '#10a711',
    colorFail: "#d60801",
    white: 'rgba(255,255,255,0.1)',
    boxShadow: '-5px 6px 15px -5px rgba(0,0,0,0.49)'
};


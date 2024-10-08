import { createGlobalStyle } from 'styled-components';
import SuiteExtraBold from '../assets/fonts/SUITE-ExtraBold.ttf';
import SuiteRegular from '../assets/fonts/SUITE-Regular.ttf';
import SuiteLight from '../assets/fonts/SUITE-Light.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SuiteExtraBold';
    src: local('SuiteExtraBold'), local('SuiteExtraBold');
    font-style: normal;
    src: url(${SuiteExtraBold}) format('truetype');
  }
  @font-face {
    font-family: 'SuiteRegular';
    src: local('SuiteRegular'), local('SuiteRegular');
    font-style: normal;
    src: url(${SuiteRegular}) format('truetype');
  }
  @font-face {
    font-family: 'SuiteLight';
    src: local('SuiteLight'), local('SuiteLight');
    font-style: normal;
    src: url(${SuiteLight}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  
  html, body, #root, .App {
    width: 100%;
    max-width: 100vw;
  }
`;

export default GlobalStyle;

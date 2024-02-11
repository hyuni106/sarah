import { createGlobalStyle } from 'styled-components';
import SuiteExtraBold from '../fonts/SUITE-ExtraBold.ttf';
import SuiteRegular from '../fonts/SUITE-Regular.ttf';
import SuiteLight from '../fonts/SUITE-Light.ttf';

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
}`;

export default GlobalStyle;
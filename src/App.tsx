import './App.css';
import styled from 'styled-components';
import GlobalStyle from 'utils/globalStyles';

import Header from './components/Header';
import Main from 'components/main';
import AboutMe from 'components/about';
import Works from 'components/works';

import 'swiper/css';
import 'swiper/css/pagination';

const Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Div className="App">
        <Header />
        <Main />
        <AboutMe />
        <Works />
      </Div>
    </>
  );
}

export default App;

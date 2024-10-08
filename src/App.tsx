import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Main from 'components/main';
import AboutMe from 'components/about';

const Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <Div className="App">
      <Header />
      <Main />
      <AboutMe />
    </Div>
  );
}

export default App;

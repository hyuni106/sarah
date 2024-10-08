import Main from 'components/Main';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';

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
    </Div>
  );
}

export default App;

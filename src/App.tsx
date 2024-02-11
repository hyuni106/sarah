import styled from 'styled-components';
import './App.css';

const SubTitle = styled.p`
  font-size: 24px;
  font-family: SuiteExtraBold;
  line-height: 0.8;
`;

const Title = styled.p`
  font-size: 48px;
  font-family: SuiteExtraBold;
  margin-top: 0;
  line-height: 0.8;
`;

function App() {
  return (
    <div className="App">
      <SubTitle>Hi👋 I’m Sarah Park! And I am..</SubTitle>
      <Title>App Frontend Developer🧑‍💻</Title>
    </div>
  );
}

export default App;

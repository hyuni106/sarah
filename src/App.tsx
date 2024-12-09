import './App.css';
import { useRef } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'utils/globalStyles';

import Overlay from './views/overlay';

import Header from './components/header';
import Main from 'views/main';
import AboutMe from 'views/about';
import Works from 'views/works';
import Experience from 'views/experience';
import Skills from 'views/skills';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

const Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Div className="App">
        <Header
          scrollToSection={scrollToSection}
          mainRef={mainRef}
          aboutRef={aboutRef}
          worksRef={worksRef}
          skillsRef={skillsRef}
          experiencesRef={experiencesRef}
        />
        <div ref={mainRef}>
          <Main />
        </div>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={worksRef}>
          <Works />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={experiencesRef}>
          <Experience />
        </div>
      </Div>
      <Overlay />
    </>
  );
}

export default App;

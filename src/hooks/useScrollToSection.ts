import { RefObject } from 'react';

const useScrollToSection = () => {
  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return scrollToSection;
};

export default useScrollToSection;

import React, { useEffect, useRef, useState } from 'react';
import { OverlayWrapper, TypingText, Circle, CloseButton } from './styles';
import useTypingEffect from './useTypingEffect';
import { TitleText } from 'components/common';
import { Colors } from 'styles';

const texts = ['안녕하세요!', '프론트엔드 개발자 박수현 입니다 :)'];
const TIME_TO_FADE = 300;
const TIME_INTERVAL = 3000;
const TIME_PER_LETTER = 100;

const Overlay = () => {
  const circleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const overlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [textIndex, setTextIndex] = useState(0);
  const [fadeText, setFadeText] = useState(true);
  const [fadeCircle, setFadeCircle] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const textToShow = useTypingEffect({
    text: texts[textIndex],
    duration: TIME_PER_LETTER,
    isTypeByLetter: true
  });

  const timeToTypeText = texts[textIndex].length * TIME_PER_LETTER;

  useEffect(() => {
    circleTimeoutRef.current = setTimeout(() => {
      setFadeCircle(false);
    }, timeToTypeText + 1000);

    textTimeoutRef.current = setTimeout(() => {
      setFadeText(false);

      setTimeout(() => {
        setTextIndex(prevIndex => (prevIndex >= texts.length - 1 ? 0 : prevIndex + 1));
        setFadeCircle(true);
        setFadeText(true);
      }, TIME_TO_FADE);
    }, TIME_INTERVAL);

    return () => {
      clearTimeout(circleTimeoutRef.current!);
      clearTimeout(textTimeoutRef.current!);
    };
  }, [textIndex, timeToTypeText]);

  useEffect(() => {
    overlayTimeoutRef.current = setTimeout(
      () => setIsVisible(false),
      TIME_INTERVAL * texts.length + 500
    );

    return () => {
      clearTimeout(overlayTimeoutRef.current!);
      clearTimeout(circleTimeoutRef.current!);
      clearTimeout(textTimeoutRef.current!);
    };
  }, []);

  const onClose = () => {
    setIsVisible(false);

    clearTimeout(overlayTimeoutRef.current!);
    clearTimeout(circleTimeoutRef.current!);
    clearTimeout(textTimeoutRef.current!);
  };

  return (
    <OverlayWrapper isVisible={isVisible}>
      <CloseButton onClick={onClose}>{`✖`}</CloseButton>
      <TitleText size="60px" color={Colors.g1} margin="0 16px 60px 0">{`>`}</TitleText>
      <TypingText fadeText={fadeText} key={textIndex}>
        {textToShow} <Circle fadeCircle={fadeCircle} />
      </TypingText>
    </OverlayWrapper>
  );
};

export default Overlay;

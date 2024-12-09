import React, { useEffect, useState } from 'react';
import { OverlayWrapper, TypingText, Circle, CloseButton } from './styles';
import useTypingEffect from './useTypingEffect';
import { TitleText } from 'components/common';
import { Colors } from 'styles';

const texts = ['안녕하세요!', '프론트엔드 개발자 박수현 입니다 :)'];
const TIME_TO_FADE = 300;
const TIME_INTERVAL = 3000;
const TIME_PER_LETTER = 100;

const TextTypingEffectWithOverlay = () => {
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
    const circleTimeout = setTimeout(() => {
      setFadeCircle(false);
    }, timeToTypeText + 1000);

    const textTimeout = setTimeout(() => {
      setFadeText(false);

      setTimeout(() => {
        setTextIndex(prevIndex => (prevIndex >= texts.length - 1 ? 0 : prevIndex + 1));
        setFadeCircle(true);
        setFadeText(true);
      }, TIME_TO_FADE);
    }, TIME_INTERVAL);

    return () => {
      clearTimeout(circleTimeout);
      clearTimeout(textTimeout);
    };
  }, [textIndex, timeToTypeText]);

  useEffect(() => {
    const overlayTimeout = setTimeout(
      () => setIsVisible(false),
      TIME_INTERVAL * texts.length + 500
    );
    return () => clearTimeout(overlayTimeout);
  }, []);

  const onClose = () => {
    setIsVisible(false);
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

export default TextTypingEffectWithOverlay;

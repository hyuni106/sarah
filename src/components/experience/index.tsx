import { BodyText, TitleText } from 'components/common';
import { Section } from './styles';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <Section>
      <TitleText size="32px">EXPERIENCE ✨</TitleText>
      <BodyText size="18px" margin="80px 0" align="center">
        여러 스타트업에서 근무하며 다양한 팀원들과 협업하는 과정에서 빠른 적응력과 문제 해결 능력을
        기르게 되었고, 다양한 업무 환경 속에서도 유연하게 대처하며 새로운 기술을 습득할 수
        있었습니다. 이러한 경험들은 저에게 여러 관점을 이해하고 넓은 시야를 갖게 하는 중요한 자산이
        되었습니다.
        <br /> 비록 코로나로 인한 경영 악화 등으로 잦은 이직이 불가피했지만, 그 과정에서 강한
        회복력과 책임감을 길러 더 단단해질 수 있었습니다.
      </BodyText>

      {TempList.map(item => (
        <ExperienceItem
          key={item.date}
          date={item.date}
          position={item.position}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default Experience;

const TempList = [
  {
    date: '2022.01 - 2023.01',
    position: 'Company / Frontend Developer',
    description: 'Worked on developing web applications.'
  },
  {
    date: '2022.01 - 2023.01',
    position: 'Company / Frontend Developer',
    description: 'Worked on developing web applications.'
  },
  {
    date: '2022.01 - 2023.01',
    position: 'Company / Frontend Developer',
    description: 'Worked on developing web applications.'
  }
];

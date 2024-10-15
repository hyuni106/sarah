import { BodyText, TitleText } from 'components/common';
import { Section } from './styles';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <Section>
      <TitleText size="32px">EXPERIENCE ✨</TitleText>
      <BodyText size="18px" margin="40px 0" align="center">
        다수의 스타트업에서 근무하면서 다양한 팀원들과 협업하여, 신속한 적응력과 업무 습득 능력을
        키우고, 다양한 시각과 관점을 넓히는 데 큰 경험을 쌓았습니다.
        <br />
        코로나로 인한 경영 악화 등으로 부득이하게 잦은 이직이 발생했으나 이러한 경험을 통해 더욱
        단단해지는 시간이 되었습니다.
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

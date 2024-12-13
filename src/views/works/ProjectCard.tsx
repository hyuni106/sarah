import { Work } from 'models';
import { ProjectContainer, ProjectImage, ProjectInfo, ProjectTitleContainer } from './styles';
import { BodyText, TitleText } from 'components/common';

interface ProjectCardProps {
  work: Work;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { work } = props;

  return (
    <ProjectContainer>
      <ProjectImage src={work.img_url} />

      <ProjectInfo>
        <ProjectTitleContainer>
          <TitleText size="22px">{work.name}</TitleText>
        </ProjectTitleContainer>
        <BodyText size="18px" margin="22px 0 22px 0">
          {work.description}
        </BodyText>
        {work.details.map((item, idx) => (
          <BodyText key={`pj_${idx}`} size="18px" margin="4px 0 0 0">
            {item}
          </BodyText>
        ))}
      </ProjectInfo>
    </ProjectContainer>
  );
};

export default ProjectCard;

import { ProjectContainer, ProjectImage, ProjectInfo, ProjectTitleContainer } from './styles';
import { BodyText, TitleText } from 'components/common';

const ProjectCard = () => {
  return (
    <ProjectContainer>
      <ProjectImage src={''} />

      <ProjectInfo>
        <ProjectTitleContainer>
          <TitleText size="22px">{'PROJECT NAME'}</TitleText>
        </ProjectTitleContainer>
        <BodyText size="18px" margin="22px 0 0 0">
          {'PROJECT DESCRIPTION'}
        </BodyText>
        <BodyText size="18px" margin="22px 0 0 0">
          {'PROJECT DETAIL 1'}
        </BodyText>
        <BodyText size="18px" margin="4px 0 0 0">
          {'PROJECT DETAIL 2'}
        </BodyText>
        <BodyText size="18px" margin="4px 0 0 0">
          {'PROJECT DETAIL 3'}
        </BodyText>
      </ProjectInfo>
    </ProjectContainer>
  );
};

export default ProjectCard;

import { Icon, IconWrapper } from './styles';
import { ReactComponent as IcTistory } from 'assets/svgs/ic_tistory.svg';
import { ReactComponent as IcGithub } from 'assets/svgs/ic_github.svg';
import { ReactComponent as IcGmail } from 'assets/svgs/ic_gmail.svg';

interface ContactsProps {
  isVisible: boolean;
}

const Contacts = (props: ContactsProps) => {
  const { isVisible } = props;

  const onClick = (type: string) => {
    switch (type) {
      case 'github':
        break;
      case 'gmail':
        break;
      case 'tistory':
        break;
    }
  };

  return (
    <IconWrapper>
      <Icon isVisible={isVisible} delay={0} onClick={() => onClick('github')}>
        <IcGithub width={30} height={30} />
      </Icon>
      <Icon isVisible={isVisible} delay={0.2} onClick={() => onClick('gmail')}>
        <IcGmail width={30} height={30} />
      </Icon>
      <Icon isVisible={isVisible} delay={0.4} onClick={() => onClick('tistory')}>
        <IcTistory width={30} height={30} />
      </Icon>
    </IconWrapper>
  );
};

export default Contacts;

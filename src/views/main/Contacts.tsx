import React from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Icon, IconWrapper } from './styles';
import { ReactComponent as IcTistory } from 'assets/svgs/ic_tistory.svg';
import { ReactComponent as IcGithub } from 'assets/svgs/ic_github.svg';
import { ReactComponent as IcGmail } from 'assets/svgs/ic_gmail.svg';

type IconType = 'github' | 'gmail' | 'tistory';
type SVGIconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface ContactsProps {
  isVisible: boolean;
}

const Contacts = (props: ContactsProps) => {
  const { t } = useTranslation();
  const { isVisible } = props;

  const links: Record<IconType, string> = {
    github: 'https://github.com/hyuni106',
    gmail: 'suhyuni1006@gmail.com',
    tistory: 'https://ramveloper.tistory.com/'
  };

  const iconData: { type: IconType; IconComponent: SVGIconComponent }[] = [
    { type: 'github', IconComponent: IcGithub },
    { type: 'gmail', IconComponent: IcGmail },
    { type: 'tistory', IconComponent: IcTistory }
  ];

  const onClick = (type: keyof typeof links) => {
    if (type === 'gmail') {
      navigator.clipboard
        .writeText(links.gmail)
        .then(() => {
          toast.success(t('toast_email_copy'), { position: 'top-right', autoClose: 3000 });
        })
        .catch(() => {
          toast.error(t('toast_email_error'), { position: 'top-right', autoClose: 3000 });
        });
    } else {
      window.open(links[type], '_blank');
    }
  };

  return (
    <IconWrapper>
      {iconData.map(({ type, IconComponent }, index) => (
        <Icon key={type} isVisible={isVisible} delay={index * 0.2} onClick={() => onClick(type)}>
          <IconComponent width={30} height={30} />
        </Icon>
      ))}
    </IconWrapper>
  );
};

export default React.memo(Contacts);

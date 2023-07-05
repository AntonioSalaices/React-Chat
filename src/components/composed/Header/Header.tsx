import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { translate } from '../../../i18n';

import useThrottle from '@Hooks/useThrottle/useThrottle';
import Formatter from '@Utils/formatter';

import { Events, MenuStatus } from '@Constans/eventConstants';
import { ScreenIcons, AppIcons, AppIcon } from '@Constans/icons';

import { HeaderProps } from './Header.props';
import { headerOptions } from './options';
import { Link } from 'react-router-dom';
import { LinkType } from '@Utils/types';

const { sizeToRange } = Formatter;

const renderHeaderOptions = (options: LinkType[], logged: boolean) => {
  return options
    .filter((option: LinkType) => (logged ? option.sessionRequired : !option.sessionRequired))
    .map(({ path, name, ...rest }: LinkType, index) => (
      <li key={index.toString()}>
        <Link to={path}>{translate(name)}</Link>
      </li>
    ));
};

const Header: React.FC<HeaderProps> = ({ onClickLogout, logged, onClickLoginNavigation }) => {
  const [range, setRange] = useState<string>(sizeToRange(window.innerWidth));
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpen((isOpened) => !isOpened);
  };

  useEffect(() => {
    window.addEventListener(Events.Resize, handleWindowResize);

    return () => {
      window.removeEventListener(Events.Resize, handleWindowResize);
    };
  }, []);

  const handleWindowResize = useThrottle(
    () => {
      setRange(sizeToRange(window.innerWidth));
    },
    100,
    []
  );

  const containerClasses = classNames('display-f justify-center align-center gap-2 items-list', {
    [MenuStatus.Open]: isOpen,
    [MenuStatus.Closed]: !isOpen,
  });

  const buttonText = logged ? translate('header.links.logOut') : translate('header.links.signIn');

  return (
    <nav className="navbar-primary text-white mb-4 justify-between">
      <div className="container">
        <h2 className="site-title">
          {translate('header.title')}
          <li onClick={handleOpenMenu} className="nav-icon">
            {AppIcons[AppIcon.Menu]}
          </li>
        </h2>
        <ul className={containerClasses}>
          <li>{ScreenIcons[range]}</li>
          {renderHeaderOptions(headerOptions, logged)}
          <li>
            <button
              data-testid="btn-login-navigate"
              className="btn-light text-dark font-md"
              onClick={() => {
                if (logged) {
                  onClickLogout();
                } else {
                  onClickLoginNavigation();
                }
              }}
            >
              {buttonText}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export { Header };

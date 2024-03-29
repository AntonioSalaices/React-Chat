import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { translate } from '../../../i18n';

import useThrottle from '@Hooks/useThrottle/useThrottle';
import Formatter from '@Utils/formatter';

import { HeaderProps } from './Header.props';
import { headerOptions } from './options';
import { ReactComponent as Logo } from '../../../assets/images/home.svg';

import { Link, useNavigate } from 'react-router-dom';
import { LinkType } from '@Utils/types';
import { RoutesConstants, Events, MenuStatus, ScreenIcons, AppIcons, AppIcon } from '@Constants/Core';

const { sizeToRange } = Formatter;

const renderHeaderOptions = (options: LinkType[], logged: boolean) => {
  return options
    .filter((option: LinkType) => (logged ? option.sessionRequired : !option.sessionRequired))
    .map(({ path, name }: LinkType, index) => (
      <li key={index.toString()}>
        <Link to={path}>{translate(name)}</Link>
      </li>
    ));
};

const Header: React.FC<HeaderProps> = ({ onClickLogout, logged, onClickLoginNavigation }) => {
  const navigate = useNavigate();
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
          <Logo
            onClick={() => {
              const pageToNavigate = logged ? RoutesConstants.Dashboard : RoutesConstants.LandingPage;
              navigate(pageToNavigate);
            }}
            width={50}
            height={50}
          />
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

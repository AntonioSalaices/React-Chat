import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Theme } from '@Constans/Theme';
import { translate } from '../../../i18n';

import useThrottle from '@Hooks/useThrottle/useThrottle';
import Formatter from '@Utils/formatter';

import { Events, MenuStatus } from '@Constans/eventConstants';
import { ScreenIcons, AppIcons, AppIcon } from '@Constans/icons';
import { LinkType } from '@Utils/types';

import { HeaderProps } from './Header.props';

const { sizeToRange } = Formatter;

const getLinks = (): LinkType[] => {
  return [
    { path: '/', name: translate('header.links.home') },
    { path: 'library', name: translate('header.links.library') },
    { path: 'chat', name: translate('header.links.chat') },
  ];
};

const Header: React.FC<HeaderProps> = ({ onChange, theme }) => {
  const selectedTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  const [range, setRange] = useState<string>(sizeToRange(window.innerWidth));
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener(Events.RESIZE, handleWindowResize);

    return () => {
      window.removeEventListener(Events.RESIZE, handleWindowResize);
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
          {getLinks().map(({ path, name }, index) => (
            <li key={index.toString()}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
          <li>
            <button
              data-testid="btn-change-theme"
              className="btn-light text-dark font-md"
              onClick={() => onChange(selectedTheme)}
            >
              {theme}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;

import { useEffect, useState } from 'react';
import { Theme } from '@Constans/Theme';
import { translate } from '../../../i18n';

import useThrottle from '@Hooks/useThrottle/useThrottle';

import { Events } from '@Constans/eventConstants';
import { ScreenSize } from '@Constans/screenConstants';
import { HeaderProps } from './Header.props';

import Formatter from '@Utils/formatter';
import { FaLaptop, FaMobileAlt } from 'react-icons/fa';

const { sizeToRange } = Formatter;

const iconsScreen: Record<string, JSX.Element> = {
  [ScreenSize.XS]: <FaMobileAlt data-testid="mobile" />,
  [ScreenSize.SM]: <FaMobileAlt data-testid="mobile" />,
  [ScreenSize.MD]: <FaLaptop data-testid="desktop" />,
  [ScreenSize.LG]: <FaLaptop data-testid="desktop" />,
  [ScreenSize.XL]: <FaLaptop data-testid="desktop" />,
};

const Header: React.FC<HeaderProps> = ({ onChange, theme }) => {
  const selectedTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  const [range, setRange] = useState<string>(sizeToRange(window.innerWidth));

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

  return (
    <nav className="navbar-primary text-white mb-4 justify-between">
      <div className="container">
        <h2 className="site-title">{translate('header.title')}</h2>
        <ul className="display-f justify-center align-center gap-2">
          <li>{iconsScreen[range]}</li>
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

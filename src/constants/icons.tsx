import {
  FaLaptop,
  FaMobileAlt,
  FaAlignJustify,
  FaSearch,
  FaRegWindowClose,
  FaRegEye,
  FaRegEyeSlash,
  FaRocketchat,
} from 'react-icons/fa';
import { ScreenSize } from './screenConstants';

export enum AppIcon {
  Menu = 'menu',
  Search = 'search',
  Close = 'close',
  CloseEye = 'close-eye',
  Eye = 'eye',
  Chat = 'chat',
}

type IconType = Record<string, JSX.Element>;

export const ScreenIcons: IconType = {
  [ScreenSize.XS]: <FaMobileAlt data-testid="mobile" />,
  [ScreenSize.SM]: <FaMobileAlt data-testid="mobile" />,
  [ScreenSize.MD]: <FaLaptop data-testid="desktop" />,
  [ScreenSize.LG]: <FaLaptop data-testid="desktop" />,
  [ScreenSize.XL]: <FaLaptop data-testid="desktop" />,
};

export const AppIcons: IconType = {
  [AppIcon.Menu]: <FaAlignJustify />,
  [AppIcon.Search]: <FaSearch />,
  [AppIcon.Close]: <FaRegWindowClose />,
  [AppIcon.CloseEye]: <FaRegEyeSlash />,
  [AppIcon.Eye]: <FaRegEye />,
  [AppIcon.Chat]: <FaRocketchat />,
};

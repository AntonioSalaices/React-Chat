import { Theme } from '@Constans/Theme';

export interface HeaderProps {
  /**
   * Selected theme (light, dark)
   */
  theme: Theme;
  /**
   * Callback that is called when the theme input's changes
   */
  onChange: (args: Theme) => void;
}

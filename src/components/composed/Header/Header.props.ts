import { Theme } from '@Constans/Theme';
import { Func } from '@Utils/types';

export interface HeaderProps {
  /**
   * Selected theme (light, dark)
   */
  theme: Theme;
  /**
   * Callback that is called when the theme input's changes
   */
  onChange: (args: Theme) => void;
  /**
   * Callback to display the login modal once the user press it
   */
  onClickLoginNavigation: Func;
}

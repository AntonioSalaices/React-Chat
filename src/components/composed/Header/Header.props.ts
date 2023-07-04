import { Func } from '@Utils/types';

export interface HeaderProps {
  /**
   * Boolean to despite if the user is already logged
   */
  logged: boolean;
  /**
   * Callback that is called when the  user wants to logout
   */
  onClickLogout: Func;
  /**
   * Callback to display the login modal once the user press it
   */
  onClickLoginNavigation: Func;
}

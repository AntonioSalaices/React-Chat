import { Func } from '@Utils/types';

export interface ModalProps {
  /**
   * Callback to close the modal
   */
  onClose: Func;
  /**
   * Children node
   */
  children: JSX.Element | JSX.Element[];
}

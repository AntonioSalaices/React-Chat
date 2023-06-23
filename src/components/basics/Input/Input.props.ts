import { OnChangeType } from '@Utils/types';

export interface InputProps {
  /**
   * Value of the text input
   */
  value?: string | number;
  /**
   * Icon to display inside of the input
   */
  icon?: string | JSX.Element;
  /**
   * Name of the input
   */
  name?: string;
  /**
   * Placeholder to display in the input
   */
  placeholder?: string;
  /**
   * Type of the input
   */
  type: 'text' | 'number' | 'date';
  /**
   * Ref of the input
   */
  ref?: React.RefObject<HTMLInputElement>;
  /**
   * Callback that is called when the theme input's changes
   */
  onChange?: (aux: OnChangeType) => void;
  /**
   * subText to display for eg.
   */
  subText?: string;
  /**
   * ID used for testing
   */
  testID?: string;
}

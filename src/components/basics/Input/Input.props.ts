import { SingleInputType } from '@Constans/htmlConstants';
import { OnChangeType } from '@Constans/htmlConstants';
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
  type: SingleInputType;
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
  /**
   * Maximum value for the input
   */
  min?: string;
  /**
   * Minimum value for the input
   */
  max?: string;
}

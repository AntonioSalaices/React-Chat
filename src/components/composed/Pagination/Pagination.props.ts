import { DebouncedFunc } from 'lodash';
import I18n from 'i18n-js';
import { TxKeyPath } from '@Translate/i18n';
import { OnChangeType } from '@Utils/types';

export interface PaginationProps {
  /**
   * Current selected value depicted by pagination attribute
   */
  pagination?: string;
  /**
   * Handle fuction to listen every input change with delay
   */
  handleChange: DebouncedFunc<({ target: { value } }: OnChangeType) => void>;
  /**
   * Optional options to pass to i18n, Useful for interpolation
   * as well as explicitly setting locale or translation
   */
  txOptions?: I18n.TranslateOptions;
  /**
   * The text to display if not using `tx` or nested components
   */
  text?: string;
  /**
   * Text which is looked up via i18n
   */
  tx?: TxKeyPath;
  /**
   * sub text which is looked up via i18n
   */
  subTx?: TxKeyPath;
  /**
   * The sub text to display if not using `tx` or nested components
   */
  subText?: string;
}

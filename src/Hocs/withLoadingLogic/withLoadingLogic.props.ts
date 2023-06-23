export interface CommonProps {
  /**
   * Boolean prop to know if data is loading
   */
  isLoading: boolean;
  /**
   * Data received from original component
   */
  data: Array<any>;
  /**
   * Boolean prop to know if is shown no found message
   */
  isShownNoFoundMessage?: boolean;
}

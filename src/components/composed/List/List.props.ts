export interface ListProps<TItem> {
  /**
   * Data to be displayed
   */
  data?: Array<TItem>;
  /**
   * Boolean to display spinner when data is loading
   */
  isLoading: boolean;
  /**
   * Boolean prop to know if is shown no found message
   */
  isShownNoFoundMessage?: boolean;
}

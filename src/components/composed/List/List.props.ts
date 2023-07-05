export interface ListProps<T> {
  /**
   * Function to render elements inside the accordion
   */
  renderItem: (d: [], k: number) => JSX.Element;
  /**
   * Data to be displayed
   */
  data?: Array<T>;
  /**
   * Boolean to display spinner when data is loading
   */
  isLoading: boolean;
  /**
   * Boolean prop to know if is shown no found message
   */
  isShownNoFoundMessage?: boolean;
}

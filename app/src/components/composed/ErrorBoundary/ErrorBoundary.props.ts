export interface ErrorBoundaryProps {
  /**
   * Children node
   */
  children: JSX.Element | JSX.Element[];
}

export interface ErrorBoundaryState {
  /**
   * Boolean to know if there is an error
   */
  hasError: boolean;
  /**
   * Error related to the UI
   */
  error: Error | undefined;
}

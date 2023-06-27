import { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.props';
import { ErrorPage } from '@Components/Core';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error');
    console.error(error);
    console.error(errorInfo);
  }

  render(): ReactNode {
    return this.state.hasError ? (
      <ErrorPage tx="error.messageTitle" subTx="error.genericMessage" error={this.state.error} />
    ) : (
      this.props.children
    );
  }
}

export { ErrorBoundary };

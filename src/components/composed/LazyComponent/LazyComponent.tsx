import { Suspense } from 'react';
import { PURPLE } from '@Utils/colors';
import { Spinner } from '@Components/Core';
import { LazyComponentProps } from './LazyComponent.props';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

const LazyComponent: React.FC<LazyComponentProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div>
          {' '}
          Loading... <Spinner color1={PURPLE} />{' '}
        </div>
      }
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </Suspense>
  );
};

export { LazyComponent };

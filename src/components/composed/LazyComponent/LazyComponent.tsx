import { Suspense } from 'react';
import { color } from '@Utils/colors';
import { Spinner } from '@Components/Core';
import { LazyComponentProps } from './LazyComponent.props';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

const LazyComponent: React.FC<LazyComponentProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div>
          {' '}
          Loading... <Spinner singleColor={color.primary} />{' '}
        </div>
      }
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </Suspense>
  );
};

export { LazyComponent };

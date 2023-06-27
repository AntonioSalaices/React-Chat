import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '@Components/Core';

describe('<ErrorBoundary::Spec />', () => {
  test('should render error page', () => {
    const ThrowError = () => {
      throw new Error('Error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByTestId('error-message');

    expect(errorMessage).toBeVisible();
  });

  test('should render children without error', () => {
    const Component = () => <span data-testid="children">children</span>;

    render(
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    );

    const children = screen.getByTestId('children');

    expect(children).toBeVisible();
  });
});

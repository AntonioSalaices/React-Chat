import { render } from '@testing-library/react';
import { ErrorPage } from '@Components/Core';

describe('<ErrorPage /> :: Spec', () => {
  const error = new Error('Test');

  test('should render correctly', () => {
    const component = render(<ErrorPage error={error} />);

    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

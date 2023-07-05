import { gifsResponse } from 'mocks/gifs';
import { List } from '@Components/Core';
import { render } from '@testing-library/react';

describe('<List />:: Spec', () => {
  const props = {
    isLoading: false,
    data: [gifsResponse],
    renderItem: jest.fn(),
  };

  test('should render correctly', () => {
    const component = render(<List {...props} />);
    const { container } = component;

    expect(container).toMatchSnapshot();
  });

  test('should render correctly and execute memo HOC ', () => {
    const component = render(<List {...props} />);
    const { rerender } = component;

    const otherProps = {
      ...props,
      isLoading: true,
    };

    rerender(<List {...otherProps} />);
  });
});

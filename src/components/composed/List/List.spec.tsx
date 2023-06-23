import { gifsResponse } from 'mocks/gifs';
import MemoizedList from './List';
import { render } from '@testing-library/react';

describe('<List />:: Spec', () => {
  const props = {
    isLoading: false,
    data: [gifsResponse],
  };

  test('should render correctly', () => {
    const component = render(<MemoizedList {...props} />);
    const { container } = component;

    expect(container).toMatchSnapshot();
  });

  test('should render correctly and execute memo HOC ', () => {
    const component = render(<MemoizedList {...props} />);
    const { rerender } = component;

    const otherProps = {
      ...props,
      isLoading: true,
    };

    rerender(<MemoizedList {...otherProps} />);
  });
});

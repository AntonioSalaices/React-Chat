import { render, RenderResult, fireEvent, act } from '@testing-library/react';
import Home from './home';

describe('<Home />:: Spec', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Home />);
  });
  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });

  test('should search something and execute debounce function', async () => {
    const { getByTestId } = component;
    jest.useFakeTimers();
    await act(async () => {
      fireEvent.change(getByTestId('searchInput'), { target: { value: 'testing' } });
      jest.advanceTimersByTime(300);
    });
  });
});

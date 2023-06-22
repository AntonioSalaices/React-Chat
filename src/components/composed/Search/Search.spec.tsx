import { render, RenderResult } from '@testing-library/react';
import Search from './Search';

describe('<Search />', () => {
  let component: RenderResult;
  const onChange = jest.fn();
  beforeEach(() => {
    component = render(<Search text="test" handleChange={onChange} />);
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

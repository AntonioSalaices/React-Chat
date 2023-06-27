import { RenderResult, render } from '@testing-library/react';
import { Input } from '@Components/Core';

describe('<Input />', () => {
  let component: RenderResult;

  const onChange = jest.fn();

  beforeEach(() => {
    component = render(<Input onChange={onChange} type="text" />);
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

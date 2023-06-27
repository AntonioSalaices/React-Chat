import { RenderResult, render } from '@testing-library/react';
import { Message } from '@Components/Core';

describe('<Message />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Message text="simple test message" />);
  });
  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

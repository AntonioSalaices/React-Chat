import { RenderResult, render } from '@testing-library/react';
import { Spinner } from '@Components/Core';
import { color } from '@Utils/colors';

describe('<Spinner />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Spinner color1={color.primary} />);
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

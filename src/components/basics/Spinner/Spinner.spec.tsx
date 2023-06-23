import { RenderResult, render } from '@testing-library/react';
import Spinner from './Spinner';
import { PURPLE } from '@Utils/colors';

describe('<Spinner />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Spinner color1={PURPLE} />);
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

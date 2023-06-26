import { RenderResult, render } from '@testing-library/react';
import { Library } from './library';

describe('<Library> :: Spec', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<Library />);
  });
  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

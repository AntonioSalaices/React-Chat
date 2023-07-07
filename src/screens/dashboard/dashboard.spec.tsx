import { RenderResult, render } from '@testing-library/react';
import { Dashboard } from './dashboard';

describe('<Dashboard />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Dashboard />);
  });
  it('Should render Dashboard', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

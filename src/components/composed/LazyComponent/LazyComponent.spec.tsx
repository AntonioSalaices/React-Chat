import { RenderResult, render } from '@testing-library/react';
import { LazyComponent } from './LazyComponent';

describe('<LazyComponent />', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <LazyComponent>
        <span>Hola</span>
      </LazyComponent>
    );
  });
  it('Should render lazy component and children', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

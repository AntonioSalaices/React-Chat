import { RenderResult, render } from '@testing-library/react';
import { Chat } from './chat';

describe('<Chat> :: Spec', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<Chat />);
  });
  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

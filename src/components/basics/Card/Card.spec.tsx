import { RenderResult, render } from '@testing-library/react';
import { Card } from '@Components/Core';

describe('<Card />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Card url="https://www.test.com" description="just a test description" />);
  });

  test('should render correctly Snapshot', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });

  test('should render alt description correctly', () => {
    const { getByAltText } = component;
    const cardDescription = getByAltText(/just a test description/);
    expect(cardDescription).toBeTruthy();
  });
});

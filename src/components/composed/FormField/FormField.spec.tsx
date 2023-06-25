import { render, RenderResult } from '@testing-library/react';
import FormField from './FormField';
import { debounce } from 'lodash';
import { HTMLType } from '@Constans/htmlConstants';

describe('<FormField />', () => {
  let component: RenderResult;
  const onChange = debounce(jest.fn(), 300);
  beforeEach(() => {
    component = render(<FormField type={HTMLType.text} icon={<i></i>} text="test" handleChange={onChange} />);
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

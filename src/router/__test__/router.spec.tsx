import { render } from '@testing-library/react';
import router from '../router';
import { RouterProvider } from 'react-router-dom';

describe('<Router>', () => {
  it('Should use router', () => {
    const component = render(<RouterProvider router={router} />);
    const { container } = component;

    expect(container).toBeDefined();
  });
});

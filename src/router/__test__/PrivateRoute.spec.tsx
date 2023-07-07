import { RenderResult, render } from '@testing-library/react';
import { AuthProvider } from 'auth/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from 'router/PrivateRoute';

describe('<PrivateRoute />', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <AuthProvider>
          <PrivateRoute />
        </AuthProvider>
      </BrowserRouter>
    );
  });

  it('Should render outlet', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

import { RenderResult, render } from '@testing-library/react';
import AuthForm from './AuthForm';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'auth/AuthContext';

describe('<AuthForm />', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <AuthProvider>
          <AuthForm />
        </AuthProvider>
      </BrowserRouter>
    );
  });
  it('Should render AuthForm', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});

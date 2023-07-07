import { RenderResult, act, fireEvent, render } from '@testing-library/react';
import { Layout } from '@Components/Core';
import { ThemeProvider } from 'context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const ThemeProviderMock = ThemeProvider as jest.MockedFunction<typeof ThemeProvider>;

describe('<Layout>', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <ThemeProviderMock>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProviderMock>
    );
  });

  test('Should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });

  test('Should trigger on navigate to login and display portal AuthModal', () => {
    const { getByTestId } = component;

    act(() => {
      fireEvent.click(getByTestId('btn-login-navigate'));
    });

    expect(document.getElementById('portal-root')).toBeDefined();
  });
});

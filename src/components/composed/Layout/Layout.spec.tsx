import { RenderResult, act, fireEvent, render } from '@testing-library/react';
import Layout from './Layout';
import { ThemeProvider } from 'context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const ThemeProviderMock = ThemeProvider as jest.MockedFunction<typeof ThemeProvider>;

describe('<Layout>', () => {
  let component: RenderResult;
  jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
  Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

  beforeEach(() => {
    component = render(
      <ThemeProviderMock>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProviderMock>
    );
  });

  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });

  test('should fire onChange theme callback and store new theme preference on local storage', () => {
    const { getByTestId } = component;

    act(() => {
      fireEvent.click(getByTestId('btn-change-theme'));
    });

    expect(window.localStorage.setItem).toHaveBeenCalled();
  });
});

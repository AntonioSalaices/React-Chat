import * as React from 'react';
import { RenderResult, act, fireEvent, render } from '@testing-library/react';
import { Layout } from '@Components/Core';
import { ThemeProvider } from 'context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const ThemeProviderMock = ThemeProvider as jest.MockedFunction<typeof ThemeProvider>;

describe('<Layout>', () => {
  let component: RenderResult;
  jest.spyOn(React, 'useState');
  Object.setPrototypeOf(React.useState, jest.fn());

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

  // test('should fire on navigate to login and call useState', () => {
  //   const { getByTestId } = component;

  //   act(() => {
  //     fireEvent.click(getByTestId('btn-login-navigate'));
  //   });

  //   expect(React.useState).toHaveBeenCalled();
  // });
});

import { RenderResult, fireEvent, render } from '@testing-library/react';
import { Header } from '@Components/Core';
import { Theme } from '@Constans/Theme';
import { Events } from '@Constans/eventConstants';
import { BrowserRouter } from 'react-router-dom';

describe('<Header />', () => {
  let component: RenderResult;

  const props = {
    onChange: jest.fn(),
    theme: Theme.LIGHT,
  };

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Header {...props} />
      </BrowserRouter>
    );
  });
  test('should render correctly', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });

  test('should render dark theme', () => {
    const newProps = {
      ...props,
      theme: Theme.DARK,
    };
    const HeaderComponent = render(
      <BrowserRouter>
        <Header {...newProps} />
      </BrowserRouter>
    );

    const { container } = HeaderComponent;

    expect(container).toMatchSnapshot();
  });

  test('should click on theme button and change selected theme', () => {
    const { getByTestId } = component;

    fireEvent.click(getByTestId('btn-change-theme'));

    expect(props.onChange).toHaveBeenCalled();
  });

  test('should call handleResize when resize event has been fired and display mobile icon', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 150,
    });

    const newProps = {
      ...props,
      theme: Theme.DARK,
    };
    const HeaderComponent = render(
      <BrowserRouter>
        <Header {...newProps} />
      </BrowserRouter>
    );

    const { getByTestId } = HeaderComponent;

    window.dispatchEvent(new Event(Events.RESIZE));

    expect(getByTestId('mobile')).toBeVisible();
  });
});

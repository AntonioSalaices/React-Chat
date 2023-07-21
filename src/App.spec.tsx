import { render, RenderResult } from '@testing-library/react';
import App from './App.tsx';
import { Events } from '@Constans/eventConstants.ts';

describe('<App />', () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(<App />);
  });
  test('App component should render correctly', () => {
    const { container } = component;
    expect(container).toMatchSnapshot();
  });

  test('should call handleLanguageChanges when the user change language preferences', () => {
    //Arrange
    const languageChangeSpy = jest.spyOn(window.navigator, 'language', 'get');

    //Act
    render(<App />);
    languageChangeSpy.mockReturnValue('es');
    window.dispatchEvent(new Event(Events.Language));

    //Assert
    expect(languageChangeSpy).toHaveBeenCalled();
  });
});

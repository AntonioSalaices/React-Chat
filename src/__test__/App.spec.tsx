import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
    test('App component should render correctly', () => {
        const AppComponent = render(<App />)


        expect(AppComponent).toBeDefined();
    })
})


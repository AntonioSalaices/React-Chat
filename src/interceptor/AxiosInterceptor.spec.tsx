import { act, fireEvent, render } from '@testing-library/react';
import axios from 'axios';

import AxiosInterceptor from './AxiosInterceptor';
import Home from 'screens/home/home';

jest.mock('axios', () => {
  return {
    interceptors: {
      request: { use: jest.fn().mockImplementationOnce(() => Promise.resolve(true)), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  };
});
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<AxiosInterceptor>:: Spec', () => {
  test('should render AxiosInterceptor', async () => {
    const component = render(
      <AxiosInterceptor>
        <Home />
      </AxiosInterceptor>
    );

    const { getByTestId } = component;
    await act(async () => {
      fireEvent.change(getByTestId('searchInput'), { target: { value: 'testing' } });
      jest.advanceTimersByTime(300);
    });

    const { unmount } = component;

    expect(axios.interceptors.request.use).toHaveBeenCalled();

    unmount();

    expect(axios.interceptors.response.eject).toHaveBeenCalled();
  });
});

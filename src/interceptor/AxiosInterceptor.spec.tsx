import { render } from '@testing-library/react';
import axios from 'axios';

import AxiosInterceptor from './AxiosInterceptor';
import Home from 'screens/home/home';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<AxiosInterceptor>:: Spec', () => {
  test('should render AxiosInterceptor', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const component = render(
      <AxiosInterceptor>
        <Home />
      </AxiosInterceptor>
    );

    await mockedAxios.get('www.test.com');
    const { unmount } = component;

    expect(axios.interceptors.request.use).toHaveBeenCalled();

    unmount();

    expect(axios.interceptors.response.eject).toHaveBeenCalled();
  });
});

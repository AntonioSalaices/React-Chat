import { useState, useEffect } from 'react';
import axios from 'axios';
import { AxiosConstants } from '@Constans/securityConstants';

interface State {
  data?: any;
  error: Error | string | null;
  isLoading: boolean;
}

/**
 * A react hook to easily handle HTTP request
 * @param {string} url request
 * @example Inside a functional component:
 * const { isLoading, data, error, cancel } = useFetch(URL);
 */
const useFetch = (url: string): State => {
  const [data, setData] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    let isCompleted = false;

    const cancelToken = axios?.CancelToken?.source();
    setIsLoading(true);

    const apiRequest = async () => {
      try {
        const response = await axios.get(url, { cancelToken: cancelToken.token });

        if (response.statusText !== AxiosConstants.Ok) {
          throw new Error('Error HTTP: ', response.status as ErrorOptions);
        }

        !isCompleted && setData(response.data.data);
      } catch (error) {
        setError('An error ocurred');
      } finally {
        setIsLoading(false);
      }
    };
    apiRequest();

    return () => {
      cancelToken?.cancel();
      isCompleted = true;
    };
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;

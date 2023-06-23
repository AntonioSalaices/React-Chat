import { useState, useEffect } from 'react';
import axios from 'axios';

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
        const res = await axios.get(url, { cancelToken: cancelToken.token });
        !isCompleted && setData(res.data.data);
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

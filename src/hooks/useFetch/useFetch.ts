import { useState, useEffect } from 'react';
import axios from 'axios';

interface State {
    data?: any;
    error: Error | string | null;
    loading: boolean;
}

/** 
 * A react hook to easily handle HTTP request
 * @param {string} url request
 * @example Inside a functional component:
 * const { isLoading, data, error, cancel } = useFetch(URL);
*/
const useFetch = (url:string): State  => {
    const [data, setData] = useState<null | any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] =  useState<null | string>(null);

    useEffect(()=> {
        let isCompleted = false;

        const cancelToken = axios.CancelToken.source();
        setLoading(true);

        const apiRequest = async () => {
            try {
               const res = await axios.get(url, { cancelToken: cancelToken.token } );
               !isCompleted && setData(res.data.data)
            } catch (error) {
                setError('An error ocurred');
            } finally {
                setLoading(false);
            }

        }
        apiRequest();

        return () => {
            cancelToken.cancel();
            isCompleted = true;
        };
    }, [url])

    return { data, loading, error };
}

export default useFetch;
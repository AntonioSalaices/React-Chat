import { useState, useEffect } from 'react';
import axios from 'axios';

/** 
 * A react hook to easily handle HTTP request
 * @param {string} url request
 * @example Inside a functional component:
 * const { isLoading, data, error, cancel } = useFetch(URL);
*/
const useFetch = (url: string) => {
    const [data, setData] = useState<null | any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] =  useState<null | string>(null);

    useEffect(()=> {
        const controller = new AbortController();

        setLoading(true);
        setData(null);
        setError(null);
        axios.get(url, { signal: controller.signal } )
            .then(res => {
                res?.data.data && setData(res.data.data)
            })
            .catch(error => {
                setError('An error ocurred');
            }).finally(()=>{
                setLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, [url])

    return { data, loading, error };
}

export default useFetch;
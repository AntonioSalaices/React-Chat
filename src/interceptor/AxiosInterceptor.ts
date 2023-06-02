import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useEffect } from 'react';

enum Security {
    AUTHORIZATION = 'authorization'
}

const getHeaders = (token: string) => ({
    [Security.AUTHORIZATION]: token
});


interface AxiosInterceptorProps {
    children: JSX.Element
}


const AxiosInterceptor = ({children}: AxiosInterceptorProps) => {

    useEffect(()=>{

        const interceptor = axios.interceptors.request.use(
            function(config: InternalAxiosRequestConfig) {
                const token: string = localStorage.getItem('token')
                config.headers = {...getHeaders(token)}

                return config;
            },
            function(error: AxiosError){
                console.error(
                    'Axios Interceptor ERROR', error
                );
                return Promise.reject(error);
            }
        )
        return ()=> axios.interceptors.response.eject(interceptor);
    },[]);

    return children;
}

export default AxiosInterceptor;
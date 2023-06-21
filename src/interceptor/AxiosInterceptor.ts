import { Security } from '@Constans/securityConstants';
import axios, { AxiosError, AxiosRequestHeaders, InternalAxiosRequestConfig } from 'axios';
import { useEffect } from 'react';

export interface Headers {
  Authorization: string | null;
}

const getHeaders = (token: string | null): Headers => ({
  [Security.AUTHORIZATION]: token,
});

interface AxiosInterceptorProps {
  children: JSX.Element;
}

const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  useEffect(() => {
    const interceptor = axios.interceptors.request.use(
      function (config: InternalAxiosRequestConfig) {
        const token: string | null = localStorage.getItem(Security.TOKEN);
        config.headers = { ...getHeaders(token) } as AxiosRequestHeaders;

        return config;
      },
      function (error: AxiosError) {
        console.error('Axios Interceptor ERROR', error);
        return Promise.reject(error);
      }
    );
    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  return children;
};

export default AxiosInterceptor;

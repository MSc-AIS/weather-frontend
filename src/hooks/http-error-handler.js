import { useState, useEffect } from 'react';

/**
 * @author Stavros Lamprinos [stalab at linuxmail.org] on 1/2/2021.
 */

const ErrorHandler = httpClient => {
    const [error, setError] = useState(null);

    const reqInterceptor = httpClient.interceptors.request.use(req => {
      setError(null);
      return req;
    });

    const resInterceptor = httpClient.interceptors.response.use(
      res => res,
      err => {
        setError(err);
      }
    );

    useEffect(() => {
      return () => {
        httpClient.interceptors.request.eject(reqInterceptor);
        httpClient.interceptors.response.eject(resInterceptor);
      };
    }, [httpClient.interceptors.request, httpClient.interceptors.response, reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    };

    return [error, errorConfirmedHandler];
};

export default ErrorHandler;
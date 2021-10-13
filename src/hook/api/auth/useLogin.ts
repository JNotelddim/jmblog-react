import { useMutation, UseMutationOptions } from 'react-query';

import { fetch } from 'src/hook/api';
import { login } from 'src/redux';

import { LoginFormData } from 'src/typings';
import { useAppDispatch } from 'src/hook/redux';
import { serializeLoginResponse } from './login.serializer';

const loginFn = async (formData: LoginFormData) => {
  const res = await fetch(`/auth/login`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    const { accessToken } = await serializeLoginResponse(res);
    // Set token with ServiceWorker so that requests to API send with "Authorization" header
    navigator.serviceWorker.controller?.postMessage({
      type: 'SET_TOKEN',
      token: accessToken,
    });
    return res;
  } else {
    throw new Error('Login failed.');
  }
};

export const UseLogin = (
  options?: UseMutationOptions<Response, unknown, LoginFormData>
) => {
  const dispatch = useAppDispatch();
  const { onSuccess, ...remainingOptions } = options || {};

  return useMutation(loginFn, {
    onSuccess: (data, variables, context) => {
      // trigger auth state update when login succeeds
      dispatch(login());
      typeof onSuccess === 'function' && onSuccess(data, variables, context);
    },
    ...remainingOptions,
  });
};

export default UseLogin;

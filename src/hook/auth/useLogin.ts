import { useMutation, UseMutationOptions } from 'react-query';

import { fetch } from 'src/hook';
import { login } from 'src/redux';

import { AuthFormData } from 'src/typings';
import { useAppDispatch } from '../redux';
import { serializeLoginResponse } from './login.serializer';

const loginFn = async (formData: AuthFormData) => {
  const res = await fetch(`/auth/login`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  const { accessToken } = await serializeLoginResponse(res);
  navigator.serviceWorker.controller?.postMessage({
    type: 'SET_TOKEN',
    token: accessToken,
  });
  return res;
};

export const UseLogin = (
  options?: UseMutationOptions<Response, unknown, AuthFormData>
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

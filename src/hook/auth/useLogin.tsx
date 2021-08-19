import { useMutation } from 'react-query';

import { fetch } from 'src/hook';

import { AuthFormData } from 'src/typings';
import { serializeLoginResponse } from './login.serializer';

const loginFn = async (formData: AuthFormData) => {
  const res = await fetch(`/auth/login`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  const { accessToken } = await serializeLoginResponse(res);
  console.log('trying to set token,', accessToken);
  console.log(
    'is service worker null?',
    navigator.serviceWorker.controller,
    navigator.serviceWorker
  );
  navigator.serviceWorker.controller?.postMessage({
    type: 'SET_TOKEN',
    token: accessToken,
  });
  return res;
};

export const UseLogin = () => {
  return useMutation(loginFn);
};

export default UseLogin;

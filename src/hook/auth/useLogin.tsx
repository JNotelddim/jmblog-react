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
  localStorage.setItem('accessToken', accessToken);
  return res;
};

export const UseLogin = () => {
  return useMutation(loginFn);
};

export default UseLogin;

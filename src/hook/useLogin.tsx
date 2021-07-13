import { useMutation } from 'react-query';

import fetch from './apiFetch';

interface LoginFormData {
  email: string;
  password: string;
}

const loginFn = async ({ email, password }: LoginFormData) => {
  const queryString = `?email=${email}&password=${password}`;
  const res = await fetch(`/auth/login${queryString}`, {
    method: 'POST',
  });
  // do I need to take the auth token manually here, or will it be set automatically?
  return res;
};

export const UseLogin = () => {
  return useMutation(loginFn);
};

export default UseLogin;

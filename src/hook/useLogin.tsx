import { useMutation } from 'react-query';

import fetch from './apiFetch';

interface LoginFormData {
  email: string;
  password: string;
}

const loginFn = async (formData: LoginFormData) => {
  const res = await fetch(`/auth/login`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  // do I need to take the auth token manually here, or will it be set automatically?
  return res;
};

export const UseLogin = () => {
  return useMutation(loginFn);
};

export default UseLogin;

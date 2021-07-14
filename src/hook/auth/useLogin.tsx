import { useMutation } from 'react-query';

import { fetch } from 'src/hook';

import { AuthFormData } from 'src/typings';

const loginFn = async (formData: AuthFormData) => {
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

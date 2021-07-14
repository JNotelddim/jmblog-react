import { useMutation } from 'react-query';

import { fetch } from 'src/hook';
import { AuthFormData } from 'src/typings';

const signupFn = async (formData: AuthFormData) => {
  const res = await fetch(`/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  return res;
};

export const useSignup = () => {
  return useMutation(signupFn);
};

export default useSignup;

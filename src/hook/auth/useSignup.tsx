import { useMutation } from 'react-query';

import { fetch } from 'src/hook';

interface SignupFormData {
  email: string;
  password: string;
}

const signupFn = async (formData: SignupFormData) => {
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

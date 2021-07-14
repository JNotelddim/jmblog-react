// Modules
import React from 'react';

// Layouts
import CenteredLayout from 'src/component/layout/CenteredLayout';

// Hooks
import { useForm } from 'react-hook-form';
import { useLogin } from 'src/hook';

// Types
import { LOGIN, SIGNUP, AuthPageProps } from './AuthPage.type';
import { AuthFormData } from 'src/typings';

// Consts
const prettyStringMap = {
  [LOGIN]: 'Login',
  [SIGNUP]: 'Signup',
};

// Exports
const AuthPage: React.FC<AuthPageProps> = ({ pageType }) => {
  const { mutate } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AuthFormData>();

  const onSubmit = (formData: AuthFormData) => {
    mutate(formData);
  };

  // TODO use react-hooks-form?
  return (
    <CenteredLayout>
      <h2>{prettyStringMap[pageType]}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email')} />
        <br />

        <label>Password</label>
        <input type="password" {...register('password')} />
        <br />

        <button disabled={!isValid} type="submit">
          {prettyStringMap[pageType]}
        </button>
      </form>
    </CenteredLayout>
  );
};

export default AuthPage;

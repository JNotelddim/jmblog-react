// Modules
import React from 'react';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import ErrorText from 'src/component/base/ErrorText';

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
  const { register, handleSubmit, formState } = useForm<AuthFormData>();
  const { isValid, errors } = formState;

  const onSubmit = (formData: AuthFormData) => {
    if (isValid) {
      mutate(formData);
    }
  };

  return (
    <CenteredLayout>
      <h2>{prettyStringMap[pageType]}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email', { required: true })} />
        <ErrorText errorType={errors?.email} />
        <br />

        <label>Password</label>
        <input
          type="password"
          {...register('password', { required: true, minLength: 10 })}
        />
        <ErrorText errorType={errors?.password} />
        <br />

        <button type="submit">{prettyStringMap[pageType]}</button>
      </form>
    </CenteredLayout>
  );
};

export default AuthPage;

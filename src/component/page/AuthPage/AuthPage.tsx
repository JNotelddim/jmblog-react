// Modules
import React from 'react';
import { Box } from '@material-ui/core';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import Text from 'src/component/base/Text';
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
      <Text variant="h1" mb={6} mt={10}>
        {prettyStringMap[pageType]}
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" height="50%">
          <Text variant="h6">Email</Text>
          <input {...register('email', { required: true })} />
          <ErrorText errorType={errors?.email} />

          <Text variant="h6" mt={2}>
            Password
          </Text>
          <input
            type="password"
            {...register('password', { required: true, minLength: 10 })}
          />
          <ErrorText errorType={errors?.password} />

          <Box mt={2} display="flex" flexDirection="row">
            <button type="submit">{prettyStringMap[pageType]}</button>
            <Text variant="body2" color="textSecondary" ml={2}>
              Don't have an accout? Sign up here.
            </Text>
          </Box>
        </Box>
      </form>
    </CenteredLayout>
  );
};

export default AuthPage;

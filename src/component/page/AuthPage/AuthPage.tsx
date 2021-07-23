// Modules
import React from 'react';
import { Box } from '@material-ui/core';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import Text from 'src/component/base/Text';
import ErrorText from 'src/component/base/ErrorText';

// Hooks
import { useForm } from 'react-hook-form';
import { useLogin, useSignup } from 'src/hook';

// Types
import { LOGIN, SIGNUP, AuthPageProps } from './AuthPage.type';
import { AuthFormData } from 'src/typings';
import { Link } from 'react-router-dom';

// Consts
const pageCustomizationsMap = {
  [LOGIN]: {
    prettyString: 'Login',
    authRoute: '/login',
    useAuthHook: useLogin,
  },
  [SIGNUP]: {
    prettyString: 'Sign up',
    authRoute: '/signup',
    useAuthHook: useSignup,
  },
};

// Exports
const AuthPage: React.FC<AuthPageProps> = ({ pageType }) => {
  const { register, handleSubmit, formState } = useForm<AuthFormData>({
    mode: 'onBlur',
  });
  const { isValid, errors } = formState;
  const { prettyString, useAuthHook } = pageCustomizationsMap[pageType];
  const { prettyString: oppositePrettyString, authRoute: oppositeAuthRoute } =
    pageCustomizationsMap[pageType === LOGIN ? SIGNUP : LOGIN];
  const { mutate } = useAuthHook();

  const onSubmit = (formData: AuthFormData) => {
    if (isValid) {
      mutate(formData);
    }
  };

  return (
    <CenteredLayout>
      <Text variant="h1" mb={6} mt={10}>
        {prettyString}
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

          <Box
            mt={4}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <button type="submit">{prettyString}</button>
            <Text variant="body2" color="textSecondary" ml={2}>
              {pageType === LOGIN ? `Don't` : `Already`} have an accout?{' '}
              <Link to={oppositeAuthRoute}>{oppositePrettyString} here.</Link>
            </Text>
          </Box>
        </Box>
      </form>
    </CenteredLayout>
  );
};

export default AuthPage;

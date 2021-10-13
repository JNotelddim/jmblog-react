// Modules
import React, { useState } from 'react';

// Components
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import EmailField from 'src/component/base/EmailField';
import PasswordField from 'src/component/base/PasswordField';
import {
  Heading,
  Wrapper,
  FootingContainer,
  RedirectText,
} from './LoginPage.style';

// Hooks
import { useForm } from 'react-hook-form';
import { useLogin } from 'src/hook/api/auth';

// Types
import { LoginFormData } from 'src/typings';
import ErrorText from 'src/component/base/ErrorText';

/**
 * LoginPage is the page where a user goes to log in to their account.
 * It also gives the option to navigate to the sign up page for users
 * who do not have an account already.
 */
const LoginPage: React.FC = () => {
  // Hooks
  const [generalError, setGeneralError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormData>({
    mode: 'all',
  });
  const { mutate: login } = useLogin({
    onError: (e) => {
      setGeneralError('Invalid credentials.');
    },
  });

  // Handlers
  const onSubmit = (formData: LoginFormData) => {
    if (isValid) {
      login(formData);
    }
  };
  const handlePostFailureChange = () => {
    if (generalError) {
      setGeneralError('');
    }
  };

  // Render
  return (
    <CenteredLayout>
      <Heading>Login</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <EmailField
            inputProps={{
              ...register('email', {
                required: true,
                onChange: handlePostFailureChange,
              }),
            }}
            errorType={errors?.email}
          />

          <PasswordField
            inputProps={{
              ...register('password', {
                required: true,
                onChange: handlePostFailureChange,
              }),
            }}
            errorType={errors?.password}
          />

          <ErrorText>{generalError}</ErrorText>

          <FootingContainer>
            <Button type="submit" disabled={!isValid}>
              Login
            </Button>
            <RedirectText>
              Don't have an accout? <Link to={'/signup'}>Sign up here.</Link>
            </RedirectText>
          </FootingContainer>
        </Wrapper>
      </form>
    </CenteredLayout>
  );
};

export default LoginPage;

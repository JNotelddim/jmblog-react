// Modules
import React, { useState, FC } from 'react';

// Components
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EmailField from 'src/component/base/EmailField';
import PasswordField from 'src/component/base/PasswordField';
import { Wrapper, FootingContainer, RedirectText } from './LoginForm.style';

// Hooks
import { useForm } from 'react-hook-form';
import { useLogin } from 'src/hook/api/auth';

// Types
import { LoginFormData } from 'src/typings';
import ErrorText from 'src/component/base/ErrorText';

/**
 * LoginForm encapsulates the visual elements and logic for logging a user in.
 *
 * It also handles redirecting the user to the /signup page.
 * (I'd prefer if it didn't, but I want the )
 */
const LoginForm: FC = () => {
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
  );
};

export default LoginForm;

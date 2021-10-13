// Modules
import React, { useState, FC } from 'react';

// Components
import { Button, Box } from '@material-ui/core';
import EmailField from 'src/component/base/EmailField';
import PasswordField from 'src/component/base/PasswordField';
import { Form } from './LoginForm.style';

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
    <Form onSubmit={handleSubmit(onSubmit)}>
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

      <Box mt={3}>
        <Button type="submit" disabled={!isValid}>
          Login
        </Button>
      </Box>
    </Form>
  );
};

export default LoginForm;

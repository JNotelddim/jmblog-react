// Modules
import React, { FC } from 'react';
import { Button, Box } from '@material-ui/core';

// Components
import EmailField from 'src/component/base/EmailField';
import PasswordField from 'src/component/base/PasswordField';

// Note that the styles below are from the Login Page!
import { Form } from 'src/component/form/LoginForm/LoginForm.style';

// Hooks
import { useForm } from 'react-hook-form';
import { useSignup } from 'src/hook/api/auth';
import { useHistory } from 'react-router-dom';

// Types
import { SignupFormData } from 'src/typings';

/**
 * SignupForm composes the visual form elements to enable a user to sign up,
 * including the form validation and api requests involved.
 */
const SignupForm: FC = (props) => {
  // Hooks
  const history = useHistory();
  const { register, handleSubmit, formState, getValues, setError } =
    useForm<SignupFormData>({
      mode: 'onBlur',
    });
  const { mutate: signup } = useSignup({
    onSuccess: () => {
      history.push('/login');
      // TODO success snackbar
    },
    onError: (e) => {
      // TODO: error snackbar
      setError('email', { message: (e as Error).message, type: 'validate' });
    },
  });
  const { isValid, errors } = formState;

  // Handlers
  const onSubmit = (formData: SignupFormData) => {
    if (isValid) {
      signup(formData);
    }
  };

  // Render
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <EmailField
        inputProps={{
          ...register('email', {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          }),
        }}
        errorText={errors?.email?.message}
      />

      <PasswordField
        inputProps={{
          ...register('password', {
            required: true,
            minLength: 10,
            maxLength: 100,
          }),
        }}
        errorType={errors?.password}
      />

      <PasswordField
        label="Confirm Password"
        inputProps={{
          ...register('passwordConfirmation', {
            required: true,
            validate: (value) => {
              const otherValue = getValues('password');
              return value === otherValue;
            },
          }),
        }}
        errorType={errors?.passwordConfirmation}
      />

      <Box mt={3}>
        <Button type="submit" disabled={!isValid}>
          Sign up
        </Button>
      </Box>
    </Form>
  );
};

export default SignupForm;

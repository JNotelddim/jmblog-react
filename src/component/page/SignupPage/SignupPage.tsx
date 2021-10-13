// Modules
import React from 'react';
import { Button } from '@material-ui/core';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import EmailField from 'src/component/base/EmailField';
import PasswordField from 'src/component/base/PasswordField';

// Note that the styles below are from the Login Page!
import { Heading } from 'src/component/page/LoginPage/LoginPage.style';
import {
  Wrapper,
  FootingContainer,
  RedirectText,
} from 'src/component/form/LoginForm/LoginForm.style';

// Hooks
import { useForm } from 'react-hook-form';
import { useSignup } from 'src/hook/api/auth';

// Types
import { SignupFormData } from 'src/typings';
import { Link, useHistory } from 'react-router-dom';

/**
 * SignupPage is the page where a user comes to create an account.
 * After the successful account creation, they will be redirected to the /login page.
 */
const SignupPage: React.FC = () => {
  // Hooks
  const history = useHistory();
  const { register, handleSubmit, formState, getValues } =
    useForm<SignupFormData>({
      mode: 'onBlur',
    });
  const { mutate: signup } = useSignup({
    onSuccess: () => {
      history.push('/login');
      // TODO success snackbar once snackbar provider is set up
    },
    // TODO: add onError here which adds some component state for a generalError (See LoginPage)
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
    <CenteredLayout>
      <Heading>Sign up</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <EmailField
            inputProps={{
              ...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              }),
            }}
            errorType={errors?.email}
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

          <FootingContainer>
            <Button type="submit" disabled={!isValid}>
              Sign up
            </Button>
            <RedirectText>
              Already have an accout? <Link to={'/login'}>Login here.</Link>
            </RedirectText>
          </FootingContainer>
        </Wrapper>
      </form>
    </CenteredLayout>
  );
};

export default SignupPage;

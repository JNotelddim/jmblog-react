// Modules
import React from 'react';
import { Button } from '@material-ui/core';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import EmailField from 'src/component/form/EmailField';
import PasswordField from 'src/component/form/PasswordField';
import {
  Heading,
  Wrapper,
  FootingContainer,
  RedirectText,
  // Note that these are styles from the Login Page!
} from 'src/component/page/LoginPage/LoginPage.style';

// Hooks
import { useForm } from 'react-hook-form';
import { useSignup } from 'src/hook/api/auth';

// Types
import { SignupFormData } from 'src/typings';
import { Link } from 'react-router-dom';

/**
 * SignupPage is the page where a user comes to create an account.
 * After the successful account creation, they will be redirected to the /login page.
 */
const SignupPage: React.FC = () => {
  // Hooks
  const { register, handleSubmit, formState, getValues } =
    useForm<SignupFormData>({
      mode: 'onBlur',
    });
  const { mutate: signup } = useSignup(); // TODO: onsuccess redirect to /login
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
            <Button type="submit">Sign up</Button>
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

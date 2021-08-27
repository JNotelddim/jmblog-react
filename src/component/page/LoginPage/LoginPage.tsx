// Modules
import React from 'react';

// Components
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import EmailField from 'src/component/form/EmailField';
import PasswordField from 'src/component/form/PasswordField';
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

/**
 * LoginPage is the page where a user goes to log in to their account.
 * It also gives the option to navigate to the sign up page for users
 * who do not have an account already.
 */
const LoginPage: React.FC = () => {
  // Hooks
  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    mode: 'onBlur',
  });
  const { mutate: login } = useLogin();
  const { isValid, errors } = formState;

  // Handlers
  const onSubmit = (formData: LoginFormData) => {
    if (isValid) {
      login(formData);
    }
  };

  // Render
  return (
    <CenteredLayout>
      <Heading>Login</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <EmailField
            inputProps={{ ...register('email', { required: true }) }}
            errorType={errors?.email}
          />

          <PasswordField
            inputProps={{ ...register('password', { required: true }) }}
            errorType={errors?.password}
          />

          <FootingContainer>
            <Button type="submit">Login</Button>
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

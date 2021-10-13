// Modules
import React from 'react';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import LoginForm from 'src/component/form/LoginForm';
import { Heading } from './LoginPage.style';

/**
 * LoginPage is the page where a user goes to log in to their account.
 */
const LoginPage: React.FC = () => (
  <CenteredLayout>
    <Heading>Login</Heading>

    <LoginForm />
  </CenteredLayout>
);

export default LoginPage;

// Modules
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import LoginForm from 'src/component/form/LoginForm';
import { Heading, RedirectText, Footer } from './LoginPage.style';

/**
 * LoginPage is the page where a user goes to log in to their account.
 * It also gives them the option to move to the Signup page if they don't have
 * an account yet.
 * TODO: 'forgot your password?' -- blocked by API.
 */
const LoginPage: React.FC = () => (
  <CenteredLayout>
    <Heading>Login</Heading>

    <LoginForm />

    <Footer>
      <RedirectText>
        Don't have an accout? <Link to={'/signup'}>Sign up here.</Link>
      </RedirectText>
    </Footer>
  </CenteredLayout>
);

export default LoginPage;

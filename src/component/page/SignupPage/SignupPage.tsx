// Modules
import React from 'react';
import { Box } from '@material-ui/core';

// Components
import CenteredLayout from 'src/component/layout/CenteredLayout';
import Text from 'src/component/base/Text';
import ErrorText from 'src/component/base/ErrorText';

// Hooks
import { useForm } from 'react-hook-form';
import { useSignup } from 'src/hook';

// Types
import { SignupFormData } from 'src/typings';
import { Link } from 'react-router-dom';

// Exports
const SignupPage: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<SignupFormData>({
    mode: 'onBlur',
  });
  const { isValid, errors } = formState;
  const { mutate: login } = useSignup();
  // {
  //   onSuccess: () => {
  //   // TODO add options
  //     // TODO: redirect to /login
  //   },
  // });

  // TODO: add styles file (clean up this render block)

  const onSubmit = (formData: SignupFormData) => {
    if (isValid) {
      login(formData);
    }
  };

  return (
    <CenteredLayout>
      <Text variant="h1" mb={6} mt={10}>
        Sign up
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
          <input
            type="password"
            {...register('passwordConfirmation', {
              required: true,
              minLength: 10,
              validate: () => {
                // TODO: logic for validating that this field matches 'password'
                return false;
              },
            })}
          />
          <ErrorText errorType={errors?.password} />

          <Box
            mt={4}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <button type="submit">Sign up</button>
            <Text variant="body2" color="textSecondary" ml={2}>
              Already have an accout? <Link to={'/login'}>Log in here.</Link>
            </Text>
          </Box>
        </Box>
      </form>
    </CenteredLayout>
  );
};

export default SignupPage;

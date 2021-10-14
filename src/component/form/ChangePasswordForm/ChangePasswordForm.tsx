// Modules
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

// Components
import { Box, Button } from '@material-ui/core';
import PasswordField from 'src/component/base/PasswordField';

// Styles
import { Form } from './ChangePasswordForm.style';

// Hooks
import { useChangePassword } from 'src/hook/api/user';
import { useSnackbarNotification } from 'src/hook/effect';

// Typings
import { PasswordChangeFormData } from 'src/typings';
import { ChangePasswordFormProps } from './ChangePasswordForm.type';

/**
 * ChangePasswordForm displays a form which handles verifying the user's current
 * password and updating it to a new value.
 */
const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ onCancel }) => {
  const { openNotification } = useSnackbarNotification();
  const { register, handleSubmit, formState, getValues, reset } =
    useForm<PasswordChangeFormData>({
      mode: 'all',
    });
  const { errors, isValid } = formState;
  const { mutate: changePassword } = useChangePassword({
    onSuccess: () => {
      openNotification({
        message: 'You password has been updated.',
        type: 'SUCCESS',
      });
      reset();
      onCancel();
    },
    onError: (e) => {
      openNotification({
        message: 'Password update failed. Please try again.',
        type: 'ERROR',
      });
    },
  });

  // Handlers
  const onSubmit = (formData: PasswordChangeFormData) => {
    changePassword(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <PasswordField
        label="Old Password"
        inputProps={{ ...register('oldPassword', { required: true }) }}
        errorType={errors?.oldPassword}
      />

      <PasswordField
        label="New Password"
        inputProps={{
          ...register('newPassword', {
            required: true,
            minLength: 10,
            maxLength: 100,
          }),
        }}
        errorType={errors?.newPassword}
      />

      <PasswordField
        label="Confirm Password"
        inputProps={{
          ...register('passwordConfirmation', {
            required: true,
            validate: (value) => {
              const otherValue = getValues('newPassword');
              return value === otherValue;
            },
          }),
        }}
        errorType={errors?.passwordConfirmation}
      />

      <Box display="flex" mt={2}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" disabled={!isValid}>
          Save Change
        </Button>
      </Box>
    </Form>
  );
};

export default ChangePasswordForm;

// Modules
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

// Components
import { Box, Button } from '@material-ui/core';
import TextField from 'src/component/base/TextField';

// Styles
import { Form } from './ChangePasswordForm.style';

// Hooks
import { useChangePassword } from 'src/hook/api/user';

// Typings
import { PasswordChangeFormData } from 'src/typings';
import { ChangePasswordFormProps } from './ChangePasswordForm.type';

/**
 * ChangePasswordForm displays a form which handles verifying the user's current
 * password and updating it to a new value.
 */
const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    reset,
  } = useForm<PasswordChangeFormData>({
    mode: 'onBlur',
  });
  const { mutate: changePassword } = useChangePassword({
    onSuccess: () => {
      reset();
      onCancel();
    },
    onError: (e) => {
      // TODO: notify user w/ snackbar notification
      console.error(e);
    },
  });

  // Handlers
  const onSubmit = (formData: PasswordChangeFormData) => {
    changePassword(formData);
  };

  return (
    <Form onSubmit={() => handleSubmit(onSubmit)}>
      <TextField
        label="Old Password"
        inputProps={{ ...register('oldPassword', { required: true }) }}
        errorType={errors?.oldPassword}
      />

      <TextField
        label="New Password"
        inputProps={{ ...register('newPassword', { required: true }) }}
        errorType={errors?.newPassword}
      />

      <TextField
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
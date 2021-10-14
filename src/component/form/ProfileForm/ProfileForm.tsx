// Modules
import { FC } from 'react';

// Components
import { Button, Box } from '@material-ui/core';
import Text from 'src/component/base/Text';
import TextField from 'src/component/base/TextField';

// Styles
import { Form } from './ProfileForm.style';

// Hooks
import { useForm } from 'react-hook-form';
import { useProfile, usePutProfile } from 'src/hook/api/user';
import { useSnackbarNotification } from 'src/hook/effect';

// Types
import { ProfileFormData } from 'src/typings';
import { ProfileFormProps } from './ProfileForm.type';

/**
 * ProfileForm creates a form where the user can edit their profile information.
 */
const ProfileForm: FC<ProfileFormProps> = ({ handleDoneEditing }) => {
  // Snackbars Hook
  const { openNotification } = useSnackbarNotification();

  // Profile Fetch Hook
  const {
    data: profile,
    isLoading,
    isError,
  } = useProfile({
    onSettled: (data, error) => reset(data),
  });

  // Profile Update Hook
  const { mutate: putProfile } = usePutProfile({
    onSuccess: () => {
      openNotification({ message: 'Profile updated.', type: 'SUCCESS' });
    },
    onError: () => {
      openNotification({
        message: 'Profile update failed. Please try again later.',
        type: 'ERROR',
      });
    },
  });

  // Form Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    mode: 'onBlur',
    defaultValues: profile,
  });

  // Handlers
  const onSubmit = (formData: ProfileFormData) => {
    if (!profile) {
      openNotification({
        message:
          'There was an issue submitting at this time. Please try again later.',
        type: 'ERROR',
      });
      return;
    }
    putProfile({ ...formData, id: profile.id });
    reset();
    handleDoneEditing();
  };

  return isLoading || isError ? (
    <Text>Loading...</Text>
  ) : (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        inputProps={{
          ...register('email', { required: true }),
        }}
        errorType={errors?.email}
      />
      <TextField
        label="Username"
        inputProps={{
          ...register('userName', { required: false }),
        }}
        errorType={errors?.email}
      />
      <TextField
        label="First Name"
        inputProps={{
          ...register('firstName', { required: false }),
        }}
        errorType={errors?.firstName}
      />
      <TextField
        label="LastName"
        inputProps={{
          ...register('lastName', { required: false }),
        }}
        errorType={errors?.lastName}
      />
      <Box display="flex" flexDirection="row" mt={4}>
        <Button onClick={handleDoneEditing}>Cancel</Button>
        <Button type="submit">Save</Button>
      </Box>
    </Form>
  );
};

export default ProfileForm;

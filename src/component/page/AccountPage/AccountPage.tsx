// Modules
import React, { FC, useState } from 'react';

// Components
import { Button, Box, IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import Text from 'src/component/base/Text';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import TextField from 'src/component/form/TextField';

// Hooks
import { useForm } from 'react-hook-form';
import { useProfile /*, usePutProfile */ } from 'src/hook/api/user';

// Styles
import { Form } from './AccountPage.style';

// Types
import { ProfileFormData } from 'src/typings';

/**
 * AccountPage shows the user their profile information, and offers
 * the opportunity to edit that information.
 * For now, I'm making the email address field disabled, because I don't
 * want emails getting changed around.
 *
 * Also, I think it's worth noting that the strucutre of these contents is
 * currently contrary to my intended pattern. A more ideal structure would be for
 * these contents to be split into an ProfileView component and and EditProfileForm
 * component, which would each be rendered from this Page component depending on
 * what state the page is in. The reason I haven't got it set up that way is that I've
 * currently got the src/component/form directory misused.
 */
const AccountPage: FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    data: profile,
    isLoading,
    isError,
  } = useProfile({ onSettled: () => reset() });

  const { register, handleSubmit, formState, reset } = useForm<ProfileFormData>(
    {
      mode: 'onBlur',
      defaultValues: profile,
    }
  );

  const { errors } = formState;
  const isReady = profile !== undefined && !isLoading && !isError;

  // Handlers
  const onSubmit = (formData: ProfileFormData) => {
    // TODO: make this hook
    // putProfile({ ...formData });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // Render
  return (
    <CenteredLayout>
      <Text variant="h2">Account</Text>

      {!isReady && <Text> Loading...</Text>}

      {isReady && !isEditing ? (
        <>
          <Box display="flex" flexDirection="row-reverse">
            <IconButton onClick={handleEdit}>
              <Edit />
            </IconButton>
          </Box>
          <Box>
            <Text>Email: {profile?.email}</Text>
            <Text>Username: {profile?.username}</Text>
            <Text>First Name: {profile?.firstName}</Text>
            <Text>Last Name: {profile?.lastName}</Text>
          </Box>
        </>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            inputProps={{
              ...register('email', { required: true, disabled: true }),
            }}
            errorType={errors?.email}
          />
          <TextField
            label="Username"
            inputProps={{
              ...register('username', { required: false }),
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
            <Button onClick={handleCancelEdit}>Cancel</Button>
            <Button type="submit">Save</Button>
          </Box>
        </Form>
      )}
    </CenteredLayout>
  );
};

export default AccountPage;
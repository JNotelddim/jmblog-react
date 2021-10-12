// Modules
import React, { FC } from 'react';

// Components
import { Box, IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import LabelledText from 'src/component/base/LabelledText';

// Typings
import { ProfileViewProps } from './ProfileView.type';

// Hooks
import { useProfile } from 'src/hook/api/user';
import Text from 'src/component/base/Text';

/**
 * ProfileView displays the user's profile information
 */
const ProfileView: FC<ProfileViewProps> = ({ handleSwapToEditing }) => {
  const { data: profile, isLoading, isError } = useProfile();

  return (
    <>
      <Box display="flex" flexDirection="row-reverse">
        <IconButton onClick={handleSwapToEditing}>
          <Edit />
        </IconButton>
      </Box>
      {isLoading || isError ? (
        <Text>Loading...</Text>
      ) : (
        <Box>
          <LabelledText label="Email">{profile?.email}</LabelledText>
          <LabelledText label="User Name">{profile?.userName}</LabelledText>
          <LabelledText label="First Name">{profile?.firstName}</LabelledText>
          <LabelledText label="Last Name">{profile?.lastName}</LabelledText>
        </Box>
      )}
    </>
  );
};

export default ProfileView;

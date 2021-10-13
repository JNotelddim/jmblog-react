// Modules
import React, { FC } from 'react';

// Components
import { Box } from '@material-ui/core';

// Styled Components
import { LabelledText } from './Profile.style';

// Hooks
import { useProfile } from 'src/hook/api/user';
import Text from 'src/component/base/Text';

/**
 * ProfileView displays the user's profile information
 */
const ProfileView: FC = () => {
  const { data: profile, isLoading, isError } = useProfile();

  return isLoading || isError ? (
    <Text>Loading...</Text>
  ) : (
    <Box>
      <LabelledText label="Email">{profile?.email}</LabelledText>
      <LabelledText label="User Name">{profile?.userName}</LabelledText>

      <Box display="flex">
        <LabelledText label="First Name">{profile?.firstName}</LabelledText>
        <LabelledText label="Last Name">{profile?.lastName}</LabelledText>
      </Box>
    </Box>
  );
};

export default ProfileView;

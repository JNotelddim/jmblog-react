// Modules
import React, { FC, useState } from 'react';

// Components
import { Box, Button } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import Text from 'src/component/base/Text';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import ProfileView from 'src/component/view/ProfileView';
import ProfileForm from 'src/component/form/ProfileForm';
import ChangePasswordForm from 'src/component/form/ChangePasswordForm';

enum StatesEnum {
  'View',
  'Edit',
  'ChangePassword',
}
/**
 * AccountPage shows the user their profile information, and offers
 * the opportunity to edit that information.
 */
const AccountPage: FC = () => {
  const [viewState, setViewState] = useState<StatesEnum>(StatesEnum.View);

  const swapToViewing = () => {
    setViewState(StatesEnum.View);
  };

  const swapToEditing = () => {
    setViewState(StatesEnum.Edit);
  };

  const swapToChangingPassword = () => {
    setViewState(StatesEnum.ChangePassword);
  };

  // Render
  return (
    <CenteredLayout helmetProps={{ title: 'Account' }}>
      <Text variant="h2">Account</Text>

      {viewState === StatesEnum.View && (
        <>
          {/* Rearrange these to make it less ugly */}
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Button onClick={swapToChangingPassword}>Change Password</Button>
            <Button startIcon={<Edit />} onClick={swapToEditing}>
              Edit
            </Button>
          </Box>
          <ProfileView />
        </>
      )}

      {viewState === StatesEnum.Edit && (
        <ProfileForm handleDoneEditing={swapToViewing} />
      )}

      {viewState === StatesEnum.ChangePassword && (
        <ChangePasswordForm onCancel={swapToViewing} />
      )}
    </CenteredLayout>
  );
};

export default AccountPage;

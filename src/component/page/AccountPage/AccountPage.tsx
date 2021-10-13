// Modules
import React, { FC, useState } from 'react';

// Components
import Text from 'src/component/base/Text';
import CenteredLayout from 'src/component/layout/CenteredLayout';
import ProfileView from 'src/component/view/ProfileView';
import ProfileForm from 'src/component/form/ProfileForm';

/**
 * AccountPage shows the user their profile information, and offers
 * the opportunity to edit that information.
 */
const AccountPage: FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDoneEditing = () => {
    setIsEditing(false);
  };

  const handleSwapToEditing = () => {
    setIsEditing(true);
  };

  // TODO: add in 'changePassword' button => form/modal

  // Render
  return (
    <CenteredLayout>
      <Text variant="h2">Account</Text>

      {!isEditing ? (
        <ProfileView handleSwapToEditing={handleSwapToEditing} />
      ) : (
        <ProfileForm handleDoneEditing={handleDoneEditing} />
      )}
    </CenteredLayout>
  );
};

export default AccountPage;

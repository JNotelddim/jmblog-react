// Modules
import React from 'react';
import Text from 'src/component/base/Text';

// Hooks
import { useProfileById } from 'src/hook/api/user';

// Types
import { SubheadingProps } from './PostSubheading.type';

/**
 * PostSubheading takes some of the meta info for the post and makes
 * its display format a little more appealing.
 * Ex/ it swaps the user id for the actual user's name by fetching
 * that user's profile. It also formats the date string to be prettier.
 */
const PostSubheading = ({ authorId, createdAt }: SubheadingProps) => {
  const { data: authorProfile, isError, isLoading } = useProfileById(authorId);
  const { email, firstName, lastName } = authorProfile || {};

  const hasName = firstName || lastName;

  return isLoading || isError ? null : (
    <Text variant="subtitle1" color="textSecondary">
      written by{' '}
      <Text component="span">
        {hasName ? `${firstName} ${lastName}` : email}
      </Text>
      {' on '}
      <Text component="span">{new Date(createdAt).toDateString()}</Text>
    </Text>
  );
};

export default PostSubheading;

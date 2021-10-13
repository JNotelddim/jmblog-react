import React from 'react';
import { styled, Box } from '@material-ui/core';

import Text from 'src/component/base/Text';

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  height: '50%',
});

export const FootingContainer = styled((props) => (
  <Box
    mt={4}
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    {...props}
  />
))({});

export const RedirectText = styled((props) => (
  <Text variant="body2" color="textSecondary" ml={2} {...props} />
))({});
